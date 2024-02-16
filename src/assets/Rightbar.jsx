const Rightbar = () => {
  return (
    <div className="col-3">
      <div className="d-flex align-items-center gap-2">
        <img
          src="../imgs/img-9.jpg"
          class="img-fluid mt-3"
          style={{ width: "80px" }}
          alt=""
        />
        <span>
          <strong>Pola Foaster</strong> and <strong>3 other friends</strong>{" "}
          have a birthday today
        </span>
      </div>
      <img src="../imgs/img-10.jpg" class="img-fluid rounded mt-3" alt="" />

      <div>
        <span className="mt-3 d-block">
          <strong> online friends</strong>
        </span>
        <div className="d-flex flex-column gap-2">
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
                src="../imgs/img-6.jpg"
                class="img d-block rounded-pill"
                alt=""
                width={"50px"}
              />
            </div>
            <p className="d-block mb-0 ms-3" style={{ fontWeight: "500" }}>
              John
            </p>
          </div>
          <div className="d-flex align-items-center">
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
                src="../imgs/img-5.jpg"
                class="img d-block rounded-pill"
                alt=""
                width={"50px"}
              />
            </div>
            <p className="d-block mb-0 ms-3" style={{ fontWeight: "500" }}>
              Tommy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
