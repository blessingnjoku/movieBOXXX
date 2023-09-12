import React, {useState} from 'react'
import { CardStyle } from './CardStyle'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';
const data = [
    {
      id: 1,
      image: require("../Assets/Images/Poster6.png"),
      title: "starnger things",
      movieYr: "USA 2018",
      ratings: "80%",
      icon: require("../Assets/Images/icons.png"),
      watched: "100/200",
      ganre: "Horror",
      orangeicon: require("../Assets/Images/orange.png"),
    },
    {
      id: 2,
      image: require("../Assets/Images/Poster4.png"),
      title: "Mulan",
      movieYr: "USA 2023",
      ratings: "90%",
      icon:require('../Assets/Images/icons.png'),
      watched: "90/200",
      ganre: "adventure",
      orangeicon: require("../Assets/Images/orange.png"),
    },
    {
      id: 3,
      image: require("../Assets/Images/Poster3.png"),
      title: "Arrived",
      movieYr: "USA 2018",
      ratings: "85%",
      icon: require("../Assets/Images/icons.png"),
      watched: "90/100",
      ganre: "Horror",
      orangeicon: require("../Assets/Images/orange.png"),
    },
    {
      id: 4,
      image: require("../Assets/Images/post3.jpg"),
      title: "Finding Ella",
      movieYr: "USA 2018",
      ratings: "90%",
      icon: require("../Assets/Images/icons.png"),
      watched: "70/100",
      ganre: "comedy",
      orangeicon: require("../Assets/Images/orange.png"),
    },
    {
        id:5,
        image:require('../Assets/Images/post2.jpeg'),
        title:"Ariel",
        movieYr:'USA 2018',
        ratings:'80%',
        icon:require('../Assets/Images/icons.png'),
        watched:'100/200',
        ganre:'Adventure',
        orangeicon: require("../Assets/Images/orange.png"),
  
    },
    {
        id:6,
        image:require('../Assets/Images/Poster1.png'),
        title:"Ariel",
        movieYr:'USA 2018',
        ratings:'80%',
        icon:require('../Assets/Images/icons.png'),
        watched:'100/200',
        ganre:'comendy',
        orangeicon: require("../Assets/Images/orange.png"),
  
    },
    {
        id:7,
        image:require('../Assets/Images/Poster3.png'),
        title:"Ariel",
        movieYr:'USA 2018',
        ratings:'80%',
        icon:require('../Assets/Images/icons.png'),
        watched:'100/200',
        ganre:'Adventure',
        orangeicon: require("../Assets/Images/orange.png"),
  
    },
    {
        id:8,
        image:require('../Assets/Images/Poster2.png'),
        title:"Ariel",
        movieYr:'USA 2018',
        ratings:'80%',
        icon:require('../Assets/Images/icons.png'),
        watched:'100/200',
        ganre:'Adventure',
        orangeicon: require("../Assets/Images/orange.png"),
  
    },
  ];

function MovieDisplays() {
    const [movies, setMovies] = useState(data);
  return (
    <CardStyle>
        {movies.map((val, key) => {
        return (
            <Link to={`${val.id}`} style={{textDecoration:'none'}}>
               <MovieCard
            key={key.id}
            img={val.image}
            title={val.title}
            movieYr={val.movieYr}
            ratings={val.ratings}
            icon={val.icon}
            watched={val.watched}
            genre={val.ganre}
            orangeicon={val.orangeicon}
          />
            </Link>
       
        );
      })}
    </CardStyle>
  )
}

export default MovieDisplays