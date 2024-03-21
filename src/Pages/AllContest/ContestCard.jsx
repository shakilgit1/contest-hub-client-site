/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ContestCard = ({ contest }) => {
    const {_id, image, contestName, attemptedCount} = contest || {};

  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 h-[550px]">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracki">
              {contestName.length > 20 ? <>{contestName.slice(0,20)}</> : <>{contestName}</>}
              {/* {contestName} */}
              </h2>
            <p className="dark:text-gray-100 text-lg font-semibold">
             Attempt Count: {attemptedCount}
            </p>
            {/* <p className="dark:text-gray-100">
             {shortDescription.length > 80 ? <>{shortDescription.slice(0,80)} ...<button className="font-semibold">see more</button></> : shortDescription}
            
            </p> */}
          </div>
          <Link to={`/contest/${_id}`}><button
            type="button"
            className="flex bg-black items-center justify-center w-full p-3 font-semibold tracki rounded-md  text-white btn hover:text-black"
          >
            Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
