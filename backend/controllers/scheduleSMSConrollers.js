import  cron  from  "node-cron"
// import schedule from "node-schedule"

//  1st  *  for second(optional)(0-56)
// 2nd   *  for minute         (0-56) 
// 3rd   *  for hour            (0-23)
// 4th   *  for days           (1-31)
// 5th   *  for month           (1-12)
// 6th   *  for week            (0-7)


const scheduleController = () =>{


//----------with node-cron-------//  

cron.schedule('55 16 31 3 *', ()=>{                //this will send run on  31/03/2022 at 16:55
    
    const a  = Math.round(Math.random() * 100) + 1
    const  b = Math.round(Math.random() * 100) + 1

    console.log("Addition :- ", a+b)
    console.log("Substraction :- " ,a-b )
    console.log("Multiplication :- " ,a*b)
    console.log("Division :- ", a/b)
})


//----------with  node-schedule--------------//

// schedule.scheduleJob("*/5 * * * * * ", ()=>{
//     const a = Math.round(Math.random() * 100) + 1
//     const b = Math.round(Math.random() * 100) + 1


//     console.log("Addition :- ", a+b)
//     console.log("Substraction :- " ,a-b )
//     console.log("Multiplication :- " ,a*b)
//     console.log("Division :- ", a/b)
// })
}



export default scheduleController