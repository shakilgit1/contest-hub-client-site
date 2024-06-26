import ContestCard from "./ContestCard";
// import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import ScrollToTop from "../../hooks/scrollTop";

const AllContest = () => {
  const [searchItems, setSearchItems] = useState([]);
  // console.log(searchItems);
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const axiosPublic = useAxiosPublic();
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    axiosPublic.get(`/contest?page=${currentPage}&size=${itemsPerPage}&type=${category}`)
    .then(res => {
      setSearchItems(res.data);
    })
  }, [axiosPublic, currentPage, itemsPerPage, category])

  

  // const { data } = useQuery({
  //   queryKey: ["contests"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/contest?page=${currentPage}&size=${itemsPerPage}`);
  //     setSearchItems(res.data);
  //     return res.data;
  //   },
  // });

  useEffect(() => {
    axiosPublic.get(`/contestCount`)
    .then((res) => {
      setCount(res.data.count);
    });
  }, [axiosPublic]);


  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(0);
    // console.log(value);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/8mcJNMR/360-F-280016453-Vk-Nx-Kbvtlj-Zx-NWa3-Y4-A41-BB6g-Ep1-DIj-Y.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div className="hero-content text-white">
          <div className="">
            <h1 data-aos="fade-right" className="mb-5 text-5xl font-bold">
              PERTICIPATE CONTEST &  GET PRIZE
            </h1>
           
          </div>
        </div>
      </div>

      <h2 className="text-center my-8 font-semibold">
        <button onClick={()=> setCategory("")} className="btn btn-xs bg-blue-600 hover:bg-red-500 mr-2">All</button>
        <button onClick={()=> setCategory("Gaming")} className="btn btn-xs bg-blue-600 hover:bg-red-500 mr-2">Gaming</button>
        <button onClick={()=> setCategory("Article Writing")} className="btn btn-xs bg-blue-600 hover:bg-red-500 mr-2">Article</button>
        <button onClick={()=> setCategory("Medical Contest")} className="btn btn-xs bg-blue-600 hover:bg-red-500 mr-2">Medical</button>
        <button onClick={()=> setCategory("Business Contest")} className="btn btn-xs bg-blue-600 hover:bg-red-500">Business</button>
      </h2>
      
      <h2 className="text-3xl text-center my-8 font-semibold">
        See Our All Contest
      </h2>
      <h1 className="text-center">

         {searchItems.length===0 && <span className="loading loading-spinner loading-lg"></span>}
         </h1>

      <div className="md:flex justify-center mx-auto w-9/12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {searchItems?.map((contest) => (
            <ContestCard key={contest._id} contest={contest}></ContestCard>
          ))}
        </div>
      </div>

            {category && currentPage!==0 && <p className="text-center">Please select page 1 to see filter item</p>}

      <div className="text-center my-8">
        <p className="mb-4">Current page: {currentPage + 1}</p>
        <button
          className="btn btn-sm mr-2 btn-outline btn-info"
          onClick={handlePrevPage}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={
              currentPage === page
                ? "btn btn-error mr-2 btn-sm"
                : "btn btn-primary mr-2 btn-sm"
            }
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button
          className="btn btn-sm mr-2 btn-outline btn-info"
          onClick={handleNextPage}
        >
          Next
        </button>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  );
};

export default AllContest;
