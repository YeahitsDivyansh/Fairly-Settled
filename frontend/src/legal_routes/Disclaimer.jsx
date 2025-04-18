import React from "react";

const Disclaimer = () => {
  return (
    <section className="bg-[#9db6d9bd] mx-auto py-16 px-6 text-left">
      <h1 className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent text-7xl md:text-5xl font-extrabold leading-tight text-center">
        Disclaimer
      </h1>

      <p className="text-gray-700 mt-6">
        The information provided on this platform is intended for general
        informational purposes only. While we strive to ensure the accuracy and
        reliability of the content, FairlySettled makes no warranties or
        representations of any kind, express or implied, about the completeness,
        accuracy, reliability, suitability, or availability of the information,
        services, or related content contained on this site.
      </p>

      <p className="text-gray-700 mt-6">
        Any reliance you place on such information is strictly at your own risk.
        We are not liable for any losses or damages, including without
        limitation, indirect or consequential loss or damage arising from the
        use of, or reliance on, the content or services offered through this
        platform.
      </p>

      <p className="text-gray-700 mt-6">
        This platform may contain links to external websites that are not
        provided or maintained by FairlySettled. Please note that we do not
        guarantee the accuracy, relevance, timeliness, or completeness of any
        information on these external websites.
      </p>

      <p className="text-gray-700 mt-6">
        Legal content and insights shared here do not constitute legal advice or
        establish an attorney-client relationship. For specific legal concerns,
        we encourage you to consult with a qualified legal professional.
      </p>

      <p className="text-gray-600 text-sm mt-6">Last updated: April 17, 2025</p>
    </section>
  );
};

export default Disclaimer;
