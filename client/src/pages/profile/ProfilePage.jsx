import { React, useEffect } from "react";
import "./profile.scss";
import { MainLayout } from "../../components/mainlayout/MainLayout";
import images from "../../assets/images/Images";
import { useNavigate } from "react-router-dom";
/* for form validation we've to install "npm install react-hook-form" */
import { useForm } from "react-hook-form";
//to fetch user data we have to import useQuery
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/reducers/userReducers";
import { getUserProfile, updateProfile } from "../../services/index/users";
import { ProfilePicture } from "../../components/ProfilePicture";
import toast from "react-hot-toast";
// we 've to import toaster also in the app.js file
export const ProfilePage = () => {
  //creating an instance of my useNavigate
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //with our userState wwe wanna return a piece àf state
  const userState = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  //initialisation with useQuery
  const {
    data, //it equal to data:data
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    // the first function we wanna run when this page load
    queryFn: () => {
      // i had the problem of token before i resolve it inside the controllers
      //so now i can return user.stateInfo.token
      return getUserProfile({ token: userState.userInfo.token });
      //we've to return a function that return a props
    },
    //the query key is very important cause if we have the same keys
    //we gonna catch the same data
    queryKey: ["profile"],
  });
  //console.log(`my token: ${userState.userInfo}`);

  const { mutate, isLoading: updateProfileIsLoading } = useMutation({
    //mutationFn return a promise
    mutationFn: ({ name, email, password }) => {
      return updateProfile({
        // i had the problem of token before i resolve it inside the controllers
        //so now i can return user.stateInfo.token
        token: userState.userInfo.token,
        userData: { name, email, password },
      });
    },
    //After getting the data from the backend
    //the Onsuccess run automatically it has a callback we r passing the data
    onSuccess: (data) => {
      // console.log(data);
      dispatch(userAction.setUserInfo(data));
      //notice when we refresh our page our data in the
      //store will disappear and we dont want that so we gonna
      //store our data in localStorage
      localStorage.setItem("account", JSON.stringify(data));
      // i've to pull out then my data in my localstorage and store it to my redux store
      //onece a data is updated we've to invalidate the query with key profile
      //and refresh notice when we invalidate the query it refresh automatically
      queryClient.invalidateQueries(["profile"]);

      toast.success("Data is updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
      //to test it insinde our async function signup
      //we tried to remove one required field and then try to register from the navigator
    },
  });
  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  //inside the const we get the register and the handleSubmit
  // we've to pull out the errors and isValid properties from the useForm

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      //at first my fiels are empty (defaultValues)
      name: "",
      email: "",
      password: "",
    },
    //in useForm hook there's a property called values
    //so we can update input values after getting data from the backend
    values: {
      name: profileIsLoading ? "" : data.name,
      email: profileIsLoading ? "" : data.email,
      avatar: profileIsLoading ? "" : data.avatar,
    },
    mode: "onChange",
  });
  console.log(errors);
  //console.log(`profile data ppage deug ${data}`);
  const submitHandler = (data) => {
    //console.log(data);
    //pull out the data
    const { name, email, password } = data;
    //and then i call my mutate
    mutate({ name, email, password });
  };
  return (
    <>
      <MainLayout>
        <section className="flex flex-col container-register container mx-auto px-5 py-10  md:w-[598px] lg:w-[598px]  my-10 gap-y-4  ">
          <div className="title text-xl font-bold">Profile</div>
          {/**notice we put a question mark (?) if we didn't
           * sure the data exist otherwise it will be data.avatar
           * but instead we wrote data?.avatar
           * in case there's an error we get undefined instead of an
           * error and we all know getting the data from the backend we r not sure
           * if it'll succeed without an error*/}
          <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]  rounded-md px-2 py-3">
            <ProfilePicture avatar={data?.avatar} className="" />
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className=" md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 px-4 md:px-0 lg:px-0">
                <div className="fit-cover image hidden md:block lg:block">
                  <img src={images.heroImg} alt="" />
                </div>

                <div className="user-informations  justify-between ">
                  <div className={`input-box flex flex-col items-center `}>
                    <span className="input-title text-md font-bold">Nom</span>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className={`border ${
                        errors.name ? "border-red-500" : "border-[#ccc]"
                      }`}
                      {...register("name", {
                        minLength: {
                          value: 1,
                          message: "Name length must be at least 1 character",
                        },
                        required: {
                          value: true,
                          message: "Name is required",
                        },
                      })}
                      id="name"
                    />
                    {/**if errrr.name dot message is true && */}
                    {errors.name?.message && (
                      <p className="text-red-500 mt-1 text-xs">
                        {errors.name?.message}
                      </p>
                    )}
                  </div>

                  <div className="input-box flex flex-col items-center">
                    <span className="input-title text-md font-bold">Email</span>
                    <input
                      type="text"
                      placeholder="Enter your email adress"
                      className={`border ${
                        errors.email ? "border-red-500" : "border-[#ccc]"
                      }`}
                      {...register("email", {
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Enter a valid email",
                        },
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                      })}
                      id="email"
                    />
                    {errors.email?.message && (
                      <p className="text-red-500 mt-1 text-xs">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>

                  <div className="input-box flex flex-col items-center">
                    <span className="input-title text-md font-bold">
                      New Password (optional)
                    </span>
                    <input
                      type="password"
                      placeholder="Enter a new password"
                      className={`border ${
                        errors.password ? "border-red-500" : "border-[#ccc]"
                      }`}
                      {...register("password")}
                      id="password"
                    />
                    {errors.password?.message && (
                      <p className="text-red-500 mt-1 text-xs">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between w-full mt-4">
                    {/**inside the register btn className i said if the
                     * button is disabled the opacity must be 0.7 and cursor not allowed
                     */}
                    <button
                      type="submit"
                      className="disabled:opacity-70 disabled:cursor-not-allowed btn-save px-4 text-white py-2 rounded-md shadow-md"
                      disabled={
                        !isValid || profileIsLoading || updateProfileIsLoading
                      }
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </MainLayout>
    </>
  );
};
