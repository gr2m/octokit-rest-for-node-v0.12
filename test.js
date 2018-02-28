var octokit = require('./build')()

if (!process.env.GH_TOKEN) {
  throw new Error('must set GH_TOKEN')
}

octokit.authenticate({
  type: 'token',
  token: process.env.GH_TOKEN
})

octokit.repos.get({
  owner: 'octokit',
  repo: 'rest.js'
})

.then(function () {
  console.log('ok')
})

.catch(function (error) {
  console.log(error.stack)
  process.exit(1)
})
