
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";


const MyPerticipatedContest = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [myContest, setMyContest] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/payments/${user?.email}`)
        .then(res => {
            setMyContest(res.data)
        })
    }, [axiosSecure, user?.email])

  
    return (
        <div>
            <h2 className="text-center text-4xl">My Registered Contest</h2>
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
                  <th>Deadline</th>
                 
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
                <td>{item.deadline}</td>
                
              </tr>)
                }
               
              </tbody>
            
            </table>
          </div>
        </div>
        </div>
    );
};

export default MyPerticipatedContest;