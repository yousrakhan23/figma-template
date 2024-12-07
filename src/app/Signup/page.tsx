"use client";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";
import SideImage from "../../public/SideImage.png";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl p-6 lg:p-8 rounded-lg ">
        <div className="hidden lg:flex w-1/2 items-center justify-center">
          <Image
            src={SideImage}
            alt="image"
            height={781}
            width={805}
            className="object-cover mb-4"
          />
        </div>

        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 ">
          <Head>
            <title>Signup</title>
          </Head>
          <h1 className="text-2xl font-bold text-center text-black mb-4">
            Create an account
          </h1>
          <p className="text-center text-black mb-6">
            Enter your details below
          </p>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black"
            >
              Name
            </label>
            <div className="w-full mt-1 px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-2" />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-black"
            >
              Email or Phone Number
            </label>
            <div className="w-full mt-1 px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-2" />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <div className="w-full mt-1 px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-2" />
          </div>

          <button
            type="submit"
            className="w-full bg-[#DB4444] text-white py-2 rounded-md focus:outline-none focus:ring-2 "
          >
            Create Account
          </button>

          <div className="flex items-center justify-center m-4">
            <button
              className="w-full bg-white border border-[#00000066] py-2 rounded-md flex items-center
               justify-center gap-2 text-gray-700 focus:outline-none focus:ring-2"
            >
              <FaGoogle size={20} />
              <span>Sign up with Google</span>
            </button>
          </div>

          {/* <p className="text-center text-sm text-black mt-4">
            Already have account?{" "}
            <a href="/login" className="text-black">
              Log in
            </a>
          </p> */}
          <p className="text-zinc-600 m-auto w-fit mt-8">Already have an account? <Link href="/LoginPage" className="border-b-2 border-zinc-400 font-medium text-zinc-500 pb-[0.2rem]">Log in</Link></p>
        </div>
      </div>
    </div>
  );
}
