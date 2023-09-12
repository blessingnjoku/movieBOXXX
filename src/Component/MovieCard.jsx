import React from "react";
import { styled } from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  .imgBox {
    width: 250px;
    height: 370px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: start;


 
 


    .algn {
      display: flex;
      justify-content:space-between;
      align-items: center;
      width:100%;
    }
    p{
     color: #9CA3AF;
     font-size:12px;

    }
    h3{
       color: #111827;
       font-size:18px;
       text-transform:capitalize;

    }
    span{
        color: #9CA3AF;
        font-size:12px;
        
    }
  }
`;

function MovieCard({
  img,
  title,
  movieYr,
  ratings,
  icon,
  orangeicon,
  genre,
  watched,
}) {
  return (
    <Box>
      <div style={{ backgroundImage: `url(${img})` }} className="imgBox"></div>
      <div className="content">
        <p >{movieYr}</p>
        <h3>{title}</h3>
        <div className="algn">
          <div style={{}}>
            <img src={icon} width={30} />
            <span>{watched}</span>
          </div>
          <div style={{display:'flex', alignItems:'center'}}>
          <img src={orangeicon} width={20}/>
          <span >{ratings}</span>
          </div>
       
        </div>
        <p>{genre}</p>
      </div>
    </Box>
  );
}

export default MovieCard;
