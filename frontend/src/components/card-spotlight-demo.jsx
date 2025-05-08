import { CardSpotlight } from "@/animations/card-spotlight";

const coreValues = [
  {
    title: "Innovation-First",
    description:
      "We challenge the status quo, leveraging AI to make legal services faster, fairer, and more accessible.",
    icon: "https://cdn.prod.website-files.com/6716c4cb5dee34138060e719/67d994caf5a1624e9c88303b_noun-think-5247342%202.svg",
  },
  {
    title: "Integrity Always",
    description:
      "We act with unwavering ethics, transparency, and respect — always keeping justice and accountability at our core.",
    icon: "https://cdn.prod.website-files.com/6716c4cb5dee34138060e719/67d9962bcddbaa38d72afedd_noun-engineer-1204424%202.svg",
  },
  {
    title: "Empathy-Led",
    description:
      "We listen deeply, support inclusively, and design with empathy — because legal help should feel human.",
    icon: "https://cdn.prod.website-files.com/6716c4cb5dee34138060e719/67d9a95e2aada0c14b379720_noun-handshake-680244%202%20(1).svg",
  },
  {
    title: "Driven by Impact",
    description:
      "Every line of code, every case handled — it’s all in service of building a more equitable and efficient legal future.",
    icon: "https://cdn.prod.website-files.com/6716c4cb5dee34138060e719/67d9aa1d3abe65c79ad483a3_noun-trophy-6915046%202.svg",
  },
];

export function CardSpotlightDemo() {
  return (
    <div className="bg-white py-12 px-4">
      <h2 className="text-6xl font-extrabold text-center text-gray-900 mb-4">
        Our Core Values
      </h2>
      <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto mb-10">
        Our values are the foundation of everything we build, believe in, and
        strive to deliver — for our clients, our team, and society at large.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {coreValues.map((value, idx) => (
          <CardSpotlight
            key={idx}
            className="bg-black text-white rounded-lg p-6 flex flex-col items-start h-full w-full"
          >
            <img
              src={value.icon}
              alt={`${value.title} icon`}
              className="w-20 h-auto mb-4 z-10"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2 z-10">{value.title}</h3>
            <p className="text-sm text-white z-10">{value.description}</p>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
}
