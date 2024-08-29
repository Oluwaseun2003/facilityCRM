'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiAlignRight, FiArrowDownRight, FiArrowRight, FiCheck, FiChevronDown } from 'react-icons/fi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
// import { Familjen_Grotesk } from 'next/font/google';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-6xl">
        {/* Left side (Logo and Features) */}
        <div className="w-5/12 bg-blue-500 p-10 rounded-3xl flex flex-col justify-between">
          <div>
            <h1 className="text-4xl text-center font-bold text-white mb-2">Oneflare</h1>
            <p className="text-white text-xl text-center font-medium mb-4">A better way to manage your Workflow</p>
            <ul className="space-y-2 text-white font-medium text-base">
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Request Submission
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Notification System
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Workflow Management
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Quotation Management
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Approval Process
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Audit Trail
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Dashboard and Reporting
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Comments and corrections
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Staff and Management
              </li>
            </ul>
          </div>
          <div className="text-3xl text-center">
          <FiArrowRight className='text-white text-centeritems-center'/>

            {/* <i className="fas text-white fa-arrow-right"> yyyo</i> */}
          </div>
        </div>

        {/* Right side (Login Form) */}
        <div className="w-1/2 bg-white p-10 rounded-r-lg">
          <div className="mb-8">
            <Image
              width={130}
              height={80}
              alt="logo"
              src={"/svgs/logo.svg"}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl text-black font-semibold text-center mb-2">Log In to Oneflare</h2>
            <p className="text-center text-gray-600 mb-8">Enter your login details</p>
          </div>
          <form>
            <div className="mb-4 relative">
              <label htmlFor="department" className="block text-gray-700 font-semibold mb-2">Select Department</label>
              <select id="department" className="w-full p-3 border border-gray-300 text-black rounded-lg appearance-none">
                <option>Select Department </option>
                <option>Procurement Department</option>
                <option>Finance Department</option>
                {/* Add more departments here */}
              </select>
              <FiChevronDown className="absolute right-3 top-12 text-gray-500 pointer-events-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your work email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Type your password"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <span
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-blue-500">Forgot Password?</a>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200">
                <Link href={"/app/dashboard"}>
                Login
                </Link>
              
            </button>
            <div className="text-center mt-4">
              <p className='text-black'>Don't have an account? <a href="#" className="text-blue-500">Sign up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
