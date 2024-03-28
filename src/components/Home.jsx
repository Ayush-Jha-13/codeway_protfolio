import React from "react";
// import HeroImage from '../assets/HeroImage.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  const id = "1";
  const download = "resume.pdf";

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Developer
          </h3>
          <span className="text-gray-500 py-4 max-w-md w-full">
            Hello🤝, I'm Ayush Jha
            <br /> <br />I have a passion for creating visually appealing and
            user-friendly responsive websites and web applications. My expertise
            in Frontend Technologies like JavaScript, React.JS, Tailwind, Vite,
            Bootstrap allows me to design and implement responsive and
            interactive user interfaces.
          </span>

          <div className="flex">
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>

            <div className="ml-4">
              {" "}
              {/* Adjust margin as needed */}
              <a
                key={id}
                href={download}
                download
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Download CV{" "}
                <BsDownload size={18} className="ml-3 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl w-2/3 mx-auto md:w-full' />
            </div> */}
      </div>
    </div>
  );
};

export default Home;
