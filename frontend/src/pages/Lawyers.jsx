import Lawyer from "@/components/Lawyer";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Lawyers = () => {
  const [lawyers, setLawyers] = useState([]);

  const fetchLawyers = async () => {
    const querySnapshot = await getDocs(collection(db, "lawyers"));
    const lawyers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return lawyers;
  };

  useEffect(() => {
    fetchLawyers().then(setLawyers);
    console.log(lawyers);
  }, []);
  return (
    <div>
      <div className="bg-white px-4 py-12 mx-auto">
        <h1 className="text-[#1F2937] mt-4 text-center text-6xl md:text-5xl font-extrabold leading-tight">
          Consult Best Lawyers{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
            Near You
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mt-7 mb-9">
          {lawyers.map((lawyer, index) => (
            <Lawyer key={index} lawyer={lawyer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
