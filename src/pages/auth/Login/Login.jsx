import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {
  const location=useLocation()
    const navigate=useNavigate()
  // console.log('form login', location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signinUser}=useAuth()
  const handleRegister = (data) => {
   signinUser(data.email, data.password).then(result=>{
    console.log(result.user);
    navigate(location?.state || '/')
   })
   .catch(error=>{
    console.log(error);
   })
  };
  return (
    <div className="space-y-4  ">
      <div className="">
        <h1 className="text-3xl font-black space-y-4">Welcome Back</h1>
        <p>Login with ZapShift</p>
      </div>
      {/*form  */}
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <label className="label text-lg">Email</label>
          {/* email field */}
          <input
            {...register("email", { required: true })}
            type="email"
            className="input w-full text-lg"
            placeholder="Email "
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-lg">email is required.</p>
          )}
          <label className="label text-lg">Password</label>
          {/* password field */}
          <input
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            type="password"
            className="input w-full text-lg"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-lg">password is required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-lg">
              password must be 6 characters or long.
            </p>
          )}

          <div>
            <a className="link link-hover text-lg">Forgot password?</a>
          </div>
          <button className="btnsBg text-lg">Login</button>
          <p className="text-lg">
            Don’t have any account?{" "}
            <Link state={location.state} to={"/register"} className="text-blue-500 hover:to-blue-600 underline">
              Register
            </Link>
          </p>
        </fieldset>
      </form>
      <SocialLogin/>
    </div>
  );
};

export default Login;
