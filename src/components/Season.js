import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions } from '@mui/material';
import Link from '@mui/material/Link';

const Season = ({seasonNumber, episodesDetails}) => {
  const [breakingBadData, setBreakingBadData] = useState();    
  // console.log('17 season: ', episodesDetails) 
  return ( 
    <>    
      {episodesDetails && episodesDetails.filter(episode =>{
        return episode.season === seasonNumber
      }).map((episodesDetails, index) =>{
        return(
          <Card sx={{ maxWidth: 345, m:1, flexGrow:1 }} key={index}>
              <CardContent key={index+100}>
              <Typography  sx={{fontSize:'14px'}} key={index+150}>
              Episode:
              </Typography>
              <CardActionArea>
              <Link href={`episodes/${episodesDetails.episode_id}`} underline="none" key={episodesDetails.episode_id}>
                <Typography gutterBottom variant="h5" component="div" key={index+7}>   
                  {episodesDetails.title}
                </Typography>
              </Link>
              </CardActionArea >
                <Typography variant="body2" color="text.secondary" key={index+450}>
                  Air Date: {episodesDetails.air_date}
                </Typography>
              </CardContent>
          </Card>
        )
      })
      } 
    </>
  );
};

export default Season;