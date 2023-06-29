import axios from "axios";
import React, { useState, useEffect } from "react";
import {MdChevronRight,MdChevronLeft } from "react-icons/md";
import Movies from "./Movies";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovie(response.data.results);
    });
  }, [fetchURL]);
  const slideLeft = ()=>{
    let slider =document.getElementById('slider'+ rowID);
    slider.scrollLeft = slider.scrollLeft -500;
  };
  const slideRight = ()=>{
    let slider =document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft +500;
  };
  //console.log(movies);
  return (
    <>
      <h2 className=" text-white font-bold md:text-xl p-4">{title}</h2>
      <div className=" relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} size={40} className=" cursor-pointer bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 hidden group-hover:block"/>
        <div id={"slider" + rowID } className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative ">
          {movies.map((item, id) => (
            <Movies key={id} item={item}/>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className=" cursor-pointer bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 hidden group-hover:block"/>
      </div>
    </>
  );
};

export default Row;
