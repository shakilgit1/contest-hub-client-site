import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = user => {
   
     axiosSecure.patch(`/users/${user._id}`)
     .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is now admin`,
                showConfirmButton: false,
                timer: 1500
              });
        }
     })
  }

  const handleDelete = (user) => {
    
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/users/${user._id}`)
          .then(res => {
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success"
                  });
            }
          })
          
        }
      });
  }

  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h2 className="text-4xl">All Users</h2>
        <h2 className="text-4xl">Total Users : {users.length}</h2>
      </div>
      <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                  {user?.role? <>{user.role}</> : 
                  <FaUser></FaUser>
                
                  }
                  </td>
                  <td>
                
                  <button 
                  onClick={() => handleMakeAdmin(user)} 
                  className="btn btn-sm text-white bg-orange-300">
                    <FaEdit></FaEdit>
                  </button>
                  
                  </td>
                  
                  <td>
                  <button 
                  onClick={() => handleDelete(user)} 
                  className="btn btn-ghost btn-sm text-red-400">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                  </td>
                </tr>)}

              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default AllUsers;