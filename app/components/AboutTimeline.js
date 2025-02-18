"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaGraduationCap, FaCode, FaUserGraduate, FaUniversity, FaChalkboardTeacher, FaArrowUp, FaServer, FaPodcast } from "react-icons/fa";

const timelineData = [
    { icon: <FaGraduationCap size={30} />, title: "Undergrad (2013-2017)", description: "Completed B.E. in Computer Science at PESIT, Bangalore, India." },
    { icon: <FaUserGraduate size={30} />, title: "Internship at Quicken (2016)", description: "Worked as a software engineering intern, gaining hands-on experience in development." },
    { icon: <FaUserGraduate size={30} />, title: "Internship at Juniper Networks (2017)", description: "Contributed to networking solutions as an intern." },
    { icon: <FaCode size={30} />, title: "First Job - Ittiam Systems (2017-2019)", description: "Worked as a Software Engineer focusing on multimedia solutions." },
    { icon: <FaArrowUp size={30} />, title: "Vymo (2019-2021)", description: "Joined Vymo as a Software Engineer, specializing in backend services." },
    { icon: <FaUniversity size={30} />, title: "Grad Degree - Northeastern (2021-2023)", description: "Pursued an MS in Software Engineering at Northeastern University, Boston." },
    { icon: <FaUserGraduate size={30} />, title: "Internship at PayPal (2022)", description: "Worked as a Software Engineering Intern in PayPal's Core Payments team." },
    { icon: <FaChalkboardTeacher size={30} />, title: "Teaching Assistant (2022)", description: "Served as a TA at Northeastern University, assisting students in coursework." },
    { icon: <FaServer size={30} />, title: "PayPal - Senior Software Engineer (2023-Present)", description: "Joined PayPal as a Senior Software Engineer in the Developer Productivity team." },
    { icon: <FaPodcast size={30} />, title: "YouTube & Podcasts (2024)", description: "Started a YouTube channel and podcast discussing tech & career growth." }
];

const AboutTimeline = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const itemRefs = useRef([]);

    useEffect(() => {
        if (isUserInteracting) return; // Stop animation when user interacts

        const interval = setInterval(() => {
            setSelectedIndex((prevIndex) => {
                if (prevIndex + 1 === timelineData.length) {
                    clearInterval(interval);
                    return prevIndex;
                }
                return prevIndex + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [isUserInteracting]);

    useEffect(() => {
        if (itemRefs.current[selectedIndex]) {
            itemRefs.current[selectedIndex].scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [selectedIndex]);

    const handleClick = (index) => {
        setSelectedIndex(index);
        setIsUserInteracting(true); // Stops animation
    };

    return (
        <div className="flex flex-col mt-10 bg-[#121212] p-6 rounded-lg shadow-lg bg-gradient-to-r from-white-100 via-white-800 to-white-100">
            <h1 className="text-6xl font-bold mb-6 text-[#c8cefa]">Shreyas' Timeline</h1>
            <div className="relative flex flex-col ml-[30%]">
                {timelineData.map((item, index) => (
                    <div key={index} ref={(el) => (itemRefs.current[index] = el)} className="relative flex flex-col mb-6">
                        <div 
                            className={`p-4 rounded-full cursor-pointer transition-all duration-300 ${selectedIndex === index ? 'text-[#eef0ff] scale-110' : 'text-[#c8cefa]'}`} 
                            onClick={() => handleClick(index)}
                        >
                            {item.icon}
                        </div>
                        {selectedIndex === index && (
                            <div className="absolute left-16 bg-[#c8cefa] p-3 rounded-lg shadow-lg w-full max-w-3xl">
                                <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                        )}
                        {index < timelineData.length - 1 && (
                            <div className="h-10 w-1 bg-gray-500 border-dotted"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutTimeline;
