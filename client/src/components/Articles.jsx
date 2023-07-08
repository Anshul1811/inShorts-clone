import { useEffect,useState } from 'react'
import {Box} from '@mui/material'
import {getNews} from '../services/api.js'
import Article from './Article.jsx'

const Articles = () => {
     
  const [news,setNews]=useState([]);

    useEffect(()=>{
            dailyNews();
    },[])    // component did mount
        
    
    const dailyNews=  async ()=>{
         let response = await getNews();
        // console.log(response.data);
       
        setNews(response.data);
    }

  return (
    <Box>
    {
          news.map(data => {
            return <Article data={data}/>      // note this step
          })
    }
    </Box>
  )
}

export default Articles
