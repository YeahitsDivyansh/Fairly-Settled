import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chatbot from "./pages/Chatbot";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import UploadDoc from "./pages/UploadDoc";
import DraftDocument from "./pages/DraftDocuments";
import RealEstateAgreements from "./pages/Drafts/RealEstateAgreements";
import BusinessAgreements from "./pages/Drafts/BusinessAgreements";
import EmploymentAgreements from "./pages/Drafts/EmploymentAgreements";
import FinancialAgreements from "./pages/Drafts/FinancialAgreements";
import IntellectualPropertyAgreement from "./pages/Drafts/IntellectualPropertyAgreement";
import PersonalLegalAgreements from "./pages/Drafts/PersonalLegalAgreements";
import PhoneSignUp from "./pages/PhoneSignup";
import PhoneSignIn from "./pages/PhoneSignin";
import About from "./routes/About";
import FAQ from "./routes/FAQ";
import Careers from "./routes/Careers";
import PrivacyPolicy from "./legal_routes/PrivacyPolicy";
import TermsAndConditions from "./legal_routes/TermsAndConditions";
import DataProtection from "./legal_routes/DataProtection";
import Disclaimer from "./legal_routes/Disclaimer";
import Lawyers from "./pages/Lawyers";
import LawyerProfile from "./pages/LawyerProfile";
import AppointmentForm from "./pages/AppointmentForm";
import LawyerSignUp from "./pages/LawyerSignUp";
import LawyerSignIn from "./pages/LawyerSignIn";
import LawyerDashBoard from "./pages/LawyerDashBoard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Wrap everything in Layout for animation
      children: [
        {
          index: true, // this means: path = "/"
          element: <Home />,
        },
        {
          path: "upload-doc",
          element: <UploadDoc />,
        },
        {
          path: "draft-doc",
          element: <DraftDocument />,
        },
        {
          path: "business-agreements",
          element: <BusinessAgreements />,
        },
        {
          path: "employment-agreements",
          element: <EmploymentAgreements />,
        },
        {
          path: "real-estate-agreements",
          element: <RealEstateAgreements />,
        },
        {
          path: "financial-agreements",
          element: <FinancialAgreements />,
        },
        {
          path: "intellectual-property-agreements",
          element: <IntellectualPropertyAgreement />,
        },
        {
          path: "personal-legal-agreements",
          element: <PersonalLegalAgreements />,
        },
        {
          path: "/aboutus",
          element: <About />,
        },
        {
          path: "/faq",
          element: <FAQ />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/terms-and-conditions",
          element: <TermsAndConditions />,
        },
        {
          path: "/data-protection",
          element: <DataProtection />,
        },
        {
          path: "/disclaimer",
          element: <Disclaimer />,
        },
        {
          path: "/find-lawyer",
          element: <Lawyers />,
        },
        {
          path: "/lawyerprofile/:id",
          element: <LawyerProfile />,
        },
        {
          path: "/appointment",
          element: <AppointmentForm />,
        },
      ],
    },
    { path: "/phonesignup", element: <PhoneSignUp /> },
    { path: "/phonesignin", element: <PhoneSignIn /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/chat", element: <Chatbot /> },
    { path: "/lawyer-signup", element: <LawyerSignUp /> },
    { path: "/lawyer-signin", element: <LawyerSignIn /> },
    { path: "/lawyer-dashboard", element: <LawyerDashBoard /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
