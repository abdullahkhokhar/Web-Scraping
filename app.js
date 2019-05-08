//const jobNum = document.getElementById('job-number');
document.getElementById('subButton').addEventListener('click', getTime);

// url will be: http://vmmkweb/jobinfo/jobinfo.aspx?jobno=${jobNum}

function getTime(){
  // bring in our dependancies, require these packages
  let axios = require('axios');
  let cheerio = require('cheerio');
  let fs = require('fs');

  // now scrape by making a get request with axios
  axios.get('http://www.espncricinfo.com')
    .then((response) => {
        if(response.status === 200) {
          const html = response.data;
          const $ = cheerio.load(html);

          const headline = $('.headlineStack');
          const title = headline.find('h1').text();
          console.log(title);

    }
    }, (error) => console.log(err) );

}
