import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  Database,
  Lock,
  CheckCircle,
  Heart,
  Mail,
  ArrowRight,
} from "lucide-react";

// FloatingShape component for animated background icons
const FloatingShape = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
    animate={{
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: [0, -10, 0],
    }}
    transition={{
      duration: 0.8,
      delay,
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// FeatureCard for each policy section
const FeatureCard = ({ icon, title, description, items, delay, gradient }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className={`absolute inset-0 ${gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
      />
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`inline-flex p-4 rounded-2xl ${gradient} shadow-lg mb-6`}
        >
          {React.cloneElement(icon, { className: "w-8 h-8 text-white" })}
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + index * 0.1 }}
              className="flex items-center gap-3 text-gray-700"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TrustBadge = ({ icon, title, subtitle, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
  >
    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
      {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  </motion.div>
);

const PrivacyPolicy = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const trustBadges = [
    {
      icon: <Shield />,
      title: "Your Privacy, Our Priority",
      subtitle: "We uphold your trust with the utmost care.",
    },
    {
      icon: <Lock />,
      title: "End-to-End Encryption",
      subtitle: "All user data is encrypted.",
    },
    {
      icon: <CheckCircle />,
      title: "No Sellouts",
      subtitle: "We never sell or misuse your data.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-96 right-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Floating Shapes */}
      <FloatingShape
        className="absolute top-32 right-20 text-blue-300"
        delay={0.5}
      >
        <Shield className="w-16 h-16" />
      </FloatingShape>
      <FloatingShape
        className="absolute top-80 left-16 text-purple-300"
        delay={1}
      >
        <Lock className="w-12 h-12" />
      </FloatingShape>
      <FloatingShape
        className="absolute bottom-40 right-32 text-green-300"
        delay={1.5}
      >
        <Heart className="w-14 h-14" />
      </FloatingShape>

      <div className="relative z-10 px-6 md:px-12 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-8 py-4 rounded-full shadow-lg mb-8"
          >
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="font-semibold text-blue-700 text-lg">
              Privacy Policy
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-8"
          >
            Your Privacy,
            <br />
            <span className="text-4xl md:text-6xl">Our Sacred Promise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            At Agility AI, your trust is foundational to our innovation. We
            believe that privacy isn’t just a right—it’s a responsibility we
            uphold with the utmost care. We don’t just protect data; we protect
            dignity.
          </motion.p>
        </motion.div>

        {/* Trust Badges */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => (
              <TrustBadge key={index} {...badge} delay={index * 0.2} />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              icon={<Shield />}
              title="What We Collect"
              description="Only the essentials. When you interact with our platform—whether as a legal professional, an individual filing a case, or a curious visitor—we may collect basic identifiers (like name, email), interaction history, and system usage patterns. We do not collect sensitive legal information without your explicit consent."
              items={[
                "Basic identifiers (name, email)",
                "Interaction history",
                "System usage patterns",
                "No sensitive legal information without explicit consent",
              ]}
              delay={0.2}
              gradient="bg-gradient-to-r from-blue-500 to-blue-600"
            />

            <FeatureCard
              icon={<Database />}
              title="How We Use It"
              description="We use your data solely to improve our service delivery—streamlining your legal processes, tailoring content, and innovating responsibly. Your data helps our AI learn with intention, not intrusion."
              items={[
                "Improve service delivery",
                "Streamline legal processes",
                "Tailor content",
                "Innovate responsibly",
              ]}
              delay={0.4}
              gradient="bg-gradient-to-r from-purple-500 to-purple-600"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              icon={<Lock />}
              title="How We Store It"
              description="All user data is encrypted end-to-end. We follow a principle of purpose-limited retention: we don’t keep your data longer than we need to."
              items={[
                "End-to-end encryption",
                "Purpose-limited retention",
                "No unnecessary storage",
              ]}
              delay={0.6}
              gradient="bg-gradient-to-r from-green-500 to-green-600"
            />

            <FeatureCard
              icon={<CheckCircle />}
              title="No Secrets. No Sellouts."
              description="We don’t sell your data. We don’t share it unless legally mandated. And we never use it to market third-party services without your clear consent."
              items={[
                "Never sell your data",
                "No sharing unless legally mandated",
                "No third-party marketing without clear consent",
              ]}
              delay={0.8}
              gradient="bg-gradient-to-r from-red-500 to-red-600"
            />
          </div>
        </div>

        {/* Contact & Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mt-20"
        >
          <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-12 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Questions About Your Privacy?
            </h3>

            <p className="text-gray-600 mb-8 text-lg">
              Our dedicated privacy team is here to help. Reach out anytime for
              clarifications, requests, or just to chat about how we protect
              your data.
            </p>

            <motion.a
              href="mailto:service.excellence@lyfshilpacademy.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="w-5 h-5" />
              service@agilityai.in
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <p className="text-gray-600 text-sm text-right mt-8">
              Last updated: April 17, 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
