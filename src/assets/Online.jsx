const Online = ({ user }) => {
  return (
    <div className="d-flex align-items-center mt-3 position-relative">
      <div className="position-relative">
        <span
          className="position-absolute "
          style={{
            background: "limegreen",
            width: "12px",
            height: "12px",
            top: "0px",
            right: "1px",
            borderRadius: "50%",
            border: "1px solid white",
          }}
        ></span>
        <img
          src={user.profilePicture}
          class="img d-block rounded-pill"
          alt=""
          width={"50px"}
        />
      </div>
      <p className="d-block mb-0 ms-3" style={{ fontWeight: "500" }}>
        {user.username}
      </p>
    </div>
  );
};

export default Online;
