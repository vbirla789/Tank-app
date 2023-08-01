import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { newReview } from "../../redux/Action/reviewAction";

const CreateReview = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const reviewSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));
  };

  return (
    <div className="flex items-center justify-center my-5">
      <div className="bg-white p-8 shadow-xl rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">Create Review</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="rating" className="block font-semibold mb-2">
              Rating:
            </label>
            <input
              type="number"
              name="rating"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              id="rating"
              min="1"
              max="5"
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="comment" className="block font-semibold mb-2">
              Comment:
            </label>
            <textarea
              name="comment"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows="4"
              cols="50"
              required
              className="w-full p-2 border rounded-md"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
              onClick={reviewSubmitHandler}
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReview;
