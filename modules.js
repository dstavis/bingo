var answerPropName = 'Tell us one short fun fact about yourself!'
'Tell us one short fun fact about yourself!'

function getRandomUniqueData(array){
  // get a random number between 0 and surveyResponses.length
  var randomIndex = Math.floor(Math.random() * array.length)
  // pull the answer with that index out of the array and delete it from the array
  return array.splice(randomIndex, 1)[0][answerPropName]
  // return the answer we pulled out
}


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const surveyResponses = [
  {
    "Timestamp": "entered by hand on 5/25",
    "Tell us one short fun fact about yourself!": "I am currently writing my first fully formed novel."
  },
 {
   "Timestamp": "2022/05/20 1:00:56 PM CDT",
   "Tell us one short fun fact about yourself!": "I am a photographer"
 },
 {
   "Timestamp": "2022/05/20 1:01:09 PM CDT",
   "Tell us one short fun fact about yourself!": "I love Phish. "
 },
 {
   "Timestamp": "2022/05/20 1:01:43 PM CDT",
   "Tell us one short fun fact about yourself!": "I trekked for 14 days to Mt. Everest Base Camp in Nepal. "
 },
 {
   "Timestamp": "2022/05/20 1:01:49 PM CDT",
   "Tell us one short fun fact about yourself!": "I love ultimate frisbee!"
 },
 {
   "Timestamp": "2022/05/20 1:04:12 PM CDT",
   "Tell us one short fun fact about yourself!": "I've been to 2 olympics as a spectator "
 },
 {
   "Timestamp": "2022/05/20 1:04:39 PM CDT",
   "Tell us one short fun fact about yourself!": "I love to garden!"
 },
 {
   "Timestamp": "2022/05/20 1:08:19 PM CDT",
   "Tell us one short fun fact about yourself!": "I love to go scuba diving!"
 },
 {
   "Timestamp": "2022/05/20 1:14:26 PM CDT",
   "Tell us one short fun fact about yourself!": "I make my own kombucha! "
 },
 {
   "Timestamp": "2022/05/20 1:15:06 PM CDT",
   "Tell us one short fun fact about yourself!": "I collect sneakers currently have over 60 pairs!"
 },
 {
   "Timestamp": "2022/05/20 1:15:28 PM CDT",
   "Tell us one short fun fact about yourself!": "I like hand binding journals."
 },
 {
   "Timestamp": "2022/05/20 1:18:36 PM CDT",
   "Tell us one short fun fact about yourself!": "I like to design prints for fabric"
 },
 {
   "Timestamp": "2022/05/20 1:22:54 PM CDT",
   "Tell us one short fun fact about yourself!": "Growing up I was a competitive hockey player and won 7 state championships in a row"
 },
 {
   "Timestamp": "2022/05/20 1:28:38 PM CDT",
   "Tell us one short fun fact about yourself!": "I make hyper-realistic miniatures "
 },
 {
   "Timestamp": "2022/05/20 1:40:54 PM CDT",
   "Tell us one short fun fact about yourself!": "I was almost sold to my God-Parents for $20,000 as an infant (They could not reproduce)"
 },
 {
   "Timestamp": "2022/05/20 1:47:48 PM CDT",
   "Tell us one short fun fact about yourself!": "I love penguins "
 },
 {
   "Timestamp": "2022/05/20 2:03:08 PM CDT",
   "Tell us one short fun fact about yourself!": "I airbnb my basement! "
 },
 {
   "Timestamp": "2022/05/20 2:12:49 PM CDT",
   "Tell us one short fun fact about yourself!": "I have been to 6 out of 7 continents."
 },
 {
   "Timestamp": "2022/05/20 2:25:07 PM CDT",
   "Tell us one short fun fact about yourself!": "I have 4 holes-in-one in disc golf"
 },
 {
   "Timestamp": "2022/05/20 2:25:29 PM CDT",
   "Tell us one short fun fact about yourself!": "Crafted rings from silver, wood, and resin"
 },
 {
   "Timestamp": "2022/05/20 3:47:30 PM CDT",
   "Tell us one short fun fact about yourself!": "I have a radish spirit tattoo"
 },
 {
   "Timestamp": "2022/05/22 2:41:33 PM CDT",
   "Tell us one short fun fact about yourself!": "I've worked with elephants for a summer."
 },
 {
   "Timestamp": "2022/05/23 1:23:18 PM CDT",
   "Tell us one short fun fact about yourself!": "I have lived in 1 country in North America, 1 country in South America, and 4 countries in Africa"
 },
 {
   "Timestamp": "2022/05/23 1:23:48 PM CDT",
   "Tell us one short fun fact about yourself!": "I hitched-hiked through Arizona, New Mexico and Colorado as a 4 year old with my brother, sister and baby-sitter."
 },
 {
   "Timestamp": "2022/05/23 1:24:51 PM CDT",
   "Tell us one short fun fact about yourself!": "The most the most expensive stuffed animal I own is $600"
 },
 {
   "Timestamp": "2022/05/23 1:32:45 PM CDT",
   "Tell us one short fun fact about yourself!": "I am left-handed"
 },
 {
   "Timestamp": "2022/05/23 1:42:28 PM CDT",
   "Tell us one short fun fact about yourself!": "I got my first gray hair in 6th grade."
 },
 {
   "Timestamp": "2022/05/23 2:01:55 PM CDT",
   "Tell us one short fun fact about yourself!": "I was born in Las Vegas, Nevada"
 },
 {
   "Timestamp": "2022/05/23 2:21:53 PM CDT",
   "Tell us one short fun fact about yourself!": "I lived in a van for the past 5 years before starting Turing."
 },
 {
   "Timestamp": "2022/05/23 2:36:13 PM CDT",
   "Tell us one short fun fact about yourself!": "I like to ruuun"
 }
]
