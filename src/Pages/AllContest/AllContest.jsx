
import Banner from "../Homepage/Banner/Banner";
import ContestCard from "./ContestCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllContest = () => {
    
    const axiosPublic = useAxiosPublic();
    const {data: contests = []} = useQuery({
        queryKey: ['contests'],
        queryFn: async () => {
         const res = await axiosPublic.get('/contest');
         return res.data;
        }
    })



    return (
        <div>
            <Banner></Banner>

            <h2 className="text-3xl text-center my-8 font-semibold">See Our All Contest </h2>
            <div className="md:flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {contests?.map(contest => <ContestCard key={contest._id} contest={contest}></ContestCard>)}
            </div>
            </div>
        </div>
    );
};

export default AllContest;