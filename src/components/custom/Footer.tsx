import React from "react";
import { Link } from "react-router-dom";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { FaWrench } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-invofest_secondary mt-8">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="lg:flex lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src="/assets/nav-logo.png"
                  className="w-48"
                  alt="Invofest Logo"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Menu Navigasi
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="hover:text-invofest flex items-center gap-2"
                    >
                      <FaHome />
                      Beranda
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/seminar"
                      className="hover:text-invofest flex items-center gap-2"
                    >
                      <MdCoPresent />
                      Seminar
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/competition"
                      className="hover:text-invofest flex items-center gap-2"
                    >
                      <FaTrophy />
                      Competition
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/workshop"
                      className="hover:text-invofest flex items-center gap-2"
                    >
                      <FaWrench />
                      Workshop
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/talkshow"
                      className="hover:text-invofest flex items-center gap-2"
                    >
                      <FaMicrophoneAlt />
                      Talkshow
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Ikuti Kami
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://instagram.com/invofest_harber"
                      className="hover:text-invofest flex items-center gap-2"
                      target="_blank"
                    >
                      <RiInstagramFill className="text-xl" />
                      Instagram
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://www.youtube.com/@invofest2022"
                      className="hover:text-invofest flex items-center gap-2"
                      target="_blank"
                    >
                      <FaYoutube className="text-xl" />
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Alamat
                </h2>
                <ul className="w-full text-gray-500 font-medium">
                  <li>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1835440601208!2d109.10518467424245!3d-6.868597267201685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9e2805c1c1b%3A0xe3e61e1ae59106ff!2sPoliteknik%20Harapan%20Bersama%20Tegal!5e0!3m2!1sen!2sid!4v1724836082153!5m2!1sen!2sid"
                      width="250"
                      height="200"
                      style={{ border: "none" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-[320px] sm:w-full lg:w-auto"
                    ></iframe>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                INVOFEST
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://www.youtube.com/@invofest2022"
                className="text-gray-500 hover:text-gray-900"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="https://instagram.com/invofest_harber"
                className="text-gray-500 hover:text-gray-900 ms-5"
              >
                <RiInstagramFill className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
