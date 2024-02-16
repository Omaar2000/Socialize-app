import {
  Bookmark,
  Chat,
  Event,
  Feed,
  Grade,
  Group,
  QuestionAnswer,
  Star,
  VideocamTwoTone,
  Work,
} from "@mui/icons-material";

const Leftbar = () => {
  return (
    <div className="d-flex flex-column p-3 col-2">
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

      <div className="d-flex align-items-center mb-3">
        <img
          src="../imgs/img-2.jpg"
          class="img-fluid rounded-pill "
          style={{ width: "2.5rem" }}
          alt="chat-page"
        />
        <p className="align-self-center m-0 ms-3 fs-5 fw-bold">Ahmed Samy</p>
      </div>
      <div className="d-flex align-items-center mb-3">
        <img
          src="../imgs/img-2.jpg"
          class="img-fluid rounded-pill "
          style={{ width: "2.5rem" }}
          alt="chat-page"
        />
        <p className="align-self-center  m-0 ms-3 fs-5 fw-bold">Ahmed Samy</p>
      </div>
      <div className="d-flex align-items-center mb-3">
        <img
          src="../imgs/img-2.jpg"
          class="img-fluid rounded-pill "
          style={{ width: "2.5rem" }}
          alt="chat-page"
        />
        <p className="align-self-center  m-0 ms-3 fs-5 fw-bold">Ahmed Samy</p>
      </div>
      <div className="d-flex align-items-center mb-3">
        <img
          src="../imgs/img-2.jpg"
          class="img-fluid rounded-pill "
          style={{ width: "2.5rem" }}
          alt="chat-page"
        />
        <p className="align-self-center  m-0 ms-3 fs-5 fw-bold">Ahmed Samy</p>
      </div>
      <div className="d-flex align-items-center mb-3">
        <img
          src="../imgs/img-2.jpg"
          class="img-fluid rounded-pill "
          style={{ width: "2.5rem" }}
          alt="chat-page"
        />
        <p className="align-self-center  m-0 ms-3 fs-5 fw-bold">Ahmed Samy</p>
      </div>
      <div className="d-flex align-items-center mb-3">
        <img
          src="../imgs/img-2.jpg"
          class="img-fluid rounded-pill "
          style={{ width: "2.5rem" }}
          alt="chat-page"
        />
        <p className="align-self-center  m-0 ms-3 fs-5 fw-bold">Ahmed Samy</p>
      </div>
      <div className="d-flex align-items-center mb-3">
        <img
          src="../imgs/img-2.jpg"
          class="img-fluid rounded-pill "
          style={{ width: "2.5rem" }}
          alt="chat-page"
        />
        <p className="align-self-center  m-0 ms-3 fs-5 fw-bold">Ahmed Samy</p>
      </div>
      <div className="d-flex align-items-center mb-3">
        <img
          src="../imgs/img-2.jpg"
          class="img-fluid rounded-pill "
          style={{ width: "2.5rem" }}
          alt="chat-page"
        />
        <p className="align-self-center  m-0 ms-3 fs-5 fw-bold">Ahmed Samy</p>
      </div>
      <div className="d-flex align-items-center mb-3">
        <img
          src="../imgs/img-2.jpg"
          class="img-fluid rounded-pill "
          style={{ width: "2.5rem" }}
          alt="chat-page"
        />
        <p className="align-self-center  m-0 ms-3 fs-5 fw-bold">Ahmed Samy</p>
      </div>
    </div>
  );
};

export default Leftbar;
