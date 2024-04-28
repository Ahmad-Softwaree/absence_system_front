import { homeParts } from "@/constants";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <div className="w-full flex flex-col justify-center items-center  p-5 h-full gap-5 py-30">
      <div className="w-full flex flex-row justify-center items-center gap-10 flex-wrap">
        {homeParts.map((val, index) => {
          return (
            <Link
              className="w-[300px] rounded-md p-5 bg-primary-500 flex flex-row justify-between items-center "
              to={val.link}
              key={index}>
              <h1 className="text-white text-body1-semibold">{val.text}</h1>
              <div className="relative w-[80px]">
                <img src={val.image} alt={val.text} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
