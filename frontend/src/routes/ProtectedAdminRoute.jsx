import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkIfAdmin } from "../context/firebaseAdminCheck"; // adjust path as needed

const ProtectedAdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      const isAdminUser = await checkIfAdmin();
      setIsAdmin(isAdminUser);
      setLoading(false);
    };
    verify();
  }, []);

  if (loading) return <p>Loading...</p>;

  return isAdmin ? children : <Navigate to="/" />;
};

export default ProtectedAdminRoute;
