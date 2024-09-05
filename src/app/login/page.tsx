"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiCheck, FiChevronDown, FiArrowRight } from "react-icons/fi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/src/validation/auth";
import Input from "@/src/Forms/Input";
import { BaseButton } from "@/src/components/UI/Button";
import Select from "@/src/Forms/Select";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  const navigateToPage = () => {
    router.push("/app/dashboard"); // Navigates to /about page
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    //resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      department: {
        label: "",
        value: "",
      },
    },
  });
  const onSubmit = async (data: { email: string }): Promise<void> => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-6xl">
        {/* Left side (Logo and Features) */}
        <div className="w-5/12 bg-blue-500 p-10 rounded-3xl flex flex-col justify-between">
          <div>
            <h1 className="text-4xl text-center font-bold text-white mb-2">
              Oneflare
            </h1>
            <p className="text-white text-xl text-center font-medium mb-4">
              A better way to manage your Workflow
            </p>
            <ul className="space-y-2 text-white font-medium text-base">
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Request
                Submission
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" />{" "}
                Notification System
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" />{" "}
                Workflow Management
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" />{" "}
                Quotation Management
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" />{" "}
                Approval Process
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Audit
                Trail
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" />{" "}
                Dashboard and Reporting
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" />{" "}
                Comments and corrections
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-2 border border-white rounded" /> Staff
                and Management
              </li>
            </ul>
          </div>
          <div className="text-3xl text-center">
            <FiArrowRight className="text-white text-center items-center" />
          </div>
        </div>

        {/* Right side (Login Form) */}
        <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
          <div className=" bg-white p-10 rounded-r-lg">
            <div className="mb-8">
              <Image
                width={130}
                height={80}
                alt="logo"
                src="/svgs/logo.svg"
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl text-black font-semibold text-center mb-2">
                Log In to Oneflare
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Enter your login details
              </p>
            </div>
            <div className="mb-4 relative">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      disabled={false}
                      {...field}
                      value={field?.value}
                      label="Email"
                      placeholder="Enter your email"
                      type="text"
                      width="100%"
                      height="50px"
                      multiline={false}
                      row={1}
                      error={errors?.email}
                    />
                  </div>
                )}
              />
            </div>
            <div className="mb-4 relative">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    disabled={false}
                    variant="outlined"
                    label="Password"
                    multiline={false}
                    row={1}
                    placeholder="Password"
                    width="90%"
                    height="70%"
                    password
                    type="password"
                    error={errors?.password}
                  />
                )}
              />
            </div>
            <div className="mb-4 relative w-full ">
              <div className="mb-4 relative">
                <label
                  htmlFor="department"
                  className="block text-gray-700 font-semibold mb-2">
                  Select Department
                </label>
                <select
                  id="department"
                  className="w-full p-3 border border-gray-300 text-black rounded-lg appearance-none">
                  <option>Select Department </option>
                  <option>Procurement Department</option>
                  <option>Finance Department</option>
                  {/* Add more departments here */}
                </select>
                <FiChevronDown className="absolute right-3 top-12 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <BaseButton
              onClick={navigateToPage}
              text="Login"
              type="submit"
              color="primary"
              className="w-[100%] mt-10 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
