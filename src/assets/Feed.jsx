import { EmojiEmotions, Label, Photo, Room } from "@mui/icons-material";
import Post from "./Post";
import { Posts } from "../data";

const Feed = () => {
  return (
    <div className="col-6.5 p-5">
      <div className=" container shadow-sm p-5 pt-1 pe-1  " width="90%">
        <div className="sharePost p-1 m-3 d-flex">
          <img
            src="../imgs/img-1.jpg"
            class="img-fluid rounded-pill"
            alt=""
            width={"50"}
          />
          <input
            type="text"
            class="mx-3 border-0 px-1 py-2"
            name=""
            id=""
            placeholder="What's in your mind John?"
          />
        </div>
        <hr width="90%" />
        <div className="bottom d-flex gap-4 align-items-center">
          <div className="options d-flex " role="button">
            <Photo className="text-danger" />
            <span style={{ fontSize: "14px", fontWeight: "500" }}>
              Photo or Video
            </span>
          </div>

          <div className="options d-flex  " role="button">
            <Label className="text-primary" />
            <span style={{ fontSize: "14px", fontWeight: "500" }}>Tag</span>
          </div>

          <div className="options d-flex gap" role="button">
            <Room className="text-success" />
            <span style={{ fontSize: "14px", fontWeight: "500" }}>
              Location
            </span>
          </div>

          <div className="options d-flex " role="button">
            <EmojiEmotions className="text-warning" />
            <span style={{ fontSize: "14px", fontWeight: "500" }}>
              Feelings
            </span>
          </div>
          <button type="button" class="btn btn-primary ms-auto me-3 mt-auto">
            Share
          </button>
        </div>
      </div>
      {/* <Post />
      <Post /> */}

      {Posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {console.log(Posts)}
    </div>
  );
};

export default Feed;
