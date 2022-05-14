import asyncHandler from "express-async-handler"

const oceanTest = asyncHandler(async(req,res)=>{
    const {one,two,three,four,five,six,seven ,eight, nine, ten,  eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen, twenty ,twentyOne,twentyTwo,twentyThree,twentyFour, twentyFive, twentySix,twentySeven,twentyEight, twentyNine, thirty,thirtyOne,thirtyTwo, thirtyThree, thirtyFour, thirtyFive, thirtySix, thirtySeven, thirtyEight, thirtyNine, forty, fortyOne, fortytwo, fortyThree, fortyFour}  = req.body

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

    console.log(extraversion)
    console.log(agreeableness)
    console.log(conscientiousness)
    console.log(neuroticism)
    console.log(openness)


    const result = []

    const  details = []

   try{ 
    details.push(extraversion,agreeableness,conscientiousness,neuroticism,openness)

     extraversion  <=  1 ? result.push("Extraversion :-   Very High Prefers solitude,  Fatigued by too much social interaction, Reflective ,Dislikes being the center of attention,  Reserved") : extraversion  <=  2 ? result.push("Extraversion :-   Prefers solitude,  Fatigued by too much social interaction, Reflective ,Dislikes being the center of attention,  Reserved"): extraversion  <=  3 ? result.push("Extraversion :-  extraversion is Moderate") : extraversion  <=  4 ? result.push("Extraversion :-  He is energized when interacting with co-workers, and tend to be more productive in team discussions and he is insightful and imaginative and having a wide variety of interests") : extraversion  <=  5 ? result.push("Extraversion :-  He is very energized when interacting with co-workers, and tend to be more productive in team discussions and he is very insightful and imaginative and having a wide variety of interests.") : console.log("something error")
     agreeableness  <=  1 ? result.push("agreebleness :-  Very High Sceptical Demanding Insults and belittles others Stubborn Show-off Unsympathetic Doesn't care about how other people feel") : agreeableness  <=  2 ? result.push("agreebleness :- Sceptical Demanding Insults and belittles others Stubborn Show-off Unsympathetic Doesn't care about how other people feel") : agreeableness  <=  3 ? result.push("agreebleness :- agreeableness is moderate") : agreeableness  <=  4 ? result.push("agreebleness :- Friendly , Cooperative, compassionate , kind ,Sympathetic Trust (forgiving) Straightforwardness Altruism (enjoys helping) Compliance Modesty  Empathy ") : agreeableness  <=  5 ? result.push("agreebleness :- very High Friendly , Cooperative, compassionate , kind ,Sympathetic Trust (forgiving) Straightforwardness Altruism (enjoys helping) Compliance Modesty  Empathy ") : console.log("something error")
     conscientiousness  <=  1 ? result.push("Conscientiousness :-   very High in Incompetent Disorganized Careless Procrastinates Indiscipline Impulsive") : conscientiousness  <=  2 ? result.push("Conscientiousness :-    Incompetent Disorganized Careless Procrastinates Indiscipline Impulsive") : conscientiousness  <=  3 ? result.push("Conscientiousness :-  conscientiousness is Moderate") : conscientiousness  <=  4 ? result.push("Conscientiousness :-  Competence Organized Dutifulness Achievement striving Self-disciplined Deliberation reliable promp organise methodic thorough") : conscientiousness  <=  5 ? result.push("Conscientiousness :-   VERY HIGH in Competence Organized Dutifulness Achievement striving Self-disciplined Deliberation reliable promp organise methodic thorough") : console.log("something error")
     neuroticism  <=  1 ? result.push("neuroticism :- He doesn't worry  very much , calm,emotionally stable,very confident,resilient,He Rarely feels sad or depressed ") : neuroticism  <=  2 ? result.push("neuroticism :- He doesn't worry much , calm,emotionally stable,confident,resilient,He Rarely feels sad or depressed ") : neuroticism  <=  3 ? result.push("neuroticism :- neuroticism is Modrate") : neuroticism  <=  4 ? result.push("neuroticism :- he is emotional instablity , negative emotions, anxious, angry Hostility,experieces a lot of stress, selfSelf-consciousness (shy) Vulnerability Experiences dramatic shifts in mood") : neuroticism  <=  5 ? result.push("neuroticism :- he is very emotional instablity , negative emotions, anxious, angry Hostility,experieces a lot of stress, selfSelf-consciousness (shy) Vulnerability Experiences dramatic shifts in mood") : console.log("something error")
     openness  <=  1 ? result.push(" Openness :-  He is not curious and creative,not able to try new things, not very Imaginative,Traditional, predictable,pratical,conventional,prefers routine") : openness  <=  2 ? result.push(" Openness :- He is less curious and creative, less able to try new things, not Imaginative,Traditional, predictable,pratical,conventional,prefers routine") : openness  <=  3 ? result.push(" Openness :-  openness is Moderate") : openness  <=  4 ? result.push(" Openness :- He is curious ,imaginative,insighful, creative ,they have wide variety of Intrest, open to try new things and unconvectional") : openness  <=  5 ? result.push(" Openness :- He is very curious ,imaginative,insighful, creative ,they have wide variety of Intrest, open to try new things and unconvectional") : console.log("something error")


   res.status(201).json({result:result,details:details})

   }catch{
     res.status(404).json("not found")
   }
        

})

export default oceanTest;
