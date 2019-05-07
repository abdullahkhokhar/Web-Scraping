const jobNum = document.getElementById('job-number');
document.getElementById('subButton').addEventListener('click', getTime);

// url will be: http://vmmkweb/jobinfo/jobinfo.aspx?jobno=${jobNum}


function getTime(){
  // bring in our dependancies
  const request = require('request');
  const cheerio = require('cheerio');

  request(`http://vmmkweb/jobinfo/jobinfo.aspx?jobno=221163`, (error, response, html) => {
    if(!error && response.statusCode == 200){
      // succsessfull http response and no error
      const $ = cheerio.load(html);
      const entireTable = $('#tbl_JobInfo');
      const output = entireTable.find('table').text();

      console.log(output);
    }

  });
}
