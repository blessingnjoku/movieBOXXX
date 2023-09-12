import React from "react";
import { styled } from "styled-components";
import movieBox from "../Assets/Images/movieBox.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { search } from "./Icons";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  width: 80%;
  padding: 2% 9rem;
  /* background-color: red; */
  position:absolute;

  z-index: 1000;
 
  img {
    width: 150px;
    height: 100;
    object-fit: cover;
  }
  .searchBox {
    display: flex;
    border-radius: 10px;
    align-items: center;
    border: 2px solid #d1d5db;
    padding-right: 20px;
    min-width: 500px;
    height: 32px;
    input {
      width: 95%;
      height: 100%;
      background-color: transparent;
      border: none;
      padding-left: 10px;
    }
    input::placeholder {
      color: #ffffff;
    }
    input:focus {
      border: transparent;
      outline: none;
    }
  }
  .sign {
    display: flex;
    align-items: center;
    .circle{
        width:30px;
        height: 30px;
        border-radius:50%;
        background: #BE123C;
        padding:5px;
        box-sizing:border-box;
        margin-left:25px;


    }
  }

`;

function Nav() {
  return (
    <Navbar>
      <img src={movieBox} />
      <div className="searchBox">
        <input placeholder="what will you like to watch?" />
        <FeatherIcon icon="search" color="white" size={15} />
      </div>

      <div className="sign">
        <span style={{color:"#fff"}}>Sign in</span>
        <span className="circle">
        <FeatherIcon icon="menu" color="#ffff" size={20}/>
            </span>
      </div>
    </Navbar>
  );
}

export default Nav;
