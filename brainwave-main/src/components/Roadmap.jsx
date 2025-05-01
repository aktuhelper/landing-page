import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Roadmap = () => (
  <Section className="overflow-hidden py-6" id="roadmap">
    <div className="container md:pb-4">
      <Heading tag="Ready to get started" title="Our Team" />

      <div className="relative grid gap-4 md:grid-cols-2 md:gap-6 md:pb-[0.5rem] justify-center">
        {roadmap.map((item, index) => (
          <div
            key={item.id}
            className={`md:flex even:md:translate-y-[5rem] p-2 rounded-[0.75rem] max-w-md w-full ${
              item.colorful ? "bg-conic-gradient" : "bg-n-6"
            } ${index % 2 === 0 ? "md:ml-auto" : ""}`}
          >
            <div className="relative p-2 bg-n-8 rounded-[0.75rem] overflow-hidden">
              <div className="absolute top-0 left-0 max-w-full">
                <img
                  className="w-full opacity-10"
                  src={grid}
                  width={400}
                  height={400}
                  alt="Grid"
                />
              </div>
              <div className="relative z-10">
                <div className="mb-4">
                  <img
                    className="w-full h-64 object-cover rounded"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>

                <h4 className="text-base font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-n-4">{item.text}</p>

                {/* Dynamic Social Icons */}
                <div className="flex gap-3 mt-4">
                  {item.socials?.instagram && (
                    <a
                      href={item.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-pink-600 transition duration-300"
                    >
                      <FaInstagram className="text-lg md:text-xl text-white" />
                    </a>
                  )}
                  {item.socials?.linkedin && (
                    <a
                      href={item.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-blue-600 transition duration-300"
                    >
                      <FaLinkedin className="text-lg md:text-xl text-white" />
                    </a>
                  )}
                  {item.socials?.facebook && (
                    <a
                      href={item.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-blue-500 transition duration-300"
                    >
                      <FaFacebook className="text-lg md:text-xl text-white" />
                    </a>
                  )}
                  {item.socials?.github && (
                    <a
                      href={item.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-gray-600 transition duration-300"
                    >
                      <FaGithub className="text-lg md:text-xl text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
