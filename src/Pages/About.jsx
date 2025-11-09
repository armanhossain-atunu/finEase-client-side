import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const About = () => {


  const teamMembers = [
    {
      name: "Arman Hossain Atunu",
      role: "Full Stack Developer",
      expertise: "React.js, Node.js, MongoDB, Tailwind CSS",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    },
    {
      name: "Afsana Rahman",
      role: "UI/UX Designer",
      expertise: "Figma, Frontend Design, Branding",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464",
    },
    {
      name: "Rafiul Hasan",
      role: "Backend Engineer",
      expertise: "Express.js, REST API, Database Architecture",
      image:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464",
    },
    {
      name: "Nusrat Jahan",
      role: "Project Manager",
      expertise: "Team Management, Agile Workflow, Product Strategy",
      image:
        "https://images.unsplash.com/photo-1758922584983-82ffd5720c6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=431",
    },
  ];
  return (
    <div>
      <div
        className="hero mt-16"
        style={{
          backgroundImage:
            "url(https://ff.unair.ac.id/npd3-rg/assets/img/hero-img.svg)",
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <h1 className="mb-5 text-5xl font-bold pt-15">About</h1>
            <p className="font-medium text-lg mb-5 max-w-lg">
              FinEase is your personal finance management companion — built to
              make money management simple, smart, and stress-free. We help you
              track your income, control expenses, and reach your savings goals
              with ease and clarity.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-11/12 mx-auto">
        <section>
          <div className="flex flex-col items-center justify-center py-8 px-4 mx-auto `max-w-screen-xl` lg:py-16">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Why Choose <span className="text-[#875DF8]">FinEase</span>?
            </h2>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              FinEase is a user-friendly platform that empowers you to manage
              your finances effectively. With a simple and intuitive interface,
              you can easily track your income, expenses, and savings goals. Our
              cutting-edge technology ensures accuracy and security, so you can
              focus on what matters most.
            </p>
          </div>
        </section>
        <section>
          <div className="flex gap-8 items-center py-8 px-4 mx-auto `max-w-screen-xl` lg:py-16">
            <div className="w-1/3  py-8 shadow-2xl">
              <img
                src="https://advanced-technology.eu/images/2023/10/18/vission.png"
                alt=""
              />
            </div>
            <div className="flex flex-col w-2/3">
              <h2 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Our <span className="text-[#875DF8]">Vision</span>
              </h2>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                Our vision is to empower individuals and businesses with a
                user-friendly platform that empowers you to manage your finances
                effectively. With a simple and intuitive interface, you can
                easily track your income, expenses, and savings goals. Our
                cutting-edge technology ensures accuracy and security, so you
                can focus on what matters most.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-row-reverse gap-8 items-center py-8 px-4 mx-auto `max-w-screen-xl` lg:py-16">
            <div className="w-1/3  py-8 shadow-2xl">
              <img
                src="https://aircombd.com/wp-content/uploads/2023/10/mission-1.png"
                alt=""
              />
            </div>
            <div className="flex flex-col w-2/3">
              <h2 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Our <span className="text-[#875DF8]">Mission</span>
              </h2>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                Our mission is to provide a secure and user-friendly platform
                that empowers individuals and businesses to manage their
                finances effectively. With a simple and intuitive interface, you
                can easily track your income, expenses, and savings goals. Our
                cutting-edge technology ensures accuracy and security, so you
                can focus on what matters most.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center justify-center 6">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Our <span className="text-[#875DF8]">Team</span>
            </h2>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Meet the creative minds behind FinEase — a passionate team of developers, designers, and innovators dedicated to making personal finance simple, smart, and secure for everyone.</p>
            <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
               
              {teamMembers.map((member, index) => (
                
                <div
                  key={index}
                  className="card group relative bg-white mb-5 dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition-all duration-300"
                >
                  <figure className=" pt-5">
                    <img
                      src={member.image}
                      alt="Shoes"
                      className="rounded-xl h-90"
                    />
                  </figure>
                  <div className="card-body  items-center text-center">
                    <h2 className="card-title font-bold">{member.name}</h2>
                    <h2 className="text-[18px]">{member.role}</h2>
                    <p>{member.expertise}</p>
                    <div className="">
                      <button className=" ">
                        <div className="absolute inset-0 flex items-end justify-center text-2xl  pb-10  gap-4  transition-all duration-500 opacity-0 group-hover:opacity-100">
                          <Link to="https://linkedin.com/login" target="_blank">
                            <FaLinkedin />
                          </Link>
                          <Link to="https://github.com/login" target="_blank">
                            <FaGithubSquare />
                          </Link>
                          <Link to="https://x.com/login" target="_blank">
                            <FaSquareXTwitter />
                          </Link>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
