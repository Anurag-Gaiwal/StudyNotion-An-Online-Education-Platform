import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send"; // Add this import
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import {
  FaFacebook,
  FaGoogle,
  FaYoutube,
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = [
  { name: "Forums", link: "forums" },
  { name: "Chapters", link: "chapters" },
  { name: "Events", link: "events" },
  {
    name: "Contribute",
    link: "https://github.com/Muskansahuincredible/StudyNotion-An-Online-Education-Platform",
    external: true,
  },
];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
              <img src={Logo} alt="" className="object-contain" />
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => (
                  <div
                    key={i}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={`/${ele.toLowerCase()}`}>{ele}</Link>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 text-lg">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300 hover:opacity-75 hover:bg-white"
                >
                  <FaFacebook className="facebook" />
                </a>
                <a
                  href=" https://projects.100xdevs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300 hover:opacity-75 hover:bg-white"
                >
                  <FaGoogle className="" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300 hover:opacity-75 hover:bg-white"
                >
                  <FaXTwitter className="twitter" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300 hover:opacity-75 hover:bg-white"
                >
                  <FaYoutube className="youtube" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300 hover:opacity-75 hover:bg-white"
                >
                  <FaLinkedin className="linkedin" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300 hover:opacity-75 hover:bg-white "
                >
                  <FaInstagram className="instagram" />
                </a>
              </div>
              <div className="container" style={{ display: "block" }}>
                <h4 style={{ marginLeft: "-7rem", marginBottom: "0.5rem" }}>
                  Email Us
                </h4>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "30rem",
                    marginBottom: "28px",
                  }}
                >
                  <input
                    type="text"
                    id="message-input"
                    placeholder="Type your message here"
                    style={{
                      padding: "3px",
                      paddingLeft: "7px",
                      paddingRight: "2px",
                      marginLeft: "-30rem",
                      borderRadius: "5px",
                      width: "10rem",
                      fontSize: "0.8rem",
                      borderColor: "yellow",
                      borderWidth: "3px",
                    }}
                  />
                  <a
                    href="mailto:abc@gmail.com"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <SendIcon
                      style={{
                        fontSize: "26px",
                        color: "yellow",
                        width: "30px",
                        padding: "3px",
                        cursor: "pointer",
                        marginBottom: "-5px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Resources
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={`/${ele.split(" ").join("-").toLowerCase()}`}>
                      {ele}
                    </Link>
                  </div>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to="/help-center">Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Plans
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={`/${ele.split(" ").join("-").toLowerCase()}`}>
                      {ele}
                    </Link>
                  </div>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Community
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    {ele.external ? (
                      <a
                        href={ele.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {ele.name}
                      </a>
                    ) : (
                      <Link to={ele.link}>{ele.name}</Link>
                    )}
                  </div>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Legal
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to="/termsandconditions">Terms and Conditions</Link>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((ele, i) => (
              <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                <h1 className="text-richblack-50 font-semibold text-[16px]">
                  {ele.title}
                </h1>
                <div className="flex flex-col gap-2 mt-2">
                  {ele.links.map((link, index) => (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={link.link}>{link.title}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-14 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => (
              <div
                key={i}
                className={`${
                  BottomFooter.length - 1 === i
                    ? ""
                    : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                } px-3`}
              >
                <Link to={`/${ele.split(" ").join("-").toLocaleLowerCase()}`}>
                  {ele}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            Made with ❤️ © {new Date().getFullYear()} Studynotion
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
