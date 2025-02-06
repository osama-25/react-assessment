import React from "react";
import Flights from "./flights";
import Map from "./map";

export default function Search() {
    return (
        <div className="md:px-28n lg:px-36 xl:px-44 flex flex-col">
            <Flights />
            <Map />
        </div>
    )
}

