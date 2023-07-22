import { React, useEffect } from "react";
import "./login.scss";
import { MainLayout } from "../../components/mainlayout/MainLayout";
import images from "../../assets/images/Images";
import { Link, useNavigate } from "react-router-dom";
/* for form validation we've to install "npm install react-hook-form" */
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
// we 've to import toaster also in the app.js file
import toast from "react-hot-toast";

//redux component
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/reducers/userReducers";
import { loginUser } from "../../services/index/users";
export const LoginPage = () => {
  //creating an instance of my useNavigate
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //with our userState wwe wanna return a piece àf state
  const userState = useSelector((state) => state.user);
  const { mutate, isLoading } = useMutation({
    //mutationFn return a promise
    mutationFn: ({ email, password }) => {
      return loginUser({ email, password });
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
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
      //to test it insinde our async function signup
      //we tried to remove one required field and then try to login from the navigator
    },
  });
  // i wanna redirect a user if he's logged in
  useEffect(() => {
    if (userState.userInfo) {
      //i wanna redirect him to the login page
      //to redirect we gonna use useNavigator from react router dom
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  //inside the const we get the login and the handleSubmit
  // we've to pull out the errors and isValid properties from the useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ defaultValue: { email: "", password: "" }, mode: "onChange" });
  console.log(errors);
  //for confirm password validation we've to do a trick

  // the handlesubmit is using react hook form if it's
  //correct it will call the submitHandler other it wont work
  //important: now we gonna get data
  const submitHandler = (data) => {
    //console.log(data);
    const { email, password } = data;
    mutate({ email, password });
  };
  return (
    <>
      <MainLayout>
        <section className="container-login container mx-auto px-5 py-10  md:w-[598px] lg:w-[598px]  my-10 gap-y-4  ">
          <div className="title text-xl font-bold">Login</div>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]  rounded-md px-2 py-3"
          >
            <div className=" md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 px-4 md:px-0 lg:px-0">
              <div className="fit-cover image hidden md:block lg:block">
                <img src={images.heroImg} alt="" />
              </div>

              <div className="user-informations  justify-between ">
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
                  <Link
                    to="/forget-password"
                    className="forget-password text-primary text-sm"
                  >
                    Forgot Password?
                  </Link>
                  {/**inside the login btn className i said if the
                   * button is disabled the opacity must be 0.7 and cursor not allowed
                   */}
                  <button
                    type="submit"
                    className="disabled:opacity-70 disabled:cursor-not-allowed btn-save px-4 text-white py-2 rounded-md shadow-md"
                    disabled={!isValid || isLoading}
                  >
                    SignIn
                  </button>
                </div>
                <div className="flex justify-between w-full mt-4">
                  <p className=" text-gray-600 text-sm cursor-pointer">
                    Do not have an account?
                  </p>
                  <Link
                    to="/register"
                    className=" text-primary text-sm"
                    type="submit"
                  >
                    Register now
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </section>
      </MainLayout>
    </>
  );
};
