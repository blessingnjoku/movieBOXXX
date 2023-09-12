import React from "react";
import { styled } from "styled-components";
import movieLogo from "../../Assets/movieLogo.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 20%;
  height: 100lh;
  width: 226px;
  height: 982px;
  border-radius: 0px 45px 45px 0px;
  padding: 30px 0;
  border: 1px solid #0000004d;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* background-color:red; */

  .IconBox {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #666666;
    text-decoration: none;

    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    margin-bottom: 25px;
    p {
      /* margin-left:20px; */
      font-size: 20px;
    }
  }
  .card{
    width:170px;
    height: 200px;
    border-radius:20px;
    background-color:#fcc6d3ae;
    padding:10px 15px;
    h3{
     color: #333333CC;
     font-size:15px;

    }
    p{
font-size:12px;
font-weight:500;
color: #666666;

    }
    button{
        width: 120px;
        height: 30px;
        border-radius:30px;
        border:none;
        background: #BE123C33;


    }

  }
`;
function SideBar() {
  return (
    <Wrapper>
      <Link to="/" style={{ marginBottom: "30px" }}>
        <img src={movieLogo} width={180} />
      </Link>
      <Link href="/" className="IconBox">
        <FeatherIcon icon="home" />
        <p>Home</p>
      </Link>
      <Link href="/movies" className="IconBox">
        <FeatherIcon icon="video" />
        <p>Movies</p>
      </Link>
      <Link href="/tvseries" className="IconBox">
        <FeatherIcon icon="tv" />
        <p>TV Series</p>
      </Link>
      <Link href="/" className="IconBox">
        <FeatherIcon icon="film" />
        <p>Up Coming</p>
      </Link>
      <div className="card">
        <h3>Play movie quizs and earn coins</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
          reprehenderit sapiente 
          
        </p>
        <button >Start playing</button>
      </div>
    </Wrapper>
  );
}

export default SideBar;
