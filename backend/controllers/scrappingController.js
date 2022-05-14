import cheerio  from "cheerio";
import axios  from "axios";
import asyncHandler from "express-async-handler"


const url =  "https://www.planetware.com/tourist-attractions/india-ind.htm"


const scrapData = asyncHandler(async(req,res)=>{

        const {data} = await axios.get(url)

        const newData = cheerio.load(data)

        const listItems = newData("#main div div div div")

        const touristPlaces = []

        listItems.each((idx, el)=> {

            const tourist = {name : "" , url : ""}
            

            tourist.name = newData(el).children("h2").text()
            tourist.url = newData(el).children("figure").children("img").attr("src")
            if(tourist.name && tourist.url){
            touristPlaces.push(tourist) 
            }
        })
            res.json(touristPlaces)
    })

export default scrapData;

 