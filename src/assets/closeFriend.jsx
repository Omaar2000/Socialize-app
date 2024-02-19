const CloseFriend = ({ user }) => {
  console.log(user);
  return (
    <div className="d-flex align-items-center mb-3">
      <img
        src={user.profilePicture}
        class="img-fluid rounded-pill "
        style={{ width: "2.5rem" }}
        alt="chat-page"
      />
      <p className="align-self-center m-0 ms-3" style={{ fontWeight: "500" }}>
        {user.username}
      </p>
    </div>
  );
};

export default CloseFriend;
