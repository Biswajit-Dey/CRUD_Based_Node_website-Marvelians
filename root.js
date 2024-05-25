const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bdey11333:dDdaHdiiARQokzoJ@avengers.r9gist3.mongodb.net/?retryWrites=true&w=majority&appName=Avengers')
.then(()=>{
  console.log("DB connected")
})
.catch(e =>{
  console.log(e)
})

const Movie = require('./models/movieModel')

Movie.insertMany([{
    "title": "Iron Man",
    "year": 2008,
    "hero": "Tony Stark/Iron Man",
    "villain": "Obadiah Stane/Iron Monger",
    "imdb": 7.9,
    "budget": "$140 million",
    "earning": "$585.2 million",
    "director": "Jon Favreau",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/564x/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg"
  },
  {
    "title": "The Incredible Hulk",
    "year": 2008,
    "hero": "Bruce Banner/Hulk",
    "villain": "Emil Blonsky/Abomination",
    "imdb": 6.7,
    "budget": "$150 million",
    "earning": "$263.4 million",
    "director": "Louis Leterrier",
    "producer": "Avi Arad, Gale Anne Hurd, Kevin Feige",
    "img": "https://i.pinimg.com/474x/bd/65/3c/bd653c0c22d7c5aba2a10d5d55fa3ef5.jpg"
  },
  {
    "title": "Iron Man 2",
    "year": 2010,
    "hero": "Tony Stark/Iron Man",
    "villain": "Ivan Vanko/Whiplash and Justin Hammer",
    "imdb": 7,
    "budget": "$200 million",
    "earning": "$623.9 million",
    "director": "Jon Favreau",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/07/33/cd/0733cd9555a92196abf242fba39aec7e.jpg"
  },
  {
    "title": "Thor",
    "year": 2011,
    "hero": "Thor",
    "villain": "Loki",
    "imdb": 7,
    "budget": "$150 million",
    "earning": "$449.3 million",
    "director": "Kenneth Branagh",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/22/8f/81/228f8131fe329ad48f50e45b0da35e0f.jpg"
  },
  {
    "title": "Captain America: The First Avenger",
    "year": 2011,
    "hero": "Steve Rogers/Captain America",
    "villain": "Johann Schmidt/Red Skull",
    "imdb": 6.9,
    "budget": "$140 million",
    "earning": "$370.6 million",
    "director": "Joe Johnston",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/c4/78/5d/c4785dd26c5ebb05e1a43a66c254acdc.jpg"
  },
  {
    "title": "The Avengers",
    "year": 2012,
    "hero": "The Avengers (Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye)",
    "villain": "Loki",
    "imdb": 8,
    "budget": "$220 million",
    "earning": "$1.518 billion",
    "director": "Joss Whedon",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/3f/08/43/3f0843feca5f45f2601b405d09076aa9.jpg"
  },
  {
    "title": "Iron Man 3",
    "year": 2013,
    "hero": "Tony Stark/Iron Man",
    "villain": "Aldrich Killian/The Mandarin",
    "imdb": 7.2,
    "budget": "$200 million",
    "earning": "$1.214 billion",
    "director": "Shane Black",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/4e/f8/f4/4ef8f46e864bcb675ae0cec5daa86ff3.jpg"
  },
  {
    "title": "Thor: The Dark World",
    "year": 2013,
    "hero": "Thor",
    "villain": "Malekith",
    "imdb": 6.9,
    "budget": "$170 million",
    "earning": "$644.6 million",
    "director": "Alan Taylor",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/7e/d6/91/7ed691caeb75e4a57b0afb1847fa5b45.jpg"
  },
  {
    "title": "Captain America: The Winter Soldier",
    "year": 2014,
    "hero": "Captain America and Black Widow",
    "villain": "The Winter Soldier and Hydra",
    "imdb": 7.7,
    "budget": "$177 million",
    "earning": "$714.3 million",
    "director": "Russo Brothers",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/d3/a3/41/d3a34185e85d1ee01de8f4686553c1c9.jpg"
  },
  {
    "title": "Guardians of the Galaxy",
    "year": 2014,
    "hero": "Star-Lord, Gamora, Drax, Rocket, and Groot",
    "villain": "Ronan the Accuser",
    "imdb": 8,
    "budget": "$232.3 million",
    "earning": "$773.3 million",
    "director": "James Gunn",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/86/2e/6e/862e6e24382a43f6f2b8159e643aa75a.jpg"
  },
  {
    "title": "Avengers: Age of Ultron",
    "year": 2015,
    "hero": "The Avengers",
    "villain": "Ultron",
    "imdb": 7.3,
    "budget": "$365 million",
    "earning": "$1.402 billion",
    "director": "Joss Whedon",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/b9/49/f5/b949f577620cb593dd17ea94c57bd1c1.jpg"
  },
  {
    "title": "Ant-Man",
    "year": 2015,
    "hero": "Scott Lang/Ant-Man",
    "villain": "Darren Cross/Yellowjacket",
    "imdb": 7.3,
    "budget": "$130 million",
    "earning": "$519.3 million",
    "director": "Peyton Reed",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/5c/13/ba/5c13ba7c436713444fa2e4a2d55a2c77.jpg"
  },
  {
    "title": "Captain America: Civil War",
    "year": 2016,
    "hero": "Captain America and Iron Man",
    "villain": "Helmut Zemo",
    "imdb": 7.8,
    "budget": "$250 million",
    "earning": "$1.153 billion",
    "director": "Russo Brothers",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/2a/59/42/2a5942a1faadadca96f6e8a35e8e9e2c.jpg"
  },
  {
    "title": "Doctor Strange",
    "year": 2016,
    "hero": "Doctor Stephen Strange",
    "villain": "Kaecilius",
    "imdb": 7.5,
    "budget": "$165 million",
    "earning": "$677.7 million",
    "director": "Scott Derrickson",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/a5/45/0d/a5450d52208e2c22b3291f452689a8eb.jpg"
  },
  {
    "title": "Guardians of the Galaxy Vol. 2",
    "year": 2017,
    "hero": "Star-Lord, Gamora, Drax, Rocket, and Groot",
    "villain": "Ego",
    "imdb": 7.6,
    "budget": "$200 million",
    "earning": "$863.8 million",
    "director": "James Gunn",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/c9/a4/05/c9a4057306411d7d4a036e8197752e53.jpg"
  },
  {
    "title": "Spider-Man: Homecoming",
    "year": 2017,
    "hero": "Peter Parker/Spider-Man",
    "villain": "Adrian Toomes/Vulture",
    "imdb": 7.4,
    "budget": "$175 million",
    "earning": "$880.2 million",
    "director": "Jon Watts",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/cb/e0/80/cbe0805aea34cca87635e51a007598a7.jpg"
  },
  {
    "title": "Thor: Ragnarok",
    "year": 2017,
    "hero": "Thor",
    "villain": "Hela",
    "imdb": 7.9,
    "budget": "$180 million",
    "earning": "$854 million",
    "director": "Taika Waititi",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/1b/06/ce/1b06ce230340db050811d1836506714f.jpg"
  },
  {
    "title": "Black Panther",
    "year": 2018,
    "hero": "T'Challa/Black Panther",
    "villain": "Erik Killmonger",
    "imdb": 7.3,
    "budget": "$200 million",
    "earning": "$1.346 billion",
    "director": "Ryan Coogler",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/15/68/02/156802d438167e33d61b6833a63b24fa.jpg"
  },
  {
    "title": "Avengers: Infinity War",
    "year": 2018,
    "hero": "The Avengers",
    "villain": "Thanos",
    "imdb": 8.4,
    "budget": "$316-400 million",
    "earning": "$2.048 billion",
    "director": "Russo Brothers",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/2f/bf/02/2fbf02248319c6e9152b079234b63fa4.jpg"
  },
  {
    "title": "Ant-Man and The Wasp",
    "year": 2018,
    "hero": "Ant-Man and The Wasp",
    "villain": "Ghost and Sonny Burch",
    "imdb": 7,
    "budget": "$162-195 million",
    "earning": "$622.7 million",
    "director": "Peyton Reed",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/c4/a0/35/c4a035685a053270fee1209e819deffd.jpg"
  },
  {
    "title": "Captain Marvel",
    "year": 2019,
    "hero": "Carol Danvers/Captain Marvel",
    "villain": "Yon-Rogg",
    "imdb": 6.8,
    "budget": "$175 million",
    "earning": "$1.128 billion",
    "director": "Anna Boden and Ryan Fleck",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/d7/41/f1/d741f10bbc1d71b53745c98e9791f13d.jpg"
  },
  {
    "title": "Avengers: Endgame",
    "year": 2019,
    "hero": "The Avengers",
    "villain": "Thanos",
    "imdb": 8.4,
    "budget": "$356-400 million",
    "earning": "$2.798 billion",
    "director": "Russo Brothers",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/95/26/68/9526684fe11e38cf6bb6fbd48e37de6a.jpg"
  },
  {
    "title": "Spider-Man: Far From Home",
    "year": 2019,
    "hero": "Peter Parker/Spider-Man",
    "villain": "Quentin Beck/Mysterio",
    "imdb": 7.4,
    "budget": "$160 million",
    "earning": "$1.131 billion",
    "director": "Jon Watts",
    "producer": "Kevin Feige and Amy Pascal",
    "img": "https://i.pinimg.com/474x/fd/b3/d2/fdb3d2bbee9d0407c302db9a3725a7b3.jpg"
  },
  {
    "title": "Black Widow",
    "year": 2021,
    "hero": "Natasha Romanoff/Black Widow",
    "villain": "Taskmaster and Dreykov",
    "imdb": 6.8,
    "budget": "$200 million",
    "earning": "$379.5 million",
    "director": "Cate Shortland",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/bf/30/41/bf304150e887217f462a2ad8105a2c6c.jpg"
  },
  {
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "year": 2021,
    "hero": "Shang-Chi",
    "villain": "Xu Wenwu/The Mandarin",
    "imdb": 7.7,
    "budget": "$150-200 million",
    "earning": "$224.5 million",
    "director": "Destin Daniel Cretton",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/be/f7/a8/bef7a8ce7d3ba4e7e70503072cbb8981.jpg"
  },
  {
    "title": "Eternals",
    "year": 2021,
    "hero": "Various Eternals",
    "villain": "Deviants and Tiamut",
    "imdb": 6.9,
    "budget": "$200 million",
    "earning": "$402.1 million",
    "director": "Chloé Zhao",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/564x/39/e8/e6/39e8e6d6c7efcabb159c95ee87417c96.jpg"
  },
  {
    "title": "Doctor Strange in the Multiverse of Madness",
    "year": 2022,
    "hero": "Stephen Strange/Doctor Strange",
    "villain": "Wanda/ Scarlett Witch",
    "imdb": 6.9,
    "budget": "$294.5 million",
    "earning": "$955.8 million",
    "director": "Sam Raimi",
    "producer": "Kevin Feige",
    "img": "https://i.pinimg.com/474x/5b/48/89/5b4889b5df7f5ed6c9697a995e1dec20.jpg"
  }]).then(()=>{
    console.log("Inserted all")
  }).catch((err)=> console.log(err))