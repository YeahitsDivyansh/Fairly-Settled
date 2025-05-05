import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { db, storage } from "../firebase";
import { collection, getDocs, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";
import JobsLoading from "@/components/JobsLoading";


const Careers = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "roles"));
        const rolesData = querySnapshot.docs.map(doc => doc.data());
        setRoles(rolesData);
        // console.log(roles);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
      setLoading(false);
    };

    fetchRoles();
  }, []);


  const [hireVisible, setHireVisible] = useState(false);
  const hireRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHireVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const current = hireRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeForm, setActiveForm] = useState(null);


  const toggleExpand = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setActiveForm(null); // Close any open forms when switching category
  };

  const handleSubmit = async (e, position) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const linkedin = e.target.linkedin.value;
    const resumeFile = e.target.resume.files[0];

    if (!name || !email || !linkedin || !resumeFile) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const resumeRef = ref(storage, `resumes/${Date.now()}_${resumeFile.name}`);
      await uploadBytes(resumeRef, resumeFile);
      const resumeURL = await getDownloadURL(resumeRef);

      const newAppRef = doc(collection(db, "Applications"));
      await setDoc(newAppRef, {
        name,
        email,
        linkedin,
        resumeURL,
        position,
        createdAt: serverTimestamp()
      });

      toast.success("Application submitted successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Something went wrong.");
    }
  };


  return (
    <section className="bg-white px-4 py-16 md:py-24 mx-auto text-center">
      <h4 className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-4">
        Careers at FairlySettled
      </h4>

      <h1 className="text-gray-900 text-4xl md:text-5xl font-extrabold leading-tight mt-6">
        Shape legal systems with{" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
          purpose & precision
        </span>
      </h1>

      <p className="text-gray-700 text-lg md:text-xl mt-6 max-w-4xl mx-auto">
        We're reimagining the legal system for speed, accessibility, and impact.
        Our work centers on eliminating the bottlenecks that slow down justice —
        from tedious paperwork to outdated processes. Enter{" "}
        <strong>Agility AI</strong>: an intelligent platform that automates case
        filing, document generation, and real-time tracking. But it’s more than
        just automation — it’s a shift in how legal institutions function. By
        embedding precision, transparency, and speed into every layer,{" "}
        <strong>Agility AI</strong> empowers legal professionals to focus on
        strategy and advocacy rather than administrative grind. Our team spans
        law, technology, public policy, and the sciences — united by a mission
        to build smarter systems that serve both people and principle. We
        believe the future of law should be fast, fair, and fundamentally human.
      </p>

      <Button
        variant="outline"
        className="mt-8 bg-gray-800 text-white hover:bg-blue-900 font-semibold text-base px-6 py-3"
      >
        Have a look at our Open Roles
      </Button>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img
          src="https://images.unsplash.com/photo-1600695268275-1a6468700bd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Decorative"
          className="rounded-xl shadow-md object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-95"
        />
        <img
          src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dWklMkZ1eHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Decorative"
          className="rounded-xl shadow-md object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-95"
        />
        <img
          src="https://media.istockphoto.com/id/2012393906/photo/big-data-analysis-with-ai-technology-person-using-machine-learning-and-deep-learning-neural.webp?a=1&b=1&s=612x612&w=0&k=20&c=EOjmnc2Jp-_U3gJrOUNgJR8vXnwma39V58CEwewLsL8="
          alt="Decorative"
          className="rounded-xl shadow-md object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-95"
        />
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHJ8ZW58MHx8MHx8fDA%3D"
          alt="Decorative"
          className="rounded-xl shadow-md object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-95"
        />
        <img
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Decorative"
          className="rounded-xl shadow-md object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-95"
        />
        <img
          src="https://media.istockphoto.com/id/1499401564/photo/two-lawyers-are-discussing-about-contract-paper-law-matters-determination-pointing-law-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=aSz-uGSpVfQgA4vpiMQRIxLsdIrqIfbwFufQlA07dIA="
          alt="Decorative"
          className="rounded-xl shadow-md object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-95"
        />
      </div>


      {/* Role Section */}
      <div className="max-w-3xl mx-auto mt-12 space-y-8 text-left relative min-h-80">
        {loading ? (
          <>
            <JobsLoading /> <JobsLoading /> <JobsLoading />
          </>
        ) : (
          roles.map(({ category, positions }) => {
            return (
              <div
                key={category}
                className="relative rounded transition-transform duration-300 hover:scale-[1.01] hover:-translate-y-1"
              >
                {/* Subtle Glow (toned down) */}
                <div className="absolute -inset-[1px] z-0 rounded-3xl bg-gradient-to-tr from-white via-gray-100 to-gray-200 opacity-40 blur-lg animate-pulse"></div>

                {/* Content Wrapper */}
                <div className="relative z-10 bg-white border border-gray-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div
                    onClick={() => toggleExpand(category)}
                    className="flex justify-between items-center p-4 transition cursor-pointer hover:bg-gray-50"
                  >
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{category}</h3>
                      <p className="text-sm text-gray-600">
                        {positions.length} Open Role{positions.length > 1 ? 's' : ''}
                      </p>
                    </div>
                    {expandedCategory === category ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>

                  {/* Expanded Positions */}
                  {expandedCategory === category && (
                    <div className="px-6 pb-4 space-y-3">
                      {positions.map((position, idx) => {
                        const positionKey = `${category}-${idx}`;
                        return (
                          <div key={positionKey} className="pb-4">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-800 font-medium">{position}</span>
                              <Button
                                className="text-sm shadow-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={() =>
                                  setActiveForm(activeForm === positionKey ? null : positionKey)
                                }
                              >
                                Apply
                              </Button>
                            </div>

                            {/* Form dropdown */}
                            {activeForm === positionKey && (
                              <form
                                onSubmit={(e) => handleSubmit(e, position)}
                                className="mt-4 pt-6 px-6 border border-gray-500 rounded-xl shadow-sm bg-white"
                              >
                                <h1 className="text-xl font-extrabold text-gray-800 text-center mb-4">
                                  Apply for <span className="text-blue-600">{position}</span>
                                </h1>

                                {[
                                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
                                  { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
                                  { id: 'linkedin', label: 'LinkedIn Profile URL:', type: 'url', placeholder: 'Enter your LinkedIn Profile URL' },
                                ].map(({ id, label, type, placeholder }) => (
                                  <div key={id} className="mb-4">
                                    <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
                                      {label}
                                    </label>
                                    <input
                                      id={id}
                                      name={id}
                                      type={type}
                                      required
                                      placeholder={placeholder}
                                      className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    />
                                  </div>
                                ))}

                                <div className="mb-4">
                                  <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
                                    Resume:
                                  </label>
                                  <input
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    required
                                    className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700"
                                  />
                                </div>

                                <div className="flex items-center justify-center mb-4">
                                  <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-7 rounded-full shadow-sm transition-all duration-300"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </form>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>


      {/* How we hire / What we offer */}
      <div
        ref={hireRef}
        className={`max-w-3xl mx-auto mt-20 text-left transition-all duration-1000 ease-out transform ${hireVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          How We Hire / What We Offer
        </h2>
        <p className="text-gray-700 text-base leading-relaxed space-y-2">
          We're at the cusp of evolution—from a few driven builders to a
          mission-driven organization. While our culture is still taking shape,
          we remain anchored by core values: generosity of thought, clarity in
          communication, and a deep respect for collective knowledge. We lean
          into first principles, and we believe true expertise is marked not
          only by insight, but by humility and the ability to teach.
        </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          We look for people who are sharp, curious, and a little
          unconventional. Those who thrive in ambiguity, learn quickly, and are
          eager to take initiative. We believe interest, intent, and potential
          matter more than credentials or traditional experience.
        </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          In return, we promise clarity and candor about roles,
          responsibilities, and what success looks like. Equity is not an
          afterthought—we’re generous because we see this as shared ownership.
          We also believe in flexible paths: you help shape your role here, not
          the other way around.
        </p>
      </div>
    </section>
  );
};

export default Careers;
