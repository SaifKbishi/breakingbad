import React, {useState, useEffect, useContext} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {ReferenceDataContext} from '../ReferenceDataContext';
import {getCharacterData} from '../DAL/DAL';

const Characters = () => {
  const [characterDetails, setCharacterDetails] = useState([]);
  const params2 = useParams();

  useEffect(() => {
    // console.log('param2',params2)
    const source = axios.CancelToken.source();
    const fetchAPIData = async ()=>{
      try{
      const {data} = await getCharacterData(source, params2.id);
      // console.log('29 ',{data});
      setCharacterDetails(data[0]);
      }catch(error){
        if(axios.isCancel(error)){
          console.log('caught cancel axios', error)
        }else{
          console.log('error', error)
        }
      }
    };//fetchAPIData
    fetchAPIData();
    return ()=>{
      source.cancel();
    }
  }, []);

  return (
    <Container maxWidth="xl" sx={{mt:5, width:'600px'}}>
      <Card sx={{ minWidth: 500, display: "flex", flexDirection: "row", p:1 }}>
        <Box>
          <CardMedia
            component="img"
            height="194"
            width="200"
            image={characterDetails.img}
            alt={characterDetails.name}
          />
        </Box>
        <Box>
          <CardContent>
            <Typography variant="h5" color="text.secondary">
              Name: {characterDetails.name}
            </Typography>
          </CardContent>
          <CardContent>          
            <Typography >
              Birthday:  {characterDetails.birthday}
            </Typography>
            <Typography >Nickname: {characterDetails.nickname}</Typography>
            <Typography >
              Status: {characterDetails.status}
            </Typography>
            <Typography >
              Occupations: 
            </Typography>
            <List>
              {characterDetails.occupation && characterDetails.occupation.map((occu, index)=>{
                return(
                  <ListItem key={index}>
                    {occu}
                  </ListItem>
                );
              })}
            </List>            
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default Characters;