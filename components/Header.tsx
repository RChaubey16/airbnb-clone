import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
// React Date range default css imports
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = ({ placeholder = "Start your search" }) => {
  const [searchInput, setSearchInput] = useState(``);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
  const router = useRouter();
  // Initial date range for the date library.
  const selectionRange = {
    startDate,
    endDate,
    key: `selection`,
  };

  const handleSelect = (ranges: any): void => {
    // ranges data comes from the react date range library itself.
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const searchRedirect = () => {
    router.push({
      pathname: `/search`,
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left section */}
      <div
        onClick={() => router.push(`/`)}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        {/* Image component by next optimises the image and converts into a webp format which is alot faster to load as compare to the jpeg or png format. */}
        <Image
          src="https://links.papareact.com/qd3"
          alt="Airbnb logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle section */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder}
          className="hidden md:flex flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2 cursor-pointer " />
      </div>

      {/* right section */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* Calendar */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-8">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()} // Minimum or start date should be today.
            rangeColors={[`#FD5B61`]}
            onChange={(ranges: RangeKeyDict): void => handleSelect(ranges)}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(Number(e.target.value))}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput(``)}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={searchRedirect}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
