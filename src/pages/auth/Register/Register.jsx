import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const location=useLocation()
  const navigate=useNavigate()
  console.log('form register', location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser,profileUpdate } = useAuth();
  const handleRegister = (data) => {
    console.log("after register", data.photo[0]);
    const profileImage = data.photo[0];

    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // store the image and get the url
        const formData = new FormData();
        formData.append("image", profileImage);
        const image_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImageBB_host_key}`;
        axios
          .post(image_api_url, formData)
          .then((res) => {
            console.log("image", res.data.data.url);
            // update user profile profile
        const userProfile={
          displayName:data.name,
          photoURL:res.data.data.url
        }
        profileUpdate(userProfile).then(()=>{
          console.log('user profile update successful');
          navigate(location?.state || '/')
        }).catch(error=>{
          console.log(error);
        })
          })
          .catch((error) => {
            console.log(error);
          });
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="space-y-4  ">
      <div className="">
        <h1 className="text-3xl font-black space-y-4">Create an Account</h1>
        <p>Register with ZapShift</p>
      </div>
      {/*form  */}
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <label className="label text-lg">Name</label>
          {/* name field */}
          <input
            {...register("name", { required: true })}
            type="text"
            className="input w-full text-lg"
            placeholder="Name "
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500 text-lg">name is required.</p>
          )}

          <label className="label text-lg">Photo</label>
          {/* image field */}
          <input
            {...register("photo", { required: true })}
            type="file"
            className="file-input w-full text-lg"
            placeholder="Your Photo "
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500 text-lg">photo is required.</p>
          )}

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
              maxLength: 14,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
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
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-lg">
              password must have at least one uppercase, one lowercase and one
              special charecters.
            </p>
          )}
          <div>
            <a className="link link-hover text-lg">Forgot password?</a>
          </div>
          <button className="btnsBg text-lg">Register</button>
          <p className="text-lg">
            Don’t have any account?{" "}
            <Link
            state={location.state}
              to={"/login"}
              className="text-blue-500 hover:to-blue-600 underline"
            >
              Login
            </Link>
          </p>
        </fieldset>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Register;
