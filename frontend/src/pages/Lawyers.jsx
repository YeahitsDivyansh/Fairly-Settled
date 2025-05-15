import Lawyer from "@/components/Lawyer";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { LAW_TYPES } from "@/data/lawTypes";
import { STATES_AND_CITIES } from "@/data/locations";

const Lawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [practiceArea, setPracticeArea] = useState("");

  const fetchLawyers = async () => {
    const querySnapshot = await getDocs(collection(db, "lawyers"));
    const lawyers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return lawyers;
  };

  useEffect(() => {
    fetchLawyers().then((data) => {
      setLawyers(data);
      setFilteredLawyers(data);
    });
  }, []);

  useEffect(() => {
    let filtered = lawyers;

    if (city) {
      filtered = filtered.filter((lawyer) => lawyer.city === city);
    }

    if (state) {
      filtered = filtered.filter((lawyer) => lawyer.state === state);
    }

    if (practiceArea) {
      filtered = filtered.filter((lawyer) => {
        const areas = Array.isArray(lawyer.practiceAreas)
          ? lawyer.practiceAreas
          : Object.keys(lawyer.practiceAreas || {});

        return areas
          .map((area) => area.toLowerCase().trim())
          .includes(practiceArea.toLowerCase().trim());
      });
    }

    setFilteredLawyers(filtered);
  }, [city, state, practiceArea, lawyers]);

  return (
    <div>
      <div className="bg-white px-4 py-12 mx-auto">
        <h1 className="text-[#1F2937] mt-4 text-center text-6xl md:text-5xl font-extrabold leading-tight">
          Consult Best Lawyers{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
            Near You
          </span>
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10">
          <select
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border rounded"
            value={city}
          >
            <option value="">All Cities</option>
            {state &&
              STATES_AND_CITIES[state]?.map((cityName) => (
                <option key={cityName} value={cityName}>
                  {cityName}
                </option>
              ))}
          </select>

          <select
            onChange={(e) => setState(e.target.value)}
            className="p-2 border rounded"
            value={state}
          >
            <option value="">All States</option>
            {Object.keys(STATES_AND_CITIES).map((stateName) => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setPracticeArea(e.target.value)}
            className="p-2 border rounded"
            value={practiceArea}
          >
            <option value="">All Types</option>
            {LAW_TYPES.map((lawType) => (
              <option key={lawType} value={lawType}>
                {lawType}
              </option>
            ))}
          </select>
        </div>

        {/* Lawyer Cards */}
        <div className="flex flex-wrap justify-center gap-3 mt-7 mb-9">
          {filteredLawyers.length > 0 ? (
            filteredLawyers.map((lawyer, index) => (
              <Lawyer key={index} lawyer={lawyer} />
            ))
          ) : (
            <div className="text-center text-gray-600 text-lg mt-10">
              No lawyers found based on your selected city, state, or type.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
