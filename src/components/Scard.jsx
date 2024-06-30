import React, { useEffect, useState } from 'react'
import {Typography,Card,CardActions,CardContent,CardMedia,Button, Grid} from '@mui/material'
import axios from 'axios';

const Scard = () => {
  var[output,setOutput]=useState([])//array for 10 data
  useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
      .then((response)=>{
          console.log(response.data);
          setOutput(response.data);
      })
      .catch((error)=>{console.log(error);});
  },[])  
  return (
    <div> <Typography  variant="h2" component="div" style={{color:'blue',fontFamily:'Arial',textAlign:'center'}}>
    E-KART
    </Typography><br/>
      <Grid container spacing={2} sx={{padding:3}}>
      
      {output.map((val,i)=>{
            return(
              <Grid item key={i} xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {val.description}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"> More</Button>
      </CardActions>
    </Card>
    </Grid>
    )
  })}
  </Grid>
    </div>
  )
}

export default Scard
