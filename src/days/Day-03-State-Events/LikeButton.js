import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900">
        Like Button
      </h2>

      <p className="text-gray-600 mt-3">
        {liked ? "You liked this!" : "Click the button to like"}
      </p>

      <button
        onClick={handleLike}
        className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
      >
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default LikeButton;