import { Link, useLoaderData } from "react-router-dom";

const ContestDetails = () => {
    const contest = useLoaderData();

  const {_id, image, contestName, attemptedCount, shortDescription, contestPrize, deadline } =
    contest || {};
    // console.log(contest);

  return (
    <div className="p-4 md:flex justify-center">
       <div className="">
       <div className="h-28 w-full">
            
            </div>
           <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100  mb-20">
            <img
              src={image}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracki">{contestName}</h2>
                <p className="dark:text-gray-100 text-lg font-semibold">
                  Attempt Count: {attemptedCount}
                </p>
                <p className="dark:text-gray-100 text-lg font-semibold">
                  Prize: ${contestPrize}
                </p>
                <p className="dark:text-gray-100 text-lg font-semibold">
                  Deadline: {deadline}
                </p>
                <p className="dark:text-gray-100">
                  {shortDescription}
                </p>
              </div>
              <Link to={`/dashboard/payment/${_id}`}>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900 btn"
                >
                  Registration
                </button>
              </Link>
            </div>
           </div>
       </div>
    </div>
  );
};

export default ContestDetails;
