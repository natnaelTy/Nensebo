"use client"
import Link from "next/link";
import data from "./FAQ";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Image from "next/image";

function OrderingInfo() {
  const [selected, setSelected] = useState<number[]>([]);
  const [toggleArrow, setToggleArrow] = useState<boolean>(false);

  function handleToggle() {
    setToggleArrow(!toggleArrow);
  }

  function handleShowAnswer(getCurrentId: number) {
    let copySelected = [...selected];
    const findIndexOfCurrentId = copySelected.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copySelected.push(getCurrentId);
    else {
      copySelected.splice(findIndexOfCurrentId, 1);
    }
    setSelected(copySelected);
  }
  return (
    <>
      {/* common banner photo */}
      <div className="bannerContainer">
        <div className="nestedBannerContainer">
          <Link href={"/gallary"} className="hover:text-green-800">
            <h2>Gallary</h2>
          </Link>
          <h2>
            <RiArrowRightDoubleFill />
          </h2>
          <h2>FAQ</h2>
        </div>
      </div>

      <div className="relative">
        <h1 className="text-center text-2xl md:text-4xl p-2 mt-8 mb-8 font-bold max-w-xl m-auto">
          What's Available <span className="font-bold text-green-900">and</span>{" "}
          what you should know about
        </h1>
        <div className="lg:flex flex-cols items-start justify-between p-4">
          <div className="paragraph flex flex-col items-start justify-center gap-5">
            <div className="flex flex-col gap-6">
              {data && data.length
                ? data.map((dataItem, index) => (
                    <div
                      className={
                        "cursor-pointer bg-gray-50 hover:bg-gray-100 max-w-lg w-full p-3 rounded-sm"
                      }
                      onClick={() => handleShowAnswer(index)}
                      key={dataItem.id}
                    >
                      <div className="flex items-center justify-between p-2">
                        <h3 className="text-green-900 font-semibold">
                          {dataItem.question}
                        </h3>
                        <span
                          style={{ fontSize: "20px" }}
                          onClick={handleToggle}
                        >
                          {selected.indexOf(dataItem.id) !== -1 ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </span>
                      </div>
                      {selected.indexOf(dataItem.id) !== -1 && (
                        <div className="text-center p-3 text-sm">{dataItem.answer}</div>
                      )}
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="max-w-xl w-full relative flex flex-col p-2">
            <Image
              src="/images/tade-1.jpg"
              alt="on site"
              width={300}
              height={600}
              loading="lazy"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderingInfo;
