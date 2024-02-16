import { MoreVert } from "@mui/icons-material";

const Post = ({ post }) => {
  return (
    <div className="shadow-sm pt-1 mt-5">
      <div className="d-flex align-items-center mb-3 p-1 m-3">
        <img
          src="../imgs/img-4.jpg"
          class="img-fluid rounded-pill "
          style={{ width: "2.5rem" }}
          alt="chat-page"
        />
        <p
          className="align-self-center  m-0 ms-3 "
          style={{ fontWeight: "500" }}
        >
          Sayed Saleh
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
        <span className=" d-block">
          <img
            src="../imgs/img-7.jpg"
            class="img-fluid "
            style={{ width: "30px" }}
            alt=""
            role="button"
          />
          <img
            src="../imgs/img-8.jpg"
            class="img-fluid me-2"
            style={{ width: "30px" }}
            alt=""
            role="button"
          />
          {post.like} people like this post
        </span>
        <span className=" ms-auto me-2">9 comments</span>
      </div>
    </div>
  );
};

export default Post;
