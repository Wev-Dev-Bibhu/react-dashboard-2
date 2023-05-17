import {
  AttachFileOutlined,
  Close,
  Send,
  Star,
  StarBorder,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

const MoreInfo = (props) => {
  const { openModal, modalData, setOpenModal } = props;
  return (
    <div
      className="fixed h-screen w-80 bg-white z-20 top-0 p-4 transition-all"
      style={{ right: openModal ? 0 : -500 }}
    >
      <div className="absolute top-3 right-3">
        <button onClick={() => setOpenModal(false)}>
          <Close />
        </button>
      </div>
      <div className="flex align-center">
        {modalData && modalData.starred ? (
          <Star className="text-yellow-300" />
        ) : (
          <StarBorder className="text-slate-500" />
        )}
        <div className="ml-2 text-slate-500">{modalData.hexcode}</div>
      </div>
      <div className="font-semibold text-slate-900 text-xl">
        {modalData.subCardTitle}
      </div>
      <div className="bg-slate-300 h-[1px] w-full my-4 absolute left-0"></div>
      <div className="mt-6">
        <table border="1" className="border-blue-400 w-full">
          <tr>
            <td className="text-slate-500 text-sm">Created:</td>
            <td className="w-52 text-sm">Today</td>
          </tr>
          <tr>
            <td className="text-slate-500 text-sm">Due Date:</td>
            <td className="w-52 text-sm">Jan 18</td>
          </tr>
          <tr>
            <td className="h-4"></td>
            <td className="h-4"></td>
          </tr>
          <tr>
            <td className="text-slate-500 text-sm">Status</td>
            <td className="w-52 text-sm"></td>
          </tr>
          <tr>
            <td className="text-slate-500 text-sm">Progress</td>
            <td className="w-52 text-sm">0%</td>
          </tr>
          <tr>
            <td className="h-4"></td>
            <td className="h-4"></td>
          </tr>
          <tr>
            <td className="text-slate-500 text-sm absolute">Members:</td>
            <td className="w-52 text-sm">
              <div className="flex flex-col">
                {modalData.users &&
                  modalData.users.map((user) => (
                    <div key={user.userName} className="flex justify-start align-center mb-1">
                      <Avatar
                        sx={{ width: 24, height: 24, zIndex: 1 }}
                        alt={user.userName}
                        src={user.imageUrl}
                      />
                      <span className="font-semibold ml-2">
                        {user.userName}
                      </span>
                    </div>
                  ))}
              </div>
            </td>
          </tr>
        </table>
        <span className=" text-slate-500  text-sm">Description:</span>
        <p className="block px-2 pl-0 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          incidunt quae dignissimos dolorem. Mod
        </p>

        <span className=" text-slate-500">Attachments:</span>
        <div className="bg-slate-300 h-[1px] w-full my-4 absolute left-0"></div>
        <div className="px-3 mt-6">
          <div className="flex align-center">
            <Avatar alt="A" sx={{ width: 24, height: 24 }} />
            <span className="ml-2">Bibhuti</span>
          </div>
          <div className="text-slate-500 ml-8 text-sm flex flex-col">
            <span>Jan 15 at 2:43 AM</span>
            <span className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. non, ab
              quaerat distinctio neque ipsam delectus voluptates
            </span>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 h-[1px] w-full my-4 absolute bottom-12 left-0"></div>
      <div className="flex align-center absolute bottom-9  w-full left-0">
        <AttachFileOutlined
          sx={{ fontSize: 22 }}
          className="text-slate-500 absolute left-0 z-40 pr-2 rotate-180"
        />
        <input
          type="text"
          placeholder="Write a message"
          className="p-2 rounded outline-none border-0 bg-transparent text-left transition-all right-0 pl-6 pr-12 absolute w-full"
        />
        <button className="p-2 flex justify-center absolute right-0 bg-blue-500 rounded-md">
          <Send className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default MoreInfo;
