import React from "react";
import Nav from "../Component/Nav";
import { styled } from "styled-components";
import Slider from "../Component/Slider";
import MovieCard from "../Component/MovieCard";
import FeatureMovies from "../Component/FeatureMovies";
import Footer from "../Component/Footer";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import MovieDisplays from "../Component/MovieDisplays";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Wrapper = styled.div`
  /* position:absolute;
top:0; */
  max-width: 100%;
`;

function Home() {
  return (
    <Wrapper>
      

      <Slider />
      <div style={{ marginTop: "50px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1% 9rem",
          }}
        >
          <h1 style={{ color: "#000000", fontSize: "36px" }}>Fetured Movie</h1>
          <a
            href=""
            style={{
              color: "#BE123C",
              fontSize: "18px",
              textDecoration: "none",
              display: "flex",
              textAlign: "center",
            }}
          >
            <span>See more </span>
            <FeatherIcon icon="arrow-right" />
          </a>
        </div>
   
        <FeatureMovies />
 
      
      </div>
      <MovieDisplays/>
      <Footer/> 
    
    
    </Wrapper>
  );
}

export default Home;
