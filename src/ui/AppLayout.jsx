import { useState } from "react";
import Header from "./Header";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule";
import Results from "../pages/Results";

function AppLayout() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className=" ">
      <Header />
      <div className="mt-6 mb-2 sm:mt-10 sm:mb-6 mx-auto w-fit sm:font-medium text-stone-400 flex sm:gap-8 border-b border-stone-500">
        <button
          className={`sm:px-8 px-5 ${
            activeTab === "Home" ? "text-stone-50 border-b-2" : ""
          }  hover:text-stone-50 transition-colors duration-300 ease-in-out`}
          onClick={() => setActiveTab("Home")}
        >
          Home
        </button>
        <button
          className={`sm:px-8 px-5 ${
            activeTab === "Schedule" ? "text-stone-50 border-b-2" : ""
          } hover:text-stone-50 transition-colors duration-300 ease-in-out`}
          onClick={() => setActiveTab("Schedule")}
        >
          Schedule
        </button>
        <button
          className={`sm:px-8 px-5 ${
            activeTab === "Results" ? "text-stone-50 border-b-2" : ""
          } hover:text-stone-50 transition-colors duration-300 ease-in-out`}
          onClick={() => setActiveTab("Results")}
        >
          Results
        </button>
      </div>
      <div className=" flex justify-center items-center flex-col py-8 ">
        {activeTab === "Home" && <Home />}
        {activeTab === "Schedule" && <Schedule />}
        {activeTab === "Results" && <Results />}
      </div>
    </div>
  );
}

export default AppLayout;
