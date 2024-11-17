import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <>
      <p>It is a admin home page</p>
      <Link to={"/"} className="bg-purple-700 text-white font-semibold px-3 py-1 rounded">Home</Link>
    </>
  );
}

export default AdminHome;
