import {
  AttachFileOutlined,
  ChatBubbleOutline,
  Star,
  StarBorder,
} from "@mui/icons-material";
import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

const SubCards = ({ item, handleOpenModal, handleModalData }) => {
  const handleModal = () => {
    handleOpenModal(true);
    handleModalData(item);
  };
  return (
    <div
      key={item.title}
      className="rounded-md bg-white m-1 p-1 cursor-pointer"
      onClick={handleModal}
    >
      <div className="ratings flex px-2">
        {item.starred ? (
          <Star className="text-yellow-300" />
        ) : (
          <StarBorder className="text-slate-500" />
        )}
        <p className="text-slate-500">{item.hexcode}</p>
      </div>
      <p className="text-slate-800 font-semibold p-1">{item.subCardTitle}</p>
      <div className="flex justify-between text-slate-500">
        <div className="flex justify-between p-1">
          <div
            className="flex justify-center mr-2"
            style={{ alignItems: "center" }}
          >
            <ChatBubbleOutline sx={{ fontSize: 15 }} />
            <p>12</p>
          </div>
          <div className="flex justify-center" style={{ alignItems: "center" }}>
            <AttachFileOutlined sx={{ fontSize: 15 }} />
            <p>12</p>
          </div>
        </div>
        <AvatarGroup max={4}>
          {item.users &&
            item.users.map((user) => (
              <Avatar
                key={user.userName}
                sx={{ width: 24, height: 24, zIndex: 1 }}
                alt={user.userName}
                src={user.imageUrl}
              />
            ))}
        </AvatarGroup>
      </div>
    </div>
  );
};

export default SubCards;
