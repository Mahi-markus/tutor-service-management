import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to TutorSheba Clone</h1>
      <p className="mt-2 text-gray-600">Find the best tutors in your area</p>
      <div className="mt-5">
        <Link to="/tution_list" className="px-4 py-2  text-blue rounded-lg">
          Browse Tutions
        </Link>
        <Link to="/Login" className="px-4 py-2  text-blue rounded-lg">
          Login
        </Link>
        <Link to="/Signup" className="px-4 py-2  text-blue rounded-lg">
          Signup
        </Link>
        <Link to="/request_for_tutor" className="px-4 py-2  text-blue rounded-lg">
         Tutor Request
        </Link>
        <Link to="/tutor_details" className="px-4 py-2  text-blue rounded-lg">
         Tutor details
        </Link>
       
      </div>
    </div>
  );
};

export default Home;
