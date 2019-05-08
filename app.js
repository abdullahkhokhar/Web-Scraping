const jobNum = document.getElementById('job-number');
document.getElementById('subButton').addEventListener('click', getTime);

// url will be: http://vmmkweb/jobinfo/jobinfo.aspx?jobno=${jobNum}
// 221163 -- Sample job number

function getTime(){
  // bring in our dependancies, require these packages
  let axios = require('axios');
  let cheerio = require('cheerio');

  // now scrape by making a get request with axios
  // Axios can be used in both browser and node.js platforms

  // this first get request will be used to scrape and make the url we need
  /*
  Example URL to scrape for:
  http://vmmkweb/jobinfo/dumpgenbomdwfcgi-4.aspx?BOMDATE=5-8-2019&PROJECT=221163&QUERY=100&FORMAT=1&ITEM=L709C00000000000&TOP=L709C00000000000
  */
  axios.get("http://vmmkweb/jobinfo/jobinfo.aspx?jobno=221163")
    .then((response) => {
        if(response.status === 200) {
          // sucsessfull call to get
          const html = response.data;
          const $ = cheerio.load(html);

          const jobTable = $('#tbl_JobInfo');
          const table = jobTable.find('table');
          console.log(table.text());

    }
    }, (error) => console.log(err) );

}
