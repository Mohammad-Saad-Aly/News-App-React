import axios from 'axios'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function News() {
    let [newsData, setNewsData] = useState([])
    let [query, setQuery] = useState('')
    let getNews = (e) => {
        e.preventDefault()
        axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2023-01-14&sortBy=publishedAt&apiKey=48e7e5228aa74682bfdd2f230e3ae0c6`)
            .then((res) => {
                setNewsData(res.data.articles)
                console.log(res.data.articles)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>

            {/* <form onSubmit={getNews}> */}
            {/* <input type="text" onChange={(e)=>{
                    setQuery(e.target.value)
                }} name="" id="" /> */}
            {/* <button type='submit'>Get News</button> */}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={(e) => {
                    setQuery(e.target.value)
                }} id="standard-basic" label="Standard" variant="standard" />
                <Button onClick={getNews} variant="outlined">Check News</Button>
                <Stack spacing={2} direction="row">
                </Stack>
            </Box>
            {/* </form> */}

            {/* {
                newsData.map((res, i) => {
                    return <div key={i}>
                        {res.title}
                    </div>
                })
            } */}
            {
                newsData.map((items, i) => {
                    return <div key={i}>
                        <Card sx={{ maxWidth: 1000 }}>
                            <CardMedia
                                sx={{ height: 500 }}
                                image={items.urlToImage}
                                // image={items.urlToImage}
                                title={items.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Title: {items.title}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Author: {items.author}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Content: {items.content}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Pblished at: {items.publishedAt}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    <a href={items.url}> More info</a>
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {items.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    </div>

                })
            }
        </div>
    )
}
