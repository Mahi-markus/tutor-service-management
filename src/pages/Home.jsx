import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to TutorSheba Clone</h1>
      <p className="mt-2 text-gray-600">Find the best tutors in your area</p>
      <div className="mt-5">
        <Link to="/Tutors" className="px-4 py-2  text-white rounded-lg">
          Browse Tutors
        </Link>
        <Link to="/Login" className="px-4 py-2  text-white rounded-lg">
          Login
        </Link>
        <Link to="/Signup" className="px-4 py-2  text-white rounded-lg">
          Signup
        </Link>
       
      </div>
    </div>
  );
};

export default Home;
