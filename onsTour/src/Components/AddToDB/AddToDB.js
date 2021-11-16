import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddToDB = () => {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://polar-inlet-15504.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Data Added.");
          reset();
        }
      });
  };
  return (
    <div className="container my-5 py-3">
      <h1 className="text-center">Add Package to Database</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-2 p-4 rounded shadow"
      >
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("id", { required: true, maxLength: 20 })}
          placeholder="id"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("title", { required: true, maxLength: 300 })}
          placeholder="title"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("country", { required: true, maxLength: 300 })}
          placeholder="country"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("place", { required: true, maxLength: 300 })}
          placeholder="place"
        />
        <textarea
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("description")}
          placeholder="Description"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("time", { required: true, maxLength: 300 })}
          placeholder="time"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("people", { required: true, maxLength: 300 })}
          placeholder="people"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("reviews", { required: true, maxLength: 300 })}
          placeholder="reviews"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("rating", { required: true, maxLength: 300 })}
          placeholder="rating"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("cost", { required: true, maxLength: 300 })}
          placeholder="cost"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("place")}
          placeholder="place"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("image")}
          placeholder="image URL"
        />

        <button type="submit" className="btn btn-primary my-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToDB;
