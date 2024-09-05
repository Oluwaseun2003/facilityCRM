import { BaseButton } from "@/src/components/UI/Button";
import React from "react";
import { BiPlus } from "react-icons/bi";
import Logo from "../../../../images/Line 6.png";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";

const ApprovalProcess = () => {
  return (
    <div>
      <div className="flex border-b-2 mb-6">
        <div className="px-4 py-2 cursor-pointer ">Approval Process</div>
      </div>
      <div className="border border-[#00000033]  m-3  h-[120vh] shadow-md bg-[#EBEEF3] relative ">
        <div className="bg-white">
          <div className="flex  border-b border-b-gray-200 p-2 px-10">
            <div className="">Request</div>
            <div className="flex justify-between absolute right-[28%] gap-20  ">
              <h3 className="font-semibold">Approval</h3>
              <h3 className="font-semibold ">Preview</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10 ">
          <div className="bg-white shadow-md w-[35%] h-screen p-5">
            <div className="flex flex-col gap-4">
              <div className="border border-gray-300 h-[135px] rounded-md p-5">
                <div className="flex flex-col gap-3">
                  <h3>Door</h3>
                  <h3 className="text-[#0284C7]">In Progress</h3>
                  <div className="flex justify-between">
                    <h3>isle 2</h3>
                    <h3 className="text-[#000000CC] text-[14px]">
                      Requested by Chi Joel
                    </h3>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 h-[135px] rounded-md p-5">
                <div className="flex flex-col gap-3">
                  <h3>Door</h3>
                  <h3 className="text-[#0284C7]">In Progress</h3>
                  <div className="flex justify-between">
                    <h3>isle 2</h3>
                    <h3 className="text-[#000000CC] text-[14px]">
                      Requested by Chi Joel
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md w-[55%] flex justify-start items-start mt-10">
            <div className="w-full bg-[#F9FAFA] shadow-md h-screen p-5">
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm">Requested by</h3>
                  <div className="mt-3">
                    <select
                      name=""
                      id=""
                      className="w-[199px] border border-gray-300 py-2 rounded-full px-3">
                      <option value="1">Chi Joel</option>
                      <option value="1">Oluwaseun</option>
                      <option value="1">Fisto</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm">Level 1 Approval </h3>
                  <div className="mt-3">
                    <select
                      name=""
                      id=""
                      className="w-[199px] border border-gray-300 py-2 rounded-full px-3">
                      <option value="1">Chi Joel</option>
                      <option value="1">Oluwaseun</option>
                      <option value="1">Fisto</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm">Level 2 Approval </h3>
                  <div className="mt-3">
                    <select
                      name=""
                      id=""
                      className="w-[199px] border border-gray-300 py-2 rounded-full px-3">
                      <option value="1">Chi Joel</option>
                      <option value="1">Oluwaseun</option>
                      <option value="1">Fisto</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-4"></div>
              <button className="bg-[#0284C7] flex flex-row items-center text-white px-5 rounded-full py-3 ">
                <BiPlus /> Add new label
              </button>
            </div>
            <div className="w-full bg-white shadow-md h-screen p-5 ">
              <div className="flex flex-col">
                <div>
                  <h3 className="ml-7">Requested By</h3>
                  <div className="flex flex-row">
                    <div className="flex flex-col justify-center">
                      <IoIosCheckmark
                        color="white"
                        className="bg-[#A3A3A3] rounded-full "
                      />
                      <Image
                        src={Logo}
                        className="ml-2"
                        alt="Description of image"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center gap-1  ">
                        <h3 className="ml-3">Chi Joel </h3>
                        <h3 className="text-[12px] mt-0.5">
                          Today at 10:11 AM
                        </h3>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-[14px]">
                          Request initiated Approved: Air
                        </h4>
                        <h5 className="text-[14px]"> Conditioner leaking</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[-25px]">
                  <h3 className="ml-7">Requested By</h3>
                  <div className="flex flex-row">
                    <div className="flex flex-col justify-center">
                      <IoIosCheckmark
                        color="white"
                        className="bg-[#A3A3A3] rounded-full "
                      />
                      <Image
                        src={Logo}
                        className="ml-2"
                        alt="Description of image"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center gap-1  ">
                        <h3 className="ml-3">Chi Joel </h3>
                        <h3 className="text-[12px] mt-0.5">
                          Today at 10:11 AM
                        </h3>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-[14px]">
                          Request initiated Approved: Air
                        </h4>
                        <h5 className="text-[14px]"> Conditioner leaking</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[-25px]">
                  <h3 className="ml-7">Requested By</h3>
                  <div className="flex flex-row">
                    <div className="flex flex-col justify-center">
                      <IoIosCheckmark
                        color="white"
                        className="bg-[#A3A3A3] rounded-full "
                      />
                      <Image
                        src={Logo}
                        className="ml-2"
                        alt="Description of image"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center gap-1  ">
                        <h3 className="ml-3">Chi Joel </h3>
                        <h3 className="text-[12px] mt-0.5">
                          Today at 10:11 AM
                        </h3>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-[14px]">
                          Request initiated Approved: Air
                        </h4>
                        <h5 className="text-[14px]"> Conditioner leaking</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalProcess;
