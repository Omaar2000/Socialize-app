import {
  Bookmark,
  Chat,
  Event,
  Feed,
  Group,
  QuestionAnswer,
  VideocamTwoTone,
  Work,
} from "@mui/icons-material";

import CloseFriend from "./closeFriend";
import { Users } from "../data";

const Leftbar = () => {
  return (
    <div
      className="d-flex flex-column p-3 col-2"
      // style={{ display: "sticky" }}
    >
      <a href="#" className=" text-dark text-decoration-none mb-2 p-2 mb-2 p-2">
        <Feed className="me-2" />
        Feed
      </a>
      <a href="#" className="text-dark text-decoration-none mb-2 p-2 hover-1">
        <Chat className="me-2" />
        Chats
      </a>
      <a href="#" className="text-dark text-decoration-none mb-2 p-2">
        <VideocamTwoTone className="me-2" />
        Videos
      </a>
      <a href="#" className="text-dark text-decoration-none mb-2 p-2">
        <Group className="me-2" />
        Groups
      </a>
      <a href="#" className="text-dark text-decoration-none mb-2 p-2">
        <Bookmark className="me-2" />
        Bookmarks
      </a>
      <a href="#" className="text-dark text-decoration-none mb-2 p-2">
        <QuestionAnswer className="me-2" />
        Questions
      </a>
      <a href="#" className="text-dark text-decoration-none mb-2 p-2">
        <Work className="me-2" />
        Jobs
      </a>
      <a href="#" className="text-dark text-decoration-none mb-2 p-2">
        <Event className="me-2" />
        Events
      </a>

      <button type="button" class="btn btn-secondary">
        Show More
      </button>

      <hr style={{ width: "100%" }} />

      {Users.map((user) => (
        <CloseFriend key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Leftbar;
