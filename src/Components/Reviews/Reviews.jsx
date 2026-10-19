import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { userContext } from '../../Context/User.Context';

export default function Reviews({ productId }) {

    const [reviews, setReviews] = useState([])
    const { token } = useContext(userContext)


    //trenary oprator to show all comments
    const [showAllReviews, setShowAllReviews] = useState(false);
    const visibleReviews = showAllReviews
        ? reviews
        : reviews.slice(0, 1);

    // getAllReviews fun for a product
    async function getAllReviews() {
        const options = {
            url: `https://ecommerce.routemisr.com/api/v1/products/${productId}/reviews`,
            method: "GET",
        }
        const { data } = await axios.request(options);
        console.log(data.data);

        setReviews(data.data)
    }

    //create comment
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("5");

    async function CreateReviews({ review, rating }) {
        try {
            const options = {
                url: `https://ecommerce.routemisr.com/api/v1/products/${productId}/reviews`,
                method: "POST",
                headers: {
                    token,
                    "Content-Type": "application/json",
                },
                data: {
                    review,
                    rating,
                },
            };

            const { data } = await axios.request(options);

            console.log(data.data);

            await getAllReviews();
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    }


  

    useEffect(() => {
        getAllReviews()
    }, []);

    return (
        <>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-5">
                    Customer Reviews
                    <span className="text-sm font-normal text-gray-500 ml-2">
                        ({reviews.length})
                    </span>
                </h2>

                {visibleReviews.map((review) => (
                    <div
                        key={review._id}
                        className="border border-gray-200 rounded-xl p-4 mb-3 shadow-sm"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-800">
                                {review.user?.name || "Customer"}
                            </h3>

                            <span className="text-yellow-500 font-medium">
                                ★ {review.rating}/5
                            </span>
                        </div>

                        <p className="text-gray-600 leading-7">
                            {review.review}
                        </p>
                    </div>
                ))}

                {reviews.length > 1 && (
                    <button
                        onClick={() => setShowAllReviews(!showAllReviews)}
                        className="flex items-center gap-2 mx-auto mt-5 text-emerald-600
        font-semibold hover:text-emerald-700 transition cursor-pointer"
                    >
                        {showAllReviews ? "Show less" : `Show all ${reviews.length} reviews`}

                        <i
                            className={`fa-solid ${showAllReviews ? "fa-chevron-up" : "fa-chevron-down"
                                }`}
                        ></i>
                    </button>
                )}

                {reviews.length === 0 && (
                    <p className="text-gray-500">No reviews yet.</p>
                )}
            </div>


            {/* create comment form */}
          
<form
  onSubmit={(e) => {
    e.preventDefault();

    if (!reviewText.trim()) return;

    CreateReviews({
      review: reviewText,
      rating,
    });

    setReviewText("");
  }}
  className="mb-6 rounded-xl border border-gray-200 p-4"
>
  <h3 className="mb-3 text-lg font-semibold">
    Write a Review
  </h3>

  <label className="mb-2 block text-sm font-medium">
    Your Rating
  </label>

  <select
    value={rating}
    onChange={(e) => setRating(e.target.value)}
    className="mb-4 rounded-lg border p-2"
  >
    <option value="5">★★★★★ - 5</option>
    <option value="4">★★★★ - 4</option>
    <option value="3">★★★ - 3</option>
    <option value="2">★★ - 2</option>
    <option value="1">★ - 1</option>
  </select>

  <textarea
    value={reviewText}
    onChange={(e) => setReviewText(e.target.value)}
    placeholder="Share your experience with this product..."
    className="mb-3 w-full rounded-lg border p-3"
    rows={3}
  />

  <button
    type="submit"
    className="rounded-lg bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-700"
  >
    Submit Review
  </button>
</form>



        </>
    )
}
