import { Grid, Card, CardActions, CardActionArea, CardContent, Typography, CardMedia, Button } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import RateReviewIcon from '@mui/icons-material/RateReview';
import './Blogs.css'


export default function Blogs() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                <Card style={{
                    borderRadius: '10px'
                }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        image="https://source.unsplash.com/random"
                        alt=""
                        />
                        {/* <img src="https://source.unsplash.com/random" alt="green iguana" /> */}
                        <CardContent className="cardContent">
                            <Typography gutterBottom variant="h5" component="div" color="#fff">
                                Lizard
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{display: 'flex', justifyContent: 'right', backgroundColor: '#000'}}>
                        <Button size="small" color="primary">
                        <VisibilityIcon />
                        </Button>
                        <Button size="small" color="primary">
                        <RateReviewIcon />
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="280"
                        image="https://source.unsplash.com/random"
                        alt=""
                        />
                        {/* <img src="https://source.unsplash.com/random" alt="green iguana" /> */}
                        <CardContent className="cardContent">
                            <Typography gutterBottom variant="h5" component="div" >
                                Lizard
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{display: 'flex', justifyContent: 'right'}}>
                        <Button size="small" color="primary">
                        <VisibilityIcon />
                        </Button>
                        <Button size="small" color="primary">
                        <RateReviewIcon />
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="280"
                        image="https://source.unsplash.com/random"
                        alt=""
                        />
                        {/* <img src="https://source.unsplash.com/random" alt="green iguana" /> */}
                        <CardContent className="cardContent">
                            <Typography gutterBottom variant="h5" component="div" >
                                Lizard
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{display: 'flex', justifyContent: 'right'}}>
                        <Button size="small" color="primary">
                        <VisibilityIcon />
                        </Button>
                        <Button size="small" color="primary">
                        <RateReviewIcon />
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="280"
                        image="https://source.unsplash.com/random"
                        alt=""
                        />
                        {/* <img src="https://source.unsplash.com/random" alt="green iguana" /> */}
                        <CardContent className="cardContent">
                            <Typography gutterBottom variant="h5" component="div" >
                                Lizard
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{display: 'flex', justifyContent: 'right'}}>
                        <Button size="small" color="primary">
                        <VisibilityIcon />
                        </Button>
                        <Button size="small" color="primary">
                        <RateReviewIcon />
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
