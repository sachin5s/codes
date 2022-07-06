import asyncHandler from "express-async-handler"
import OceanTestResult from "../sampleModel/oceanTestModel.js"
import CandidatesData from "../sampleModel/candidateSModel.js"

const oceanTest = asyncHandler(async(req,res)=>{

    const {one,two,three,four,five,six,seven ,eight, nine, ten, eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen, twenty ,twentyOne,twentyTwo,twentyThree,twentyFour, twentyFive, twentySix,twentySeven,twentyEight, twentyNine, thirty,thirtyOne,thirtyTwo, thirtyThree, thirtyFour, thirtyFive, thirtySix, thirtySeven, thirtyEight, thirtyNine, forty, fortyOne, fortytwo, fortyThree, fortyFour}  = req.body

    const id = req.headers.candidateid

    // console.log("header" ,id)

    //extraversion : 1, 6R 11, 16, 21R, 26, 31R, 36
    const extraversion = (one + ( 6 - six) + eleven + sixteen + (6 -twentyOne) + twentySix + (6 -thirtyOne) + thirtySix) / 8

    // Agreeableness: 2R, 7, 12R, 17, 22, 27R, 32, 37R, 42
    const agreeableness = ((6 -two) + seven + (6 -twelve) + seventeen + twentyTwo + (6 -twentySeven) + thirtyTwo + (6 - thirtySeven) + fortytwo) / 9

    // Conscientiousness: 3, 8R, 13, 18R, 23R, 28, 33, 38, 43R
    const conscientiousness = (three + (6 - eight) + thirteen + (6 - eighteen) + (6 - twentyThree) + twentyEight + thirtyThree + thirtyEight + (6 - fortyThree)) / 9
 
    // Neuroticism: 4, 9R, 14, 19, 24R, 29, 34R, 39
    const neuroticism = (four + (6 - nine) + fourteen +  nineteen + (6 - twentyFour) + twentyNine + (6 - thirtyFour) + thirtyNine) / 8
    
    // Openness: 5, 10, 15, 20, 25, 30, 35R, 40, 41R, 44
    const openness = (five + ten + fifteen + twenty + twentyFive + thirty + (6 - thirtyFive) + forty + (6 - fortyOne) + fortyFour ) / 10

    const resultsInDetails = []     
    const  resultsInNumber = []   

      // ****we find mean of all 5 results and also add reverse value****

    resultsInNumber.push(openness,conscientiousness,extraversion,agreeableness,neuroticism,) //his marks out of 5

      //conditions for details... 

      // 10 question.... 10*5= 50 then    50/5 = 10 per condition 
       openness  <=  10 ? resultsInDetails.push("Openness :-  He is not curious and creative,not able to try new things, not very Imaginative,Traditional, predictable,pratical,conventional,prefers routine")
       : openness  <=  20 ? resultsInDetails.push(" Openness :- He is less curious and creative, less able to try new things, not Imaginative,Traditional, predictable,pratical,conventional,prefers routine") 
       : openness  <=  30 ? resultsInDetails.push(" Openness :-  openness is Moderate")
        : openness  <=  40 ? resultsInDetails.push(" Openness :- He is curious ,imaginative,insighful, creative ,they have wide variety of Intrest, open to try new things and unconvectional") 
         : openness  <=  50 ? resultsInDetails.push(" Openness :- He is very curious ,imaginative,insighful, creative ,they have wide variety of Intrest, open to try new things and unconvectional") : console.log("something error")
         
      // 9 question.... 9*5= 45 then    45/5 = 9 per condition 
      conscientiousness  <=  9 ? resultsInDetails.push("Conscientiousness :-   very High in Incompetent Disorganized Careless Procrastinates Indiscipline Impulsive") 
      : conscientiousness  <=  18 ? resultsInDetails.push("Conscientiousness :-    Incompetent Disorganized Careless Procrastinates Indiscipline Impulsive") 
      : conscientiousness  <=  27 ? resultsInDetails.push("Conscientiousness :-  conscientiousness is Moderate") 
      : conscientiousness  <=  36 ? resultsInDetails.push("Conscientiousness :-  Competence Organized Dutifulness Achievement striving Self-disciplined Deliberation reliable promp organise methodic thorough")
       : conscientiousness  <=  45 ? resultsInDetails.push("Conscientiousness :-   VERY HIGH in Competence Organized Dutifulness Achievement striving Self-disciplined Deliberation reliable promp organise methodic thorough") : console.log("something error")     

      // 8 question.... 8*5= 40 then    40/5 = 8 per condition 
      extraversion  <=  8 ? resultsInDetails.push("Extraversion :-   Very High Prefers solitude,  Fatigued by too much social interaction, Reflective ,Dislikes being the center of attention,  Reserved") 
      : extraversion  <=  16 ? resultsInDetails.push("Extraversion :-   Prefers solitude,  Fatigued by too much social interaction, Reflective ,Dislikes being the center of attention,  Reserved")
      : extraversion  <=  24 ? resultsInDetails.push("Extraversion :-  extraversion is Moderate") 
      : extraversion  <=  32 ? resultsInDetails.push("Extraversion :-  He is energized when interacting with co-workers, and tend to be more productive in team discussions and he is insightful and imaginative and having a wide variety of interests") 
      : extraversion  <=  40 ? resultsInDetails.push("Extraversion :-  He is very energized when interacting with co-workers, and tend to be more productive in team discussions and he is very insightful and imaginative and having a wide variety of interests.") : console.log("something error")

// 9 question.... 9*5= 45 then    45/5 = 9 per condition 
      agreeableness  <=  9 ? resultsInDetails.push("agreebleness :-  Very High Sceptical Demanding Insults and belittles others Stubborn Show-off Unsympathetic Doesn't care about how other people feel") 
      : agreeableness  <=  18 ? resultsInDetails.push("agreebleness :- Sceptical Demanding Insults and belittles others Stubborn Show-off Unsympathetic Doesn't care about how other people feel") 
      : agreeableness  <=  27 ? resultsInDetails.push("agreebleness :- agreeableness is moderate") 
      : agreeableness  <=  36 ? resultsInDetails.push("agreebleness :- Friendly , Cooperative, compassionate , kind ,Sympathetic Trust (forgiving) Straightforwardness Altruism (enjoys helping) Compliance Modesty  Empathy ") 
      : agreeableness  <=  45 ? resultsInDetails.push("agreebleness :- very High Friendly , Cooperative, compassionate , kind ,Sympathetic Trust (forgiving) Straightforwardness Altruism (enjoys helping) Compliance Modesty  Empathy ") : console.log("something error")


      // 8 question.... 8*5= 40 then    40/5 = 8 per condition 
      neuroticism  <=  8 ? resultsInDetails.push("neuroticism :- He doesn't worry  very much , calm,emotionally stable,very confident,resilient,He Rarely feels sad or depressed ") 
      : neuroticism  <=  16 ? resultsInDetails.push("neuroticism :- He doesn't worry much , calm,emotionally stable,confident,resilient,He Rarely feels sad or depressed ") 
      : neuroticism  <=  24 ? resultsInDetails.push("neuroticism :- neuroticism is Modrate") 
      : neuroticism  <=  32 ? resultsInDetails.push("neuroticism :- he is emotional instablity , negative emotions, anxious, angry Hostility,experieces a lot of stress, selfSelf-consciousness (shy) Vulnerability Experiences dramatic shifts in mood") 
      : neuroticism  <=  40 ? resultsInDetails.push("neuroticism :- he is very emotional instablity , negative emotions, anxious, angry Hostility,experieces a lot of stress, selfSelf-consciousness (shy) Vulnerability Experiences dramatic shifts in mood") : console.log("something error")


      // console.log("your Data",result[0])
      // console.log("your data" , typeof(result[3]))

  const  findCandidate = await CandidatesData.findById(id)

    if(findCandidate){
      res.status(201).json({result:resultsInNumber,details:resultsInDetails})

        const fullName =  findCandidate.fName + findCandidate.mName+ findCandidate.lName

      const AddOceanData  = new OceanTestResult({
              candId : findCandidate._id,
              candName : fullName,
              oceanResult :[{
                result : {
                  oScore :  openness,
                  cScore : conscientiousness,
                  eScore : extraversion,
                  aScore : agreeableness,
                  nScore : neuroticism,
                },
                details : {
                  oDetail : resultsInDetails[0],
                  cDetail : resultsInDetails[1],
                  eDetail : resultsInDetails[2],
                  aDetail : resultsInDetails[3],
                  nDetail : resultsInDetails[4]
                }
              }]
      })

        const saveTest = await AddOceanData.save()
          if(saveTest){
            console.log("Result saved In Database")
          }
   console.log("candidate found")
          // }  
  }else{
    console.log("candidatenotFound")
  }
      
})

export default oceanTest;
