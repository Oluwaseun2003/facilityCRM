import { BaseButton } from "@/src/components/UI/Button";
import React from "react";
import { BiPlus } from "react-icons/bi";
import Logo from "../../../../images/Line 6.png";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import { TbMessage } from "react-icons/tb";
import { IoSendOutline } from "react-icons/io5";

const CommentsCorrections = () => {
  return (
    <div className="">
      <div className="flex border-b-2 mb-6">
        <div className="px-4 py-2 cursor-pointer ">
          Live Chats and Corrections
        </div>
      </div>
      <div className="border z-0 border-[#00000033]  m-3  h-[120vh] shadow-md bg-[#EBEEF3] relative ">
        <div className="bg-white">
          <div className="flex  border-b border-b-gray-200 p-2 px-10">
            <div className="">Work Orders</div>
            <div className="flex justify-between absolute right-[28%] gap-20  ">
              <h3 className="font-semibold">Chats</h3>
              <h3 className="font-semibold "></h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10 relative ">
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
              <div>
                <div className="flex flex-row gap-2 ">
                  <div className="flex flex-row gap-3 items-center ">
                    <h4 className="bg-[#0284C7] flex justify-center items-center text-white p-2 rounded-full w-[32px] h-[32px]">
                      CJ
                    </h4>
                    <h4>Chi Joel</h4>
                  </div>
                  <div className="flex items-center border border-gray-400 rounded-lg p-2">
                    <h3>Air condition fixed</h3>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#000000CC] text-[10px]">
                    Today at 10:11 AM
                  </h3>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-row-reverse  gap-2 ">
                  <div className="flex flex-col gap-3 items-center ">
                    <div className="flex flex-row items-center gap-3">
                      <h4 className="bg-[#0284C7] flex justify-center items-center text-white p-2 rounded-full w-[32px] h-[32px]">
                        DJ
                      </h4>
                      <h4>Dami G</h4>
                    </div>
                    <h3 className="text-[#000000CC] text-[10px]">
                      Today at 10:11 AM
                    </h3>
                  </div>
                  <div className="flex items-center border border-gray-400 rounded-lg p-2">
                    <h3>Air condition fixed</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white shadow-md h-screen p-5 ">
              <div className="flex flex-col">
                <div>
                  <h3 className="ml-7">Requested By</h3>
                  <div className="flex flex-row">
                    <div className="flex flex-col justify-center">
                      <IoIosCheckmark
                        color="white"
                        className="bg-green-600 rounded-full "
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
                        className="bg-green-600 rounded-full "
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
                <div className="mt-[-50px]">
                  <h3 className="ml-7">Requested By</h3>
                  <div className="flex flex-row">
                    <div className="flex flex-col justify-center">
                      <IoIosCheckmark
                        color="white"
                        className="bg-[#A3A3A3] rounded-full "
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
          <div className="absolute bottom-0 right-[10%] bg-white w-[50%]">
            <div className="flex flex-row gap-2 items-center">
              <input
                type="text"
                placeholder="write a message"
                className="border border-gray-400 p-2 rounded-md w-[85%] mb-2"
              />
              <div className="flex flex-row gap-3 ">
                <TbMessage size={24} />
                <IoSendOutline size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsCorrections;
