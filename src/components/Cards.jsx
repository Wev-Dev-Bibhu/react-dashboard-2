import { ControlPoint, MoreHoriz } from "@mui/icons-material";
import React from "react";
import SubCards from "./SubCards";
import sadImg from "../images/sad.svg";

const Cards = (props) => {
  const { data, setOpenModal, setModalData } = props;
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleModalData = (data) => {
    setModalData(data);
  };

  return (
    <div
      key={data.cardsTitle}
      className="w-80 mr-2 h-[32rem] border-dashed border-2 border-slate-400 rounded-md p-1 relative mb-2 lg:mb-0"
    >
      <div className="flex justify-between px-2 pb-3">
        <span>{data.cardsTitle}</span>
        <button>
          <MoreHoriz />
        </button>
      </div>
      <div className="flex flex-col">
        {data.cardData.length === 0 ? (
          <div className="h-full w-full flex justify-center flex-col align-center text-gray-400">
            <img className="h-24 mt-12 opacity-10" src={sadImg} alt="sad-icon" />
            <span>Oops !</span>
            <span>NOTHING TO SHOW HERE</span>
          </div>
        ) : (
          data.cardData.map((item) => (
            <SubCards
              item={item}
              handleModalData={handleModalData}
              handleOpenModal={handleOpenModal}
            />
          ))
        )}
      </div>
      <div className="flex justify-center absolute bottom-0 w-full py-3 cursor-pointer align-center">
        <button>
          <ControlPoint className="bg-blue-700 rounded-full text-white align-center" />
          &ensp; New Card
        </button>
      </div>
    </div>
  );
};

export default Cards;
