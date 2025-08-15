import axios from 'axios';
import config from '../../config.json';
import packagejson from '../../package.json';

//require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

const apiKey1 = process.env.API_KEY_NASA;
const apikey2 = process.env.API_KEY_MOVIE;


export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getreadme = async () => {
  const { data } = await axios.get(config.readme);

  return data;
}

export const getBio = async () => {
  const { data } = await axios.get(config.bioUrl);

  return data;
};

export const getResume = async () => {
  return packagejson.author.resume;


 
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');

  return {
    quote: `Quote of the day: “${data.content}” — ${data.author}`,
  };
};

export const getJoke = async () => {
  const { data } = await axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode&type=single');

  return {
    joke: `Here is a joke: "${data.joke}"`,
  };
};




export const getNasa = async () => {
  const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey1}`);

  return {
    nasa: `<p>Opening NASA picture of the day...</p>
    <style>
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    </style>
          <h1><center>${data.title}</center></h1>
          <img src="${data.hdurl}" alt="NASA Image of the Day" width="500" height="600" class="center">
          <p>${data.explanation}</p>`,
  };
};

export const getAdvice = async (num: string) => {
  const { data } = await axios.get(`https://api.adviceslip.com/advice`);

  return {
     advice: `Here is a advice: "${data.slip.advice}"`,
  };
};

export const GetPassword = async (num: string, len: string) => {
  const { data } = await axios.get(`https://www.random.org/passwords/?num=${num}&len=${len}&format=plain&rnd=new`);

  return data;
}


export const GetPassStrength = async (password: string) => {

  if (password.length < 12) {
    return { message: `Password should be at least 13 characters long.`, };
  };

  // Check for the presence of at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return { message: `Password should contain at least one uppercase letter.`, };
  };

  // Check for the presence of at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return { message: `Password should contain at least one lowercase letter.`, };
  };

  // Check for the presence of at least one digit
  if (!/\d/.test(password)) {
    return { message: `Password should contain at least one digit.`, };
  };


  if (!/\W/.test(password)) {
    return { message: 'Password should contain at least one symbol.' };
  }



  // Password meets the criteria
  return { message: `Password strength is good!`, };
};


export const getCountry = async (name: string) => {
  const { data } = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  //const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);

  //const officialName = response.data[0].name.official;
  // const imageUrl = response.data[0].flags.png;

  //const currencySymbol = data[0].currencies && data[0].currencies.length > 0 ?  data[0].currencies[0].symbol : '';
  const currencycode = Object.keys(data[0].currencies)[0];
  const nameofcountrydollar = data[0].currencies[currencycode].name;
  const countrysymbol = data[0].currencies[currencycode].symbol;


  const langcode = Object.keys(data[0].languages);

  /*
       let output = '';
       for (const code of langcode){
        const countrylanguage = data[0].languages[code];
        output = countrylanguage + ", " + output;
       };
       */

  let output = langcode.map(code => data[0].languages[code]).join(', ');

  let flaginfo = '';
  if (data[0]?.flags?.alt === undefined) {
    flaginfo = "Sorry, unable to retrieve flag description :(";
  }
  else {
    flaginfo = data[0].flags.alt;
  }


  return {
    country: `<p>Opening country facts....</p>
    <style>
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    </style>
          <h1><center>${data[0].name.official}</center></h1>
          <img src="${data[0].flags.png}" alt="Country Flag" width="500" height="600" class="center">
          <p>${flaginfo}</p>
Currency: ${nameofcountrydollar}
Symbol: ${currencycode} (${countrysymbol})

<p>Language:${output} <p>
<p>Population: ${data[0].population}</p>
<p>Timezones: ${data[0].timezones}</p>
Continents: ${data[0].continents} 
Coordinates: ${data[0].capitalInfo.latlng}
Map: <a href="${data[0].maps.googleMaps}" target="_blank">click here for Google Maps view</a> or <a href="${data[0].maps.openStreetMaps}" target=_blank">Click here for OpenStreetMap view</a>
           `,
  };
};

export const getMovie = async (moviename: string) =>{

  const { data } = await axios.get(`https://www.omdbapi.com/?t=${moviename}&plot=full&apikey=${apikey2}`);

const ratings = data.Ratings;


// let outputSource = '';
// rating.forEach((Source) => {
//   outputSource = `${Source.Source}` + outputSource;
// });
// let outputRating = '';
// rating.forEach((rating) => {
//   outputRating = `${rating.Value}` + outputRating;
// });

const ratingsStrings = ratings.map(rating => `${rating.Source}: ${rating.Value} `);


  return {
    movie: `
<span style="color: cyan">Title:</span> ${data.Title}
<span style="color: cyan">Release date:</span> ${data.Year}
<span style="color: cyan">Runtime:</span> ${data.Runtime}
<span style="color: cyan">Genre:</span> ${data.Genre}
<span style="color: cyan">Director:</span> ${data.Director}
<span style="color: cyan">Language:</span> ${data.Language}
<span style="color: cyan">Country:</span> ${data.Country}
<span style="color: cyan">Awards:</span> ${data.Awards}
<span style="color: cyan">BoxOffice:</span> ${data.BoxOffice}
<span style="color: cyan">Rating:</span> ${ratingsStrings}

<span style="color: cyan">Plot:</span> ${data.Plot}

<span style="color: cyan">To view poster:</span> <a href="${data.Poster}" target="_blank">click here to view the poster</a>
`,
  };
};