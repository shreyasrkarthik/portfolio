"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaGraduationCap, FaCode, FaUserGraduate, FaUniversity, FaChalkboardTeacher, FaArrowUp, FaServer, FaPodcast } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const timelineData = [
    { icon: <FaGraduationCap size={30} />, title: "Undergrad (2013-2017)", description: "Completed B.E. in Information Science at PESIT, Bangalore, India." },
    { icon: <FaUserGraduate size={30} />, title: "Internship at Inmobi (2015)", description: "Worked as a big data intern for building advertisement solutions based on geo location." },
    { icon: <FaUserGraduate size={30} />, title: "Internship at Quicken (2016)", description: "Worked as a software engineering intern for android team of quicken gaining hands-on experience in real world development." },
    { icon: <FaUserGraduate size={30} />, title: "Internship at Juniper Networks (2017)", description: "Contributed to the Cloud team on building telemetry agent as an intern." },
    { icon: <FaCode size={30} />, title: "First Job - Ittiam Systems (2017-2019)", description: "Worked as a Software Engineer focusing on building machine learning and backend solutions for Retail Analytics Platform." },
    { icon: <FaArrowUp size={30} />, title: "Vymo (2019-2021)", description: "Joined Vymo as a Software Engineer, specializing in building ML based backend services and solutions."},
    { icon: <FaUniversity size={30} />, title: "Grad Degree - Northeastern (2021-2023)", description: "Pursued an MS in Computer Science at Northeastern University, Boston." },
    { icon: <FaUserGraduate size={30} />, title: "Internship at PayPal (2022)", description: "Worked as a Software Engineering Intern in PayPal's building data pipeline for migrating application metric logs for over 100 applications." },
    { icon: <FaChalkboardTeacher size={30} />, title: "Teaching Assistant (2022)", description: "Served as a TA at Northeastern University, assisting students in Database and Mixed Reality." },
    { icon: <FaServer size={30} />, title: "PayPal - Senior Software Engineer (2023-Present)", description: "Joined PayPal as a Senior Software Engineer and built multiple scalable cloud-native microservices that are used by 1000s of micro-services in the company." },
    { icon: <FaPodcast size={30} />, title: "YouTube & Podcasts (2024)", description: "Started a YouTube channel and podcast discussing about varying interests." }
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
                            className={`p-4 rounded-full cursor-pointer transition-all duration-300 ${selectedIndex === index ? 'text-[#eef0ff] scale-110 animate-soft-glow' : 'text-[#c8cefa]'}`} 
                            onClick={() => handleClick(index)}
                        >
                            {item.icon}
                        </div>
                        <div className={`absolute left-16 bg-[#c8cefa] p-3 rounded-lg shadow-lg w-full max-w-3xl transition-all duration-500 ${selectedIndex === index ? 'opacity-100' : 'opacity-30 blur-sm'}`}>
                            <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                            <p className="text-sm text-gray-700">{item.description}</p>
                        </div>
                        {index < timelineData.length - 1 && (
                            <div className="h-10 w-1 bg-gray-500 border-dotted"></div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes soft-glow {
                    0% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 8px #eef0ff); }
                }
            `}</style>
        </div>
    );
};

export default AboutTimeline;
