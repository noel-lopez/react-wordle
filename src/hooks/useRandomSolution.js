import axios from 'axios';
import {useState, useEffect} from 'react';

const useRandomSolution = () => {
  const [solution, setSolution] = useState(null);

  // const options = {
  //   method: 'GET',
  //   url: 'https://random-word-api.herokuapp.com/word?length=5',
  // };

  const options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getRandom',
    params: {wordLength: '5'},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
    }
  };

  useEffect(() => {
    // Random word from api
    axios.request(options).then(function (response) {
      // const word = response.data[0];
      const word = response.data;
      setSolution(word);
      console.log(word)
    }).catch(function (error) {
      console.error(error);
    });
    
  }, []); // TODO: be able to get a random solution everytime is needed (game finished and user wants to try again)

  return {solution};
}

export default useRandomSolution;