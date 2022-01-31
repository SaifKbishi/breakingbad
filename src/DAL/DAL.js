import axios from 'axios';

const apiURL = 'https://www.breakingbadapi.com/api/';

const getEpisodesData =(source, id)=>{
  const episodes =  axios.get(apiURL +`episodes/${id}`,{
    cancelToken: source.token,
  });
  return episodes;
}

const getAllEpisodesData =()=>{
  const allEpisodes = axios.get(apiURL +`episodes/`);
  return allEpisodes;
}

const getCharacterData =(source, name)=>{
  const character =  axios.get(apiURL +`characters/${name}`,{
    cancelToken: source.token,
  });
  return character;
}

const getAllCharatersData=()=>{
  const allCharaters = axios.get(apiURL+`characters`);
  return allCharaters;
}

export {
  getEpisodesData,
  getAllEpisodesData,
  getCharacterData,
  getAllCharatersData
};