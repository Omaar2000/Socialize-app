import { Users } from "../data";
import Online from "./Online";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="d-flex align-items-center gap-2 ">
          <img
            src="../imgs/img-9.jpg"
            class="img-fluid mt-3"
            style={{ width: "80px" }}
            alt=""
          />
          <span>
            <strong>Pola Foaster</strong> and <strong>3 other friends</strong>
            have a birthday today
          </span>
        </div>
        <img src="../imgs/img-10.jpg" class="img-fluid rounded mt-3" alt="" />

        <div>
          <span className="mt-3 d-block">
            <strong> online friends</strong>
          </span>
          <div className="d-flex flex-column gap-2">
            {Users.map((user) => (
              <Online key={user.id} user={user} />
            ))}
          </div>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4>User Information</h4>
        <div className="rightBarInfo mb-3">
          <div className="rightBarItem">
            <span
              style={{ fontWeight: "500", color: "#555", marginRight: "15px" }}
            >
              City :
            </span>
            <span style={{ fontWeight: "300" }}>New York</span>
          </div>
          <div className="rightBarItem">
            <span
              style={{ fontWeight: "500", color: "#555", marginRight: "15px" }}
            >
              From :{" "}
            </span>
            <span style={{ fontWeight: "300" }}>Madrid</span>
          </div>
          <div className="rightBarItem">
            <span
              style={{ fontWeight: "500", color: "#555", marginRight: "15px" }}
            >
              Relationship :
            </span>
            <span style={{ fontWeight: "300" }}> Single </span>
          </div>
        </div>
        <h4 className="mb-3">User Friends</h4>
        <div className="followings d-flex flex-wrap justify-content-around">
          <div className="following d-flex flex-column ">
            <img
              src="../imgs/img-1.jpg"
              alt=""
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <span>John Carter</span>
          </div>
          <div className="following d-flex flex-column">
            <img
              src="../imgs/img-2.jpg"
              alt=""
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <span>John Carter</span>
          </div>
          <div className="following d-flex flex-column">
            <img
              src="../imgs/img-4.jpg"
              alt=""
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <span>John Carter</span>
          </div>
          <div className="following d-flex flex-column">
            <img
              src="../imgs/img-5.jpg"
              alt=""
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <span>John Carter</span>
          </div>
          <div className="following d-flex flex-column">
            <img
              src="../imgs/img-6.jpg"
              alt=""
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <span>John Carter</span>
          </div>
          <div className="following d-flex flex-column">
            <img
              src="../imgs/img-1.jpg"
              alt=""
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <span>John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="col-3">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  );
};

export default Rightbar;
