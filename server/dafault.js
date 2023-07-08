import {data} from './constants/data.js'
import News from './models/news-schema.js'

const DefaultData= async ()=>{
    try {
        // await News.deleteMany({});
        await News.insertMany(data)
        console.log('data inserted successfully')
    } catch (error) {
        console.log('error',error.message)
    }
}

export default DefaultData;