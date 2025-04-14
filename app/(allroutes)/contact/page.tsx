"use client";
import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { PiOfficeChairLight } from "react-icons/pi";
import { PiPhoneIncomingThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { TfiTime } from "react-icons/tfi";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";

function Contact() {
  const [inputName, setInputName] = useState<string>("");
  const [inputNumber, setInputNumber] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputMessage, setInputMessage] = useState<string>("");

  const [result, setResult] = useState<string>("");
  console.log(result);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "1ce7ce38-c6e7-4761-ac9b-f55eed4e7706");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message was sent seccessfully",
        icon: "success",
      });
      setInputEmail("");
      setInputMessage("");
      setInputName("");
      setInputNumber("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      {/* common banner photo */}
      <div className="bannerContainer">
        <div className="nestedBannerContainer">
          <Link href={"/FAQ"} className="hover:text-green-800">
            <h2>FAQ</h2>
          </Link>
          <h2>
            <RiArrowRightDoubleFill />
          </h2>
          <h2>Contact</h2>
        </div>
      </div>

      <div>
        <div>
          <div className="flex flex-col gap-2 mt-20 relative">
            <h3 className="capitalize text-orange-500 font-medium text-center">
              Our Contact
            </h3>
            <h1 className="text-2xl lg:text-3xl text-green-800 capitalize font-semibold text-center">
              Get in touch
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-around gap-6 text-center mt-8 p-4">
            <div className="flex flex-col items-center justify-center bg-blue-50 p-7 rounded-md">
              <PiOfficeChairLight className="text-5xl bg-blue-200 p-2 text-blue-600 rounded-full" />
              <h2 className="text-xl font-semibold capitalize text-center">
                office address
              </h2>
              <p className="text-gray-700 text-sm">
                Sarbet, Addis Ababa, Ethiopia
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-yellow-50 p-7 rounded-md">
              <CiMail className="text-5xl bg-yellow-100 p-2 text-yellow-400 rounded-full" />
              <h2 className="text-xl font-medium text-center capitalize">
                email address
              </h2>
              <p className="text-gray-700 text-sm">sidamanensebo@gmail.com</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-green-50 p-7 rounded-md">
              <PiPhoneIncomingThin className="text-5xl bg-green-200 p-2 text-green-500 rounded-full" />
              <h2 className="text-xl font-medium capitalize text-center">
                Phone
              </h2>
              <p className="text-gray-600 text-sm">
                +251 911828573 & +251 913291960
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-pink-50 p-7 rounded-md">
              <TfiTime className="text-5xl bg-pink-200 text-pink-500 rounded-full p-2" />
              <h2 className="text-xl font-medium capitalize text-center">
                working hours
              </h2>
              <p className="text-gray-600 text-sm">
                Mon - Sat 8:30 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 flex items-center justify-center mb-10 mt-10">
          <div className="flex items-center justify-between p-4 flex-col shadow-md rounded-2xl mt-8 lg:flex-row w-full max-w-[600px] h-full">
            <div className="flex flex-col items-center justify-center gap-3 w-full">
              <h1 className="text-xl md:text-2xl lg:text-3xl text-green-800 font-bold text-center">
                Send us a message!{" "}
              </h1>
              <p className="text-xs md:text-sm mb-2 text-center max-w-xs text-gray-600 font-medium">
                Need a sample? Have a question? Or do you just wanna talk?
              </p>
              <form onSubmit={onSubmit}>
                <div className="flex items-center flex-col md:flex-row justify-around gap-4 w-full mt-4">
                  <div className="flex items-center w-[250px] gap-2 p-2 rounded-md text-sm bg-gray-100">
                    <CiUser className="text-base" />
                    <input
                      type="text"
                      placeholder="Full name"
                      onChange={(e) => setInputName(e.target.value)}
                      value={inputName}
                      name="name"
                      className="outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-md text-sm bg-gray-100 w-[250px]">
                    <PiPhoneIncomingThin className="text-base" />
                    <input
                      type="text"
                      placeholder="Phone "
                      onChange={(e) => setInputNumber(e.target.value)}
                      value={inputNumber}
                      className="outline-none"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 p-2 mt-3 rounded-md text-sm bg-gray-100">
                    <CiMail className="text-base" />
                    <input
                      type="text"
                      placeholder="E-mail"
                      onChange={(e) => setInputEmail(e.target.value)}
                      value={inputEmail}
                      className="outline-none"
                      required
                      name="email address"
                    />
                  </div>
                  <div className="flex h-32 items-start gap-2 p-2 rounded-md text-sm bg-gray-100">
                    <CiMail className="text-base" />
                    <textarea
                      name="message"
                      placeholder="Message"
                      onChange={(e) => setInputMessage(e.target.value)}
                      value={inputMessage}
                      required
                      className="resize-none h-32 w-full outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-900 hover:bg-green-800 px-4 py-3 text-white font-medium rounded-xl cursor-pointer flex items-center justify-center gap-1"
                  >
                    Send <CiLocationArrow1 className="text-xl" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.7965821438456!2d38.73454310590544!3d8.99466811431762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b870056fb0d55%3A0xdc78c20667ae5638!2sTade%20coffee%20export!5e1!3m2!1sen!2set!4v1744445036071!5m2!1sen!2set"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
