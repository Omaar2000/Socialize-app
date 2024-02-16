import Person from "@mui/icons-material/Person";
import Notifications from "@mui/icons-material/notifications";
import Chat from "@mui/icons-material/Chat";
import { Search } from "@mui/icons-material";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      className="nav nav-bar bg-primary d-flex align-items-center "
      style={{ width: "100%", height: "50px" }}
    >
      <div className="logo align-self-center text-white">Socialize</div>
      <div className="search">
        <form className="searchForm">
          <Search className="searchIcon" />
          <input
            type="text"
            className="form-control rounded-pill border-0 focus-ring focus-ring-light px-1 py-2"
            placeholder="  Search for people, posts or videos"
          />
        </form>
      </div>
      <div className="notifications d-flex">
        <div className="links d-flex">
          <a href="#">Home</a>
          <a href="#">Timeline</a>
        </div>
        <div className="icons d-flex justify-content-center align-items-center">
          <Person className="text-white me-3" />
          <div className="position-relative">
            <Notifications className="text-white me-3" />
            <span class="position-absolute top-0 start-50 ms-2 translate-middle badge rounded-5 bg-danger fs-sm">
              9+
            </span>
          </div>

          <div className="position-relative">
            <Chat className="text-white me-3" />
            <span class="position-absolute top-0 start-50 ms-2 translate-middle badge rounded-5 bg-danger fs-lg">
              9+
            </span>
          </div>
        </div>
        <div className="img">
          <img
            src="./imgs/img-1.jpg"
            alt="profile img"
            className="profileImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
