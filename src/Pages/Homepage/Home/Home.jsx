import { useEffect, useState } from "react";
// import Banner from "../Banner/Banner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ContestCard from "../../AllContest/ContestCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [popularItem, setPopularItem] = useState([]);
  const [searching, setSearching] = useState("");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    AOS.init({ duration: "1000", delay: "500" });
  }, []);

  useEffect(() => {
    axiosPublic.get(`/popular?sort=desc&search=${searching}`).then((res) => {
      setPopularItem(res.data);
    });
  }, [axiosPublic, searching]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    setSearching(search);
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

      <div className="container mx-auto my-8">
        <h2
          data-aos="fade-up"
          className="text-3xl text-center font-semibold mb-8"
        >
          Our Popular Contest
        </h2>
        <div>
          <div className="md:flex justify-center">
            <div
              
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {popularItem?.slice(0, 6).map((contest) => (
                <ContestCard key={contest._id} contest={contest}></ContestCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 data-aos="fade-up" className="text-3xl text-center font-semibold my-8">
          Our Featured Contests
        </h2>
        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto space-y-12">
            <div
              data-aos="fade-right"
              className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
            >
              <img
                src="https://images.pexels.com/photos/139392/checkmate-chess-resignation-conflict-139392.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="h-80 dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                <span className="text-xs uppercase dark:text-gray-400">
                  Join now
                </span>
                <h3 className="text-3xl font-bold">
                  Gaming Contest, Play like pro
                </h3>
                <p className="my-6 dark:text-gray-400">
                  All our contest are here to make you more genius and
                  brilliant. so that you can take our challenge
                </p>
                <button type="button" className="self-start">
                  Action
                </button>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse"
            >
              <img
                src="https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="h-80 dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                <span className="text-xs uppercase dark:text-gray-400">
                  Join now
                </span>
                <h3 className="text-3xl font-bold">
                  Article Writing Contest, Write like genius
                </h3>
                <p className="my-6 dark:text-gray-400">
                  All our contest are here to make you more genius and
                  brilliant. so that you can take our challenge
                </p>
                <button type="button" className="self-start">
                  Action
                </button>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
            >
              <img
                src="https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="h-80 dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                <span className="text-xs uppercase dark:text-gray-400">
                  Join now
                </span>
                <h3 className="text-3xl font-bold">
                  Medical Contest, Research like pro
                </h3>
                <p className="my-6 dark:text-gray-400">
                  All our contest are here to make you more genius and
                  brilliant. so that you can take our challenge
                </p>
                <button type="button" className="self-start">
                  Action
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <h2 data-aos="fade-up" className="text-3xl text-center font-semibold my-8">You may also like</h2>
        <section data-aos="fade-up" className="py-6 dark:bg-gray-800">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.pexels.com/photos/695963/pexels-photo-695963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.pexels.com/photos/7869239/pexels-photo-7869239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.pexels.com/photos/228963/pexels-photo-228963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;
