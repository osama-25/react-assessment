import React from "react";
import { NavbarButton } from "./navbar";

const places = ["Dubai", "Abu Dhabi", "Ras Al Khaimah", "Al Ain"];

const cities = [
    { city: "Istanbul", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRiCjiMuHyH5raqgVAMRbLlsvhbz3F-vRqjoeVsLl90nMoNQwTytaomGjUfudBUtd2MtI9VLBNX1nuQ2S3W5ilNuO2DRBxUVEgdJX-XYQQ", price: 479, dates: "Jun 14 - Jun 22", times: "Nonstop 5 hr 5 min" },
    { city: "Amsterdam", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRiH-EGCc5jbyYbopiqf-g80xO0O5pxPnlJESLyIsY2uvo-gB84S94Q4C9kNWoKQ_eQ3OU-6evapBnb7TquB4zg3p3fQEGA3wpbxxhRdx0", price: 951, dates: "Mar 3 - Mar 11", times: "1 stop 12 hr 20 min" },
    { city: "London", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYH83YXny8hR4M7k5BMFq4vUT6LNtVABQzgs2pg-hcpSZq3oMBOQK3xh591AAJv2Qx4uvFZUGqOVt4kuoCUOklISunmndJleOoSef_7QE", price: 1007, dates: "Mar 13 - Mar 19", times: "1 stop 10 hr 40 min" },
    { city: "Singapore", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSp10Y3G-u5LPBzRWABhOUD7BGcBspacZc2r31UP6QmzLmyprerN-6BZ5wZkdsDXngRuIYCPQI8Ny3uYjbRegATm48AJfppuLgpsc0mhsE", dates: "Mar 10 - Mar 17" },
]

export default function Map() {
    return (
        <div className="flex flex-col gap-y-4 p-4">
            <span className="text-xl font-semibold">Find cheap flights from Dubai to anywhere</span>
            <div className="flex gap-x-2">
                {places.map((place, index) => (
                    <NavbarButton key={index} text={place} />
                ))}
            </div>
            <div className="w-full rounded-md flex justify-center items-center h-full">
                <iframe className="w-full md:h-96 rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15875359.029606817!2d32.79073807015129!3d28.78021794610424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1738840769296!5m2!1sen!2sae" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="flex flex-col md:flex-row gap-x-8 gap-y-2 w-full">
                {cities.map((city, index) => (
                    <CityCard key={index} {...city} />
                ))}
            </div>
        </div>
    )
}

const CityCard = ({ city, image, price, dates, times }) => {
    return (
        <div className="flex md:flex-col w-full gap-y-1 gap-x-3">
            <img src={image} className="rounded-xl w-2/5 md:w-full h-32 md:h-28 mb-2 object-cover" />
            <div className="flex flex-col w-3/5">
                <div className="flex justify-between items-center">
                    <span className="text-md font-semibold">{city}</span>
                    {price && <span className="text-md font-semibold">AED {price}</span>}
                </div>
                <span className="text-sm text-gray-500">{dates}</span>
                {times && <span className="text-sm text-gray-500">{times}</span>}
            </div>
        </div>
    )
}