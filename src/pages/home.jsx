import Leftbar from "../assets/Leftbar";
import Feed from "../assets/Feed";
import Navbar from "../assets/navbar/Navbar";
import Rightbar from "../assets/Rightbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
