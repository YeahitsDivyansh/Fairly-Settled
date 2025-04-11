import React from "react";

const Footer = () => {
    return (
        <footer   className="bg-gray-300 py-12 px-4 text-sm text-gray-700">
        <div className="flex flex-wrap justify-center gap-6 mx-4 my-4 text-center">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">User Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10  pt-3 text-gray-500">
          &copy; 2024 FairlySettled. All rights reserved.
        </div>
      </footer>
    )
};

export default Footer;