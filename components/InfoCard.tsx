import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: any) => {
  return (
    <div className="md:flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-lg"
          src={img}
          fill
          objectFit="cover"
          alt={"Airbnb search"}
        />
      </div>
      <div className="flex flex-col flex-grow pt-2 md:pl-5 md:pt-0">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right  font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
