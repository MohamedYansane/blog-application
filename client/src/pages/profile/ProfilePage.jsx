import { React, useEffect } from "react";
import "./profile.scss";
import { MainLayout } from "../../components/mainlayout/MainLayout";
import images from "../../assets/images/Images";
import { useNavigate } from "react-router-dom";
/* for form validation we've to install "npm install react-hook-form" */
import { useForm } from "react-hook-form";
//to fetch user data we have to import useQuery
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/reducers/userReducers";
import { getUserProfile } from "../../services/index/users";
import { ProfilePicture } from "../../components/ProfilePicture";
export const ProfilePage = () => {
  //creating an instance of my useNavigate
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //with our userState wwe wanna return a piece àf state
  const userState = useSelector((state) => state.user);
  //initialisation with useQuery
  const {
    data, //it equal to data:data
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    // the first function we wanna run when this page load
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo });
      //we've to return a function that return a props
    },
    //the query key is very important cause if we have the same keys
    //we gonna catch the same data
    queryKey: ["profile"],
  });
  //console.log(`my token: ${userState.userInfo}`);
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
                      Password
                    </span>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className={`border ${
                        errors.password ? "border-red-500" : "border-[#ccc]"
                      }`}
                      {...register("password", {
                        required: {
                          value: true,
                          message: "The password is required",
                        },
                        minLength: {
                          value: 6,
                          message: "The password must be at least 6 characters",
                        },
                      })}
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
                      disabled={!isValid || profileIsLoading}
                    >
                      Register
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
