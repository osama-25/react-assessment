import Image from "next/image";
import Navbar from "./navbar";
import Search from "./search";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative flex justify-center items-start mb-6 md:mb-12 lg:px-16">
        <img
          src="https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg"
          className="w-full mt-12"
        />
        <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl lg:text-6xl">
          Flights
        </h1>
      </div>
      <Search />
    </div>
  );
}
