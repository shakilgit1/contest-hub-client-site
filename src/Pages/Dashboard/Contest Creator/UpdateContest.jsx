import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateContest = () => {
  const updateItems = useLoaderData();
  const {_id, contestName, price, contestPrize, shortDescription, task, deadline, type} = updateItems || {};

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // upload image to imagebb
    const imageFile = {image: data.image[0]};
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if(res.data.success){
      //  console.log('add to imgbb');
      const UpdateItem = {
        contestName: data.name,
        type: data.type,
        contestPrize: parseFloat(data.prize),
        price: parseFloat(data.price),
        shortDescription: data.description,
        deadline: data.date,
        task: data.task,
        attemptedCount: 20,
        status: 'pending',
        image: res.data.data.display_url
      }
     
      // 
      const itemRes = await axiosSecure.patch(`/contest/${_id}`, UpdateItem)
      console.log(itemRes.data);
      if(itemRes.data.modifiedCount > 0){
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} Updated`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    // console.log("from imagebb url", res.data);
  };

  return (
    <div>
        <h2 className="text-4xl text-center mb-4">Update Your Contest</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-3">
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text">Contest Name*</span>
            </label>
            <input
              type="text"
              {...register("name", {required: true})}
              required
              defaultValue={contestName}
              placeholder="Contest name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text">Deadline*</span>
            </label>
            <input
              type="date"
              {...register("date", {required: true})}
              required
              defaultValue={deadline}
              placeholder="Contest deadline"
              className="input input-bordered w-full "
            />
          </div>
          </div>
          <div className="flex gap-3">
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text">Contest Task*</span>
            </label>
            <input
              type="text"
              {...register("task", {required: true})}
              required
              defaultValue={task}
              placeholder="Contest task"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text">Prize*</span>
            </label>
            <input
              type="number"
              {...register("prize", {required: true})}
              required
              defaultValue={contestPrize}
              placeholder="Contest prize"
              className="input input-bordered w-full "
            />
          </div>
          </div>

          <div className="flex gap-3">
            {/* category */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Type*</span>
              </label>
              <select defaultValue={type}
                {...register("type", {required: true})}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="Gaming">Gaming</option>
                <option value="Medical Contest">Medical Contest</option>
                <option value="Business Contest">Business Contest</option>
                <option value="Article Writing">Article Writing</option>
              
              </select>
            </div>

            {/* price*/}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", {required: true})}
                placeholder="price"
                defaultValue={price}
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Contest Details</span>
            </label>
            <textarea
             {...register("description", {required: true})}
              defaultValue={shortDescription}
              className="textarea textarea-bordered h-24"
              placeholder="Contest Details"
            ></textarea>
          </div>
            <div className="mt-2">
            <input type="file"
            {...register("image", {required: true})}
            className="file-input w-full max-w-xs" />
            </div>
          <button className="btn mt-2 btn-primary">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateContest;