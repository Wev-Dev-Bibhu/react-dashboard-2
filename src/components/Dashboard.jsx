import {
  CheckCircleOutline,
  ContentCopy,
  ControlPoint,
  Group,
  Search,
} from "@mui/icons-material";
import React, { useState } from "react";
import Cards from "./Cards";
import FunnelGraphUI from "./FunnelGraphUI";
import MoreInfo from "./MoreInfo";

const data = [
  {
    cardsTitle: "New Deal",
    cardData: [
      {
        subCardTitle: "Analytics platform for startup",
        starred: true,
        hexcode: "#014564",
        users: [
          {
            userName: "Akash",
            imageUrl: "",
          },
          {
            userName: "Sonu",
            imageUrl: "",
          },
          {
            userName: "Rohan",
            imageUrl: "",
          },
          {
            userName: "User1",
            imageUrl: "",
          },
          {
            userName: "User2",
            imageUrl: "",
          },
          {
            userName: "User3",
            imageUrl: "",
          },
        ],
      },
      {
        subCardTitle: "Bug-fixing for existing system",
        starred: false,
        hexcode: "#014563",
        users: [
          {
            userName: "User1",
            imageUrl: "",
          },
          {
            userName: "User2",
            imageUrl: "",
          },
          {
            userName: "User3",
            imageUrl: "",
          },
        ],
      },
      {
        subCardTitle: "Payment system integration",
        starred: false,
        hexcode: "#014565",
        users: [
          {
            userName: "User10",
            imageUrl: "",
          },
          {
            userName: "User19",
            imageUrl: "",
          },
        ],
      },
      {
        subCardTitle: "IOS/Android development",
        starred: false,
        hexcode: "#014566",
        users: [
          {
            userName: "User1",
            imageUrl: "",
          },
        ],
      },
    ],
  },
  {
    cardsTitle: "Negotiation",
    cardData: [
      {
        subCardTitle: "Transaction simulator",
        starred: true,
        hexcode: "#013595",
        users: [
          {
            userName: "Akash",
            imageUrl: "",
          },
          {
            userName: "User1",
            imageUrl: "",
          },
          {
            userName: "User2",
            imageUrl: "",
          },
          {
            userName: "User3",
            imageUrl: "",
          },
        ],
      },
      {
        subCardTitle: "Tender discussion",
        starred: false,
        hexcode: "#013723",
        users: [
          {
            userName: "User1",
            imageUrl: "",
          },
          {
            userName: "User2",
            imageUrl: "",
          },
          {
            userName: "User3",
            imageUrl: "",
          },
        ],
      },
      {
        subCardTitle: "Analytic dasboard for real estate problem",
        starred: false,
        hexcode: "#014001",
        users: [
          {
            userName: "User1",
            imageUrl: "",
          },
          {
            userName: "User2",
            imageUrl: "",
          },
        ],
      },
    ],
  },
  {
    cardsTitle: "Estimation",
    cardData: [
      {
        subCardTitle: "Custom CRM for law firm",
        starred: true,
        hexcode: "#014219",
        users: [
          {
            userName: "User1",
            imageUrl: "",
          },
          {
            userName: "User2",
            imageUrl: "",
          },
        ],
      },
      {
        subCardTitle: "E-commerce platform for clothes vendor",
        starred: false,
        hexcode: "#014367",
        users: [
          {
            userName: "User1",
            imageUrl: "",
          },
          {
            userName: "User2",
            imageUrl: "",
          },
        ],
      },
    ],
  },
  {
    cardsTitle: "Closed won",
    cardData: [],
  },
];
const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  return (
    <div className="ml-24">
      {/* Header */}
      <div className="header flex h-[10vh] justify-between py-5 px-3">
        <div className="header-title flex justify-between w-[40%] lg:w-[10%] md:w-[50%]">
          <div className="title font-bold">Dashboard</div>
          <div>
            <ControlPoint className="bg-blue-700 rounded-full text-white" />
          </div>
        </div>
        <div className="search flex justify-center float-right relative mr-5">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded outline-none border-0 bg-transparent text-left transition-all mr-1 lg:mr-2 right-0 absolute  w-24 focus:w-72 lg:focus:w-60 pr-7 focus:bg-slate-200"
          />
          <Search className="absolute z-10 right-2 text-slate-400" />
        </div>
      </div>
      {/* Insights */}
      <div className=" flex p-3 flex-wrap lg:flex-nowrap">
        <div className="lg:w-[50%] md:w-[50%] w-full h-[20%] bg-white rounded-md mb-2">
          <FunnelGraphUI />
        </div>
        <div className="lg:w-[50%] h-[200px] md:w-[50%] w-full ml-2 flex bg-white rounded-md p-3 justify-evenly">
          <div className="flex flex-col w-1/3  mr-2 justify-evenly">
            <div className="bg-blue-700 w-fit p-1 text-slate-200 rounded-full">
              <ContentCopy style={{ fontSize: 20, width: 26 }} />
            </div>
            <span className="font-semibold">Total</span>
            <span className="text-3xl font-semibold text-purple-500">42</span>
            <span className="text-slate-400">424 days left, 3 working</span>
          </div>
          <div className="flex flex-col w-1/3 mr-2">
            <div className="bg-blue-700 w-fit p-1 text-slate-200 rounded-full">
              <CheckCircleOutline style={{ fontSize: 20, width: 26 }} />
            </div>
            <span className="font-semibold">Closed</span>
            <span className="text-blue-800 text-3xl font-semibold">87%</span>
            <span className="text-slate-400">128 deals</span>
          </div>
          <div className="flex flex-col w-1/3">
            <div className="bg-blue-500 w-fit p-1 text-slate-200 rounded-full">
              <Group style={{ fontSize: 20, width: 26 }} />
            </div>
            <span className="font-semibold">New Customers</span>
            <span className="text-3xl font-semibold text-blue-600">148</span>
            <span className="text-slate-400">128 deals</span>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="flex flex-wrap my-2 justify-center">
        {data.map((item) => (
          <Cards
            data={item}
            setModalData={setModalData}
            setOpenModal={setOpenModal}
          />
        ))}
      </div>

      <MoreInfo
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalData={modalData}
      />
    </div>
  );
};

export default Dashboard;
