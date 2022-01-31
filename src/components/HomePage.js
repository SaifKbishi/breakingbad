import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import Season from './Season';   
import {getAllEpisodesData} from '../DAL/DAL';

const numberOfSeason=[];

const HomePage = () => {
  const [breakingBadData, setBreakingBadData] = useState([]);

  useEffect(() => { 
    const source = axios.CancelToken.source();
    const fetchAPIData = async ()=>{
    try{
        const {data} = await getAllEpisodesData(source);
        setBreakingBadData(data);
      }catch(error){
        if(axios.isCancel(error)){
          console.log('caught cancel axios', error)
        }else{
          console.log('error', error)
        }
      }
    }

    fetchAPIData();
    getNumberOfSeasons();

    return ()=>{
      source.cancel();
    }
  }, [breakingBadData]);//useEffect

  const getNumberOfSeasons= async()=>{
    breakingBadData.forEach(episode => {
      if(!numberOfSeason.includes((episode.season).trim())){
        numberOfSeason.push(episode.season);    
      } 
    });
  }//getNumberOfSeasons
 
  return ( 
    <>
    <Container maxWidth="xl">   
    <Box 
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: '#5085a5',
        }}
      >
      {
         numberOfSeason.map((seasonNumber, index)=>{
          return(
            <Box sx={{m:5, p: 1, bgcolor: '#8fc1e3' }} key={index}>  
            <Typography key={index} variant="h4">
              Season Number: {seasonNumber} 
              <Box sx={{display: 'flex', flexWrap: 'wrap',m: 2,}} key={index}>              
              <Season seasonNumber={seasonNumber} episodesDetails={breakingBadData} key={seasonNumber}/>  
              </Box>
            </Typography> 
            </Box>
          )
        })
      }
      </Box>
      </Container >
    </>
  );
};

export default HomePage;