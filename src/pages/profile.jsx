import Feed from "../assets/Feed";
import Leftbar from "../assets/Leftbar";
import Rightbar from "../assets/Rightbar";
import Navbar from "../assets/navbar/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div
              className="profileCover "
              style={{ height: "350px", position: "relative", width: "100%" }}
            >
              <img
                src="../imgs/img-3.jpg"
                alt=""
                className="cover"
                style={{ height: "250px", objectFit: "cover", width: "100%" }}
              />
              <img
                src="../imgs/img-1.jpg"
                alt=""
                className="cover"
                style={{
                  height: "200px",
                  objectFit: "cover",
                  width: "200px",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "40%",
                  margin: "auto",
                  border: "3px solid white",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="profileInfo d-flex justify-content-center align-items-center flex-column">
              <p
                className="profileName"
                style={{ fontSize: "24px", fontWeight: "500" }}
              >
                Safak Kocaoglu
              </p>
              <span className="profileDesc" style={{ fontWeight: "300" }}>
                Hello my friends!
              </span>
            </div>
          </div>
          <div className="profileRightBottom d-flex">
            <Feed />
            <Rightbar profile={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
