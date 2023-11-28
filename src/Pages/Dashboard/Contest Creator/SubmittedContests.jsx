import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const SubmittedContests = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const {data: submitted = [], refetch} = useQuery({
        queryKey: ['submitted'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/payments?email=${user?.email}`)
            return res.data;
        }
    }) 

    const handleConfirm = item => {
        axiosSecure.patch(`/confirm/${item._id}`)
        .then(res => {
         if(res.data.modifiedCount > 0){
             refetch();
             Swal.fire({
               position: "top-end",
               icon: "success",
               title: `${item.contestName} is now accepted`,
               showConfirmButton: false,
               timer: 1500
             });
           }
        })
     }

    return (
        <div>
            <h2 className="text-4xl text-center mb-4">All Submitted Contests</h2>
           
            <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Perticipated Name</th>
                  <th>Perticipated Email</th>
                  <th>Contest Name</th>
                  <th>Contest Deadline</th>
                  <th>Task</th>
                  <th>Confirm Winner</th>
                 
                </tr>
              </thead>
              <tbody>
              
                {
                submitted?.map((item, index) => <tr key={item._id}>
                <td>
                {index + 1}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    
                  </div>
                </td>
                <td>
                 {item?.name}
                
                </td>
                <td>{item.userEmail}</td>
                <td>{item.contestName}</td>
                <td>{item.deadline}</td>
                <td>{item.task.slice(0,20)}...</td>
                <td>
                  
                  {item?.status === 'accepted' ? <button 
                    disabled
                    className="btn btn-ghost btn-sm text-red-400">
                     <FaEdit></FaEdit>
                    </button> : 
                    <button 
                    onClick={() => handleConfirm(item)}
                    className="btn btn-ghost btn-sm text-red-400">
                     <FaEdit></FaEdit>
                    </button>
                    }
                  
                </td>
               
              </tr>)
                }
               
              </tbody>
            
            </table>
          </div>
        </div>
        </div>
    );
};

export default SubmittedContests;