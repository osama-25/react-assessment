'use client';
import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import DatePicker, { DateObject } from "react-multi-date-picker";

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    }
};

export default function Flights() {
    const [openDropdown, setOpenDropdown] = useState(null); // Track the open dropdown by index or identifier
    const [exchange, setExchange] = useState(false);
    const [openDropdownMenu, setOpenDropdownMenu] = useState(null);
    const [depValue, setDepValue] = useState();
    const [retValue, setRetValue] = useState();
    const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
    const [depCity, setDepCity] = useState('Dubai');
    const [retCity, setRetCity] = useState('Dubai');
    const [showReturn, setShowReturn] = useState(true);

    const handleWay = (way) => {
        if (way === "One way") {
            setShowReturn(false);
        } else {
            setShowReturn(true);
        }
    }

    const handleToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index); // Toggle the dropdown open/close
    };

    const handleExchange = () => {
        setExchange(!exchange);
    }

    const handleInputToggle = (index) => {
        setOpenDropdownMenu(openDropdownMenu === index ? null : index);
        console.log(openDropdownMenu);
    }

    return (
        <div className="flex justify-center items-center w-full md:p-4">
            <div className="relative w-full p-4 pb-12 mb-8 gap-y-2 flex flex-col rounded-b-md md:rounded-md shadow-[0px_5px_6px_rgba(0,0,0,0.25)] md:shadow-[0px_4px_6px_rgba(0,0,0,0.3),0px_0px_3px_rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-x-2">
                    <Dropdown
                        changeValue={handleWay}
                        Icon={<svg height="20" viewBox="0 0 24 24" width="20" focusable="false"><g><rect fill="none" height="24" width="24" x="0"></rect></g><g><g><polygon points="8.41,12.41 7,11 2,16 7,21 8.41,19.59 5.83,17 21,17 21,15 5.83,15"></polygon><polygon points="15.59,11.59 17,13 22,8 17,3 15.59,4.41 18.17,7 3,7 3,9 18.17,9"></polygon></g></g></svg>}
                        options={["Round trip", "One way", "Multi-city"]}
                        defaultOption={"Round trip"}
                        isOpen={openDropdown === 0}
                        onToggle={() => handleToggle(0)}
                    />
                    <Dropdown
                        Icon={<svg width="20" height="20" viewBox="0 0 24 24" focusable="false"><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></svg>}
                        options={["1", "2", "3", "4", "5", "6"]}
                        defaultOption={"1"}
                        isOpen={openDropdown === 1}
                        onToggle={() => handleToggle(1)}
                        check={false}
                    />
                    <Dropdown
                        options={["Economy", "Business", "First Class"]}
                        defaultOption={"Economy"}
                        isOpen={openDropdown === 2}
                        onToggle={() => handleToggle(2)}
                    />
                    
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="relative w-full md:w-auto flex items-center gap-x-2">
                        <div className="relative flex items-center gap-2 fill-gray-500 hover:border-black border rounded-md w-full md:w-52 lg:w-60 xl:w-72">
                            <svg className="ml-4" width="16" height="16" viewBox="0 0 24 24" focusable="false"><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path></svg>
                            <input value={depCity} readOnly onClick={() => handleInputToggle(0)} type="text" className="ml-4 text-gray-700 w-full h-14 border-none bg-transparent focus:outline-none" />
                            {openDropdownMenu === 0 && (
                                <DropdownMenu
                                    onToggle={() => handleInputToggle(0)}
                                    city={depCity}
                                    setCity={setDepCity}
                                    icon={<svg width="16" height="16" viewBox="0 0 24 24" focusable="false"><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path></svg>}
                                />
                            )}
                        </div>
                        {/* Circle in Between */}
                        <div onClick={handleExchange} className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 border fill-gray-600 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer bg-white">
                            <svg className={`${exchange ? 'rotate-180' : 'rotate-[-180]'} transform transition-transform duration-300`} width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M17 4l-1.41 1.41L18.17 8H11v2h7.17l-2.58 2.59L17 14l5-5-5-5zM7 20l1.41-1.41L5.83 16H13v-2H5.83l2.58-2.59L7 10l-5 5 5 5z"></path></svg>
                        </div>
                        <div className="relative flex items-center gap-2 pl-5 fill-gray-500 border hover:border-black rounded-md w-full md:w-52 lg:w-60 xl:w-72">
                            <svg width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
                            <input value={retCity} readOnly onClick={() => handleInputToggle(1)} type="text" className="text-gray-700 w-full h-14 border-none bg-transparent focus:outline-none" />
                            {openDropdownMenu === 1 && (
                                <DropdownMenu
                                    city={retCity}
                                    setCity={setRetCity}
                                    onToggle={() => handleInputToggle(1)}
                                    icon={<svg width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>}
                                />
                            )}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-around items-center border rounded-md">
                        <DatePicker
                            containerStyle={{ width: "100%" }}
                            weekDays={weekDays}
                            arrow={false}
                            numberOfMonths={2}
                            disableMonthPicker
                            disableYearPicker
                            value={depValue}
                            format="ddd, MMM D"
                            minDate={new DateObject().add(0, 'days')}
                            onChange={setDepValue}
                            render={(value, openCalendar) => {
                                return (
                                    <button onClick={openCalendar} className="flex items-center gap-2 gap-x-4 p-4 fill-gray-500 w-full hover:border-gray-800 border border-transparent rounded-md">
                                        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path><path d="M8 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></svg>
                                        <span className="text-gray-700">{(value) || 'Departure'}</span>
                                    </button>
                                )
                            }}
                        />

                        {showReturn && (<>
                        <span className="bg-gray-300 h-8 w-[1]"></span>
                        <DatePicker
                            weekDays={weekDays}
                            containerStyle={{ width: "100%" }}
                            arrow={false}
                            numberOfMonths={2}
                            disableMonthPicker
                            disableYearPicker
                            value={retValue}
                            minDate={depValue}
                            format="ddd, MMM D"
                            onChange={setRetValue}
                            render={(value, openCalendar) => {
                                return (
                                    <button onClick={openCalendar} className="w-full flex hover:border-gray-800 border border-transparent p-4 rounded-md">
                                        <span className="text-gray-700">{(value) || 'Return'}</span>
                                    </button>
                                )
                            }}
                        /></>)}
                    </div>
                </div>
                <div className="absolute -bottom-6 left-0 w-full flex justify-center items-center">
                    <div className="flex justify-center items-center gap-x-2 p-2 px-3 bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-full w-[100] h-10">
                        <svg className="fill-white" width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path></svg>
                        <span className="text-white text-sm font-semibold">Explore</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Dropdown = ({ Icon, options, defaultOption, isOpen, onToggle, check = true, changeValue }) => {
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const [counts, setCounts] = useState({
        adults: 1,
        children: 0,
        infantsSeat: 0,
        infantsLap: 0,
    });
    const [totalPassengers, setTotalPassengers] = useState(1);

    const handleIncrement = (type) => {
        if (totalPassengers === 9) return;
        setCounts({ ...counts, [type]: counts[type] + 1 });
        setTotalPassengers(totalPassengers + 1);
    };

    const handleDecrement = (type) => {
        if (type === "adults" && counts[type] === 1) return;
        if (counts[type] > 0) {
            setCounts({ ...counts, [type]: counts[type] - 1 });
        }
        setTotalPassengers(totalPassengers - 1);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onToggle();
        if(changeValue){
            changeValue(option);
        }
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest(".relative")) onToggle();
        };

        if (isOpen) document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [isOpen, onToggle]);

    return (
        <div className="relative inline-block text-left">
            <button
                className="inline-flex w-full justify-between gap-x-2 items-center p-2 text-sm focus:border-b-2 focus:rounded-b-none focus:border-blue-600 font-medium text-gray-600 hover:text-black focus:text-blue-600 bg-white rounded-md hover:bg-gray-50 focus:bg-blue-50 focus:outline-none"
                onClick={() => onToggle()}
            >
                <span className="flex items-center space-x-2 fill-gray-500 text-gray-500 font-semibold">
                    {Icon}
                    <span>{check ? selectedOption : totalPassengers}</span>
                </span>
                <svg className={`w-2 h-2 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} viewBox="7 10 10 5" focusable="false" aria-hidden="true"><polygon stroke="none" fill="currentColor" fillRule="evenodd" points="7 10 12 15 17 10"></polygon></svg>
            </button>

            {(isOpen && check) && (
                <div className="absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-md rounded-t-none shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div>
                        {options.map((option) => (
                            <button
                                key={option}
                                className={`flex w-full items-center px-4 py-2 text-sm ${selectedOption === option
                                    ? "bg-blue-100 text-blue-600"
                                    : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                onClick={() => {
                                    handleOptionClick(option);
                                }}
                            >
                                {selectedOption === option && <FaCheck className="w-4 h-4 mr-2" />}
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {(isOpen && !check) && (
                <div className="absolute z-10 p-4 w-64 bg-white  rounded-md rounded-t-none shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {[
                        { label: "Adults", type: "adults" },
                        { label: "Children", type: "children", note: "Aged 2-11" },
                        { label: "Infants", type: "infantsSeat", note: "In seat" },
                        { label: "Infants", type: "infantsLap", note: "On lap" },
                    ].map((item) => (
                        <div key={item.type} className="flex items-center justify-between mb-4">
                            <div>
                                <p className="font-medium">{item.label}</p>
                                {item.note && <p className="text-sm text-gray-500">{item.note}</p>}
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleDecrement(item.type)}
                                    className="w-8 h-8 bg-gray-200 fill-gray-500 rounded-md flex items-center justify-center focus:outline-none disabled:opacity-50"
                                    disabled={counts[item.type] === 0}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" focusable="false"><path d="M20 13H4v-2h16v2z"></path></svg>
                                </button>
                                <span className="text-lg font-medium w-6 text-center text-gray-500">
                                    {counts[item.type]}
                                </span>
                                <button
                                    onClick={() => handleIncrement(item.type)}
                                    className="w-8 h-8 bg-blue-50 fill-blue-600 hover:fill-blue-700 rounded-md flex justify-center items-center focus:outline-none hover:bg-blue-100"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" focusable="false"><path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const DropdownMenu = ({ onToggle, icon, city, setCity }) => {
    const inputRef = useRef(null);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Focus the input when the dropdown opens
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const searchCity = async (e) => {
        const value = e.target.value;
        setCity(value);
        try {
            const response = await fetch(`https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${value}&locale=en-US`, options);
            const result = await response.json();
            console.log(result.data);
            setSearchResults(result.data || []);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCityClick = (city) => {
        setCity(city);
        onToggle();
    }

    return (
        <div className="absolute z-10 w-[130%] h-[110%] -left-[2] bg-white rounded-md shadow-md divide-y">
            <div onClick={onToggle} className="inset-0 fixed -z-10"></div>
            <div className="relative flex items-center gap-2 border-none fill-gray-500 rounded-md w-72">
                <div className="ml-4">
                    {icon}
                </div>
                <input
                    value={city}
                    ref={inputRef}
                    onChange={searchCity}
                    onFocus={searchCity}
                    type="text"
                    className="ml-4 text-gray-800 w-full h-14 bg-transparent focus:outline-none"
                />
            </div>
            <div>
                {searchResults.map((result) => (
                    <DropdownOption
                        setCity={handleCityClick}
                        key={result.skyId}
                        city={result.presentation.title}
                        subtitle={result.presentation.subtitle}
                        airports={[result.presentation.suggestionTitle]}
                    />
                ))}
            </div>
        </div>
    )
}

const DropdownOption = ({ city, airports, subtitle, setCity }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="w-full bg-white flex relative items-center py-1">
                <div onClick={() => setCity(city)} className="pl-[13] min-h-12 w-full flex items-center hover:bg-gray-100">
                    <div className="">
                        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
                    </div>
                    <div className="flex flex-col ml-[18]">
                        <span className="w-full">{city}</span>
                        <span className="text-sm text-gray-500">{subtitle}</span>
                    </div>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className="absolute right-0 cursor-pointer hover:bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center justify-self-end">
                    <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17"></path></svg>
                </div>
            </div>
            {isOpen && (
                <div className="w-full bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div>
                        {airports.map((airport) => (
                            <div
                                key={airport}
                                onClick={() => setCity(airport)}
                                className="flex w-full items-center pl-12 py-2 gap-x-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <div>
                                    <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><g><path d="M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></g></svg>
                                </div>
                                <span>{airport}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
