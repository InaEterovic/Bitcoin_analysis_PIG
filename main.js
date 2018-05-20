
//---libraries-----------------------------------------------/

const Twit = require('twit');  //import the library twit
const config = require('./config');  //import config file
const fs = require('fs'); //import librari to save files int txt

//--params-----------------------------------------------------/

// params to save the file
  const path = '/Users/rodrigotorricodelcastillo/Desktop/test';

//twiter query params

  twitList = [];

  let params = { 
    q: 'bitcoin lang:es ',
    count: 5
  };

//-functions--------------------------------------------------/

//twitter functions

  function consoleTwits(err, data, response) {
    console.log(data.statuses);
  };

  function setTwitList(err, data, response) {
    for ( let i = 0; i < data.statuses.length; i++ ){
      twitList.push(data.statuses[i].id);
      twitList.push(data.statuses[i].text);
    }
    saveFile(path,twitList);
  }



//file tunctions:

  function saveFile(path,content) {
    fs.writeFile( path, content, saveStatus);
  }

  function saveStatus(err) {
    if (err) {
      return console.log(err)
    } else {
      console.log("The file was saved!");
    } 
  }; 

//--------------------------------------------------------/

let twit = new Twit(config); // new instance
twit.get('search/tweets', params, setTwitList);

