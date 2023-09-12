import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Poster from "../Assets/Images/Poster.png";
import post1 from "../Assets/Images/post1.jpeg";
import post2 from "../Assets/Images/post2.jpeg";
import post3 from "../Assets/Images/post3.jpg";

import { styled } from "styled-components";
import icons from "../Assets/Images/icons.png";

import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import orange from "../Assets/Images/orange.png";
const Wrapper = styled.div`
  .bgImg {
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width:100%;
  }
  .container {
    position: absolute;
    top: 40%;
    right: 70%;
    width: 350px;
    text-align: start;

    h1 {
      color: #ffff;
      font-size: 48px;
    }
    p {
      color: #ffff;
      font-size: 14px;
    }
    button {
      text-align: center;
      padding: 7px 17px;
      background: #be123c;
      border: none;
      color: #ffffff;
      display: flex;
      align-items: center;
      border-radius: 6px;
    }
    .timerRider {
      display: flex;
      align-items: center;
    }
  }
`;

function Slider() {
  return (
    <Wrapper>
      <Swiper
       className="mySwiper"
    //   direction={'vertical'}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // modules={[Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide 
        >
          <div className="bgImg" style={{ backgroundImage: `url(${Poster})` }}>
            <div className="container">
              <h1>John Wick 3 : Parabellum</h1>
              <div className="timerRider">
                <div>
                  <img src={icons} width={30} style={{ marginRight: "10px" }} />
                  <span style={{ marginRight: "50px", color: "#fff" }}>
                    890/100
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={orange} width={20} />
                  <span style={{ color: "#fff", marginLeft: "10px" }}>97%</span>
                </div>
              </div>
              <p>
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>

              <button>
                <FeatherIcon icon="youtube" />
                <span style={{marginLeft:'10px'}}>Watch Triller</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bgImg" style={{ backgroundImage: `url(${post1})` }}>
            <div className="container">
              <h1>MULAN</h1>
              <div className="timerRider">
                <div>
                  <img src={icons} width={30} style={{ marginRight: "10px" }} />
                  <span style={{ marginRight: "50px", color: "#fff" }}>
                    890/100
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={orange} width={20} />
                  <span style={{ color: "#fff", marginLeft: "10px" }}>97%</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                expedita animi quia accusantium totam, asperiores iure in ut,
                dicta ipsa tempora ab veritatis ipsam. Nobis delectus vero
                fugit? Consequuntur, velit?
              </p>

              <button>
                <FeatherIcon icon="video" />
                <span>Watch Triller</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bgImg" style={{ backgroundImage: `url(${post2})` }}>
            <div className="container">
              <h1>Ariel</h1>
              <div className="timerRider">
                <div>
                  <img src={icons} width={30} style={{ marginRight: "10px" }} />
                  <span style={{ marginRight: "50px", color: "#fff" }}>
                    1100/1000
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={orange} width={20} />
                  <span style={{ color: "#fff", marginLeft: "10px" }}>95%</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, dicta laudantium ab quam perspiciatis voluptatum!
                Laboriosam, deserunt quos aliquid perferendis, fugiat modi
                adipisci ipsam dolore praesentium vero laudantium doloribus
                ratione?
              </p>

              <button>
                <FeatherIcon icon="video" />
                <span>Watch Triller</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bgImg" style={{ backgroundImage: `url(${post3})` }}>
            <div className="container">
              <h1>Find The Missing Girl</h1>
              <div className="timerRider">
                <div>
                  <img src={icons} width={30} style={{ marginRight: "10px" }} />
                  <span style={{ marginRight: "50px", color: "#fff" }}>
                    500/100
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={orange} width={20} />
                  <span style={{ color: "#fff", marginLeft: "10px" }}>80%</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, vero cumque consequatur aspernatur tenetur dolor
                soluta ullam, inventore architecto sunt esse quia enim in iure
                itaque qui magni debitis sapiente..
              </p>

              <button>
                <FeatherIcon icon="video" />
                <span>Watch Triller</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* <div style={{float:'right', position:'absolute', backgroundColor:'red', width:'300px'}}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>



        </div> */}
      </Swiper>
    </Wrapper>
  );
}

export default Slider;
