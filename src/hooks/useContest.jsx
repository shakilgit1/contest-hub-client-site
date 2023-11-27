import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useContest = () => {
    const axiosSecure = useAxiosSecure();

    const {data: contests = [], refetch} = useQuery({
        queryKey: ['contest'],
        queryFn: async () => {
         const res = await axiosSecure.get('/contest');
         return res.data;
        }
    })
    return [contests, refetch]
};

export default useContest;