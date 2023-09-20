const { Octokit } = require("@octokit/core");
const https = require('https');
const fs = require('fs');

const octokit = new Octokit({ auth: process.env.GITHUB_API });

const getContent = async () => {
  const response = await octokit.request('GET /repos/ahaywood/broken-comb/contents/src/components', {
    owner: 'ahaywood',
    repo: 'https://github.com/ahaywood/broken-comb/',
    path: 'tree/main/src/components',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  const fileUrl = response.data[0].download_url;
  const fileName = response.data[0].name;

  const file = fs.createWriteStream(fileName);
  https.get(fileUrl, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('File downloaded');
    });
  });
}

getContent();