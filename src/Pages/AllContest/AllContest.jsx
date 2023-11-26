import ContestCard from "./ContestCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const AllContest = () => {
  const [searchItems, setSearchItems] = useState([]);
  // console.log(searchItems);

  const axiosPublic = useAxiosPublic();
  // eslint-disable-next-line no-unused-vars
  const { data } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contest");
      setSearchItems(res.data);
      return res.data;
    },
  });

//   console.log(data);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    console.log(search);
    const lowerSearch = search.toLowerCase();
    axiosPublic.get(`/contest/${lowerSearch}`).then((res) => {
      setSearchItems(res.data);
    });
  };

  return (
    <div>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/8mcJNMR/360-F-280016453-Vk-Nx-Kbvtlj-Zx-NWa3-Y4-A41-BB6g-Ep1-DIj-Y.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div className="hero-content text-white">
          <div className="max-w-md">
            <h1 data-aos="fade-right" className="mb-5 text-5xl font-bold">
              FIND YOUR FAVORITE CONTEST
            </h1>
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search here"
                name="search"
                className="input input-bordered  w-full max-w-xs outline-none text-black mr-2 rounded-md"
              />
              <button className="btn btn-error bg-red-500 rounded-md">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <h2 className="text-3xl text-center my-8 font-semibold">
        See Our All Contest{" "}
      </h2>
      <div className="md:flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {searchItems?.map((contest) => (
            <ContestCard key={contest._id} contest={contest}></ContestCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllContest;
