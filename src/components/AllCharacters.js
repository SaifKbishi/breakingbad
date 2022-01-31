import React, {useState, useEffect} from 'react';
import {getAllCharatersData} from '../DAL/DAL';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';


const AllCharacters = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  
  useEffect(()=>{

    const fetchCharactersData = async ()=>{
      try{
        const {data} = await getAllCharatersData();
        // console.log('13',data);
        setAllCharacters(data);
      }catch(error){
        console.log('error', error);
      }
    }
    fetchCharactersData();
  },[]);

  return (
    <Container sx={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
      {allCharacters && allCharacters.map((charater)=>{
        return(
          <Box key={charater.char_id} sx={{display:'flex', m:1, width:'400px', }}>
            <Box>
              <CardMedia
                component="img"
                height="194"
                image={charater.img}
                alt={charater.name}
              />
            </Box>
            <Box sx={{ m:1}}>
              <Typography>name:  
              <Link underline='none' href={`/characters/${charater.char_id}`} sx={{color:'#FFF', fontSize:'20px'}}>{charater.name}</Link>            
              </Typography>
              <Typography>Birthday: {charater.birthday}</Typography>            
              <Typography>Nickname: {charater.nickname}</Typography>            
              <Typography>Portrayed: {charater.portrayed}</Typography>            
              <Typography>Status: {charater.status}</Typography>
              <Typography> </Typography>
              ID: <Link underline='none' href={`/characters/${charater.char_id}`} sx={{color:'#FFF', fontSize:'20px'}}>{charater.char_id}</Link>
            </Box>
          <Divider />
        </Box>
        
        )
      })}
    </Container>
  );
};

export default AllCharacters;