import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const ManageContest = () => {
    const axiosSecure = useAxiosSecure();
  
    const {data: myContest = [], refetch} = useQuery({
       queryKey: ['myContest'],
       queryFn: async() => {
          const res = await axiosSecure.get(`/contest`)
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

    const handleDeleteItem = item => {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
          if (result.isConfirmed) {
              const res = await axiosSecure.delete(`/contest/${item._id}`);
              console.log(res.data);
              if(res.data.deletedCount > 0){
                  refetch();
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${item.contestName} has been deleted from database`,
                      showConfirmButton: false,
                      timer: 1500
                    });
              }
          }
        });
    }
  
    return (
      <div>
      
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Contest Name</th>
                  <th>Type</th>
                  <th>status</th>
                  <th>Confirm</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              
                {
                myContest?.map((item, index) => <tr key={item._id}>
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
                 {item.contestName}
                
                </td>
                <td>{item.type}</td>
                <td>{item.status}</td>
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
                <td>
                <button
                    onClick={() => handleDeleteItem(item)} 
                    className="btn btn-ghost btn-sm text-red-400">
                      <FaTrashAlt></FaTrashAlt>
                </button>
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

export default ManageContest;