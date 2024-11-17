import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p>It is a home page</p>
      <Link to={"/admin/home"} className="bg-purple-700 text-white font-semibold px-3 py-1 rounded">Admin Home</Link>
      <Link to={"/about"} className="bg-purple-700 text-white font-semibold px-3 py-1 rounded">About</Link>
    </>
  );
}

export default Home;
