import { useEffect, useState } from "react";
import axios from "axios";

const Tutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tutors")
      .then(response => setTutors(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-5">Available Tutors</h2>
      <ul>
        {tutors.map(tutor => (
          <li key={tutor.id} className="p-4 bg-white shadow-md mb-3 rounded-lg">
            {tutor.name} - {tutor.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tutors;
