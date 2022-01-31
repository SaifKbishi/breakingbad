import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import {getEpisodesData, getAllEpisodesData} from '../DAL/DAL';

const Episode = () => {
  const [breakingBadData, setBreakingBadData] = useState([]);
  const [allEpisodes, setAllEpisodes] =useState([]);
  const params = useParams();
  
  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchAPIData = async ()=>{
    try{
      const {data} = await getEpisodesData(source, params.id);
      setBreakingBadData(data[0]);
    }catch(error){
        if(axios.isCancel(error)){
          console.log('caught cancel axios', error)
        }else{
          console.log('error', error)
        }
      }
    }
    fetchAPIData();
    fetchAllEpisodesData();
    return ()=>{
      source.cancel();
    }
  }, [breakingBadData]);


  const fetchAllEpisodesData = async ()=>{
    const {data} = await getAllEpisodesData();
    setAllEpisodes(data);
  };

  return (
    <>
    <Container maxWidth="xl" 
      sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'row',
          p: 1,
          m: 1,
          justifyContent: 'space-between'
        }}
        >

    <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: '#5085a5',
          maxWidth: 500,
          flexGrow: 3,
        }}
      >
        <Typography sx={{}} variant="h4">
          Episode Title: 
          { breakingBadData.title}
        </Typography>
        <Typography sx={{}} variant="h6">
          Air Date: 
          {breakingBadData.air_date}          
        </Typography>
        <List>
          {breakingBadData.characters && breakingBadData.characters.map((character, index)=>{
            let char = character.split(' ').join('+');
            // console.log('char: ',char);
            return(
               <Link href={`/characters?name=${char}`} underline='none' sx={{color:'#17251a', fontSize:'20px'}} key={index}>
                <ListItem  sx={{bgcolor:'#3aafa9', m:1, p:1}}>
                  {character}
                </ListItem>
              </Link>
            );
          })}        
        </List>
      </Box>
      <Box
       sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: '#5085a5',
          maxWidth: 400,
          flexGrow: 1,
        }}>
        <Typography sx={{pb:2}} variant="h5">
          All Episodes
        </Typography>
        <List sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 400,
              }}>
          {allEpisodes && allEpisodes.map((episode, index)=>{
            return(
              <ListItem sx={{p:0.3,m:0.1,display: 'flex',justifyContent:'center', alignContent:'center' }} key={index}>
                <Link href={`/episodes/${episode.episode_id}`} underline="none" key={episode.episode_id}  
                    sx={{color:'#17251a',bgcolor:'#def2f1', fontSize:'15px', m:0,p:0.3, width:'90%', display: 'flex', justifyContent:'center', alignContent:'center'}}>
                    {episode.title}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Container>
    </>
  );
};

export default Episode;