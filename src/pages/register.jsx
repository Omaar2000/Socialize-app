import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div
        className="login d-flex align-items-center justify-content-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div
          className="loginWrap d-flex"
          style={{ width: "70%", height: "70%" }}
        >
          <div
            className="loginLeft d-flex flex-column justify-content-center"
            style={{ flex: "1" }}
          >
            <h3
              style={{
                color: "#1775ee",
                fontSize: "50px",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Socialize
            </h3>
            <span style={{ fontSize: "24px" }}>
              Connect with friends and the world around you with Socialize.
            </span>
          </div>
          <div
            className="loginRight d-flex flex-column justify-content-center align-items-center"
            style={{ flex: "1" }}
          >
            <div
              className="loginBox d-flex flex-column gap-2 bg-white"
              style={{ height: "300px", padding: "20px", borderRadius: "10px" }}
            >
              <input
                type="text"
                placeholder="Email"
                style={{
                  height: "50px",
                  borderRadius: "10px",
                  border: "1px solid gray",
                  paddingLeft: "20px",
                  fontSize: "18px",
                }}
              />
              <input
                type="text"
                placeholder="Email Again"
                style={{
                  height: "50px",
                  borderRadius: "10px",
                  border: "1px solid gray",
                  paddingLeft: "20px",
                  fontSize: "18px",
                }}
              />
              <input
                type="Password"
                placeholder="Password"
                style={{
                  height: "50px",
                  borderRadius: "10px",
                  border: "1px solid gray",
                  paddingLeft: "20px",
                  fontSize: "18px",
                }}
              />
              <input
                type="Password"
                placeholder="Password Again"
                style={{
                  height: "50px",
                  borderRadius: "10px",
                  border: "1px solid gray",
                  paddingLeft: "20px",
                  fontSize: "18px",
                }}
              />
              <Link type="button" class="btn btn-primary" to="/home">
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
