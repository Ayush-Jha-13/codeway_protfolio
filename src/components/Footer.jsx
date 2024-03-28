import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-scroll";

const Footer = () => {
  const quick_links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com",
    },
    {
      id: 3,
      child: (
        <>
          <FaInstagram size={25} />
        </>
      ),
      href: "https://instagram.com",
    },
    {
      id: 4,
      child: (
        <>
          <FaTwitter size={25} />
        </>
      ),
      href: "https://twitter.com",
    },
  ];

  return (
    <>
      <div className="items-center w-full bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="flex justify-evenly items-start p-12-0--0 text-white mt-0 space-x-8">
          {/* First Column */}
          <div className="w-1/4 flex flex-col justify-start items-start space-y-6 px-8 py-8">
            <h2 className="mt-0">Ayush's Portfolio</h2>
            <p>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
              <br />
              Keep Rising 🚀. Connect with me over live chat!
            </p>
          </div>

          {/* Second Column */}
          <div className="w-1/5 flex flex-col justify-start items-start space-y-6 px-8 py-8">
            <h3 className="mt-0">Quick Links</h3>
            <ul className="flex flex-col space-y-2">
              {quick_links.map(({ id, link, icons }) => (
                <li
                  key={id}
                  className="cursor-pointer capitalize font-medium hover:scale-90 flex items-center space-x-2"
                >
                  <IoIosArrowDroprightCircle /> {/* Icon */}
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column */}
          <div className="w-1/4 flex flex-col justify-start items-start space-y-6 px-8 py-8">
            <h3 className="mt-0">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <AiOutlinePhone /> {/* Phone Icon */}
                <p>+91-7828514512</p>
              </div>
              <div className="flex items-center space-x-2">
                <AiOutlineMail /> {/* Email Icon */}
                <p>ayushjha.connect@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <AiOutlineHome /> {/* Address Icon */}
                <p>Indore, Madhya Pradesh, India-452016</p>
              </div>
            </div>
            <ul className="flex flex-row space-x-2">
              {links.map(({ id, child, href, style, download }) => (
                <li
                  key={id}
                  className="flex justify-between items-center px-2 py-1"
                >
                  <a
                    href={href}
                    className="text-white hover:scale-110"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="justify-center items-center text-center">
          <p className="py-4 text-center">
          © 2024 All rights reserved. Managed by Ayush Jha
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
