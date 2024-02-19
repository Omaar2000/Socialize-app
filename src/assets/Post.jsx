import { MoreVert } from "@mui/icons-material";
import { Users } from "../data";
import { useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikes = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="shadow-sm pt-1 mt-5">
      <div className="d-flex align-items-center mb-3 p-1 m-3">
        <img
          src={
            Users.filter((user) => user.id === post.userId)[0].profilePicture
          }
          class="img-fluid rounded-pill "
          style={{ width: "2.5rem" }}
          alt="chat-page"
        />
        <p
          className="align-self-center  m-0 ms-3 "
          style={{ fontWeight: "500" }}
        >
          {Users.filter((user) => user.id === post.userId)[0].username}
        </p>
        <span
          className="ms-2 text-secondary"
          style={{ fontSize: "13px", fontWeight: "400" }}
        >
          {post.date}
        </span>
        <MoreVert className="ms-auto" style={{ cursor: "pointer" }} />
      </div>
      <p className="container ms-2">{post?.desc}</p>
      <img src={post.photo} class="img-fluid " alt="" />
      <div className="d-flex align-items-center mt-2">
        <span className="d-block">
          <img
            src="../imgs/img-7.jpg"
            class="img-fluid "
            style={{ width: "30px" }}
            alt=""
            role="button"
            onClick={handleLikes}
          />
          {like} people like this post
        </span>
        <span className=" ms-auto me-2">{post.comment} comments</span>
      </div>
    </div>
  );
};

export default Post;
