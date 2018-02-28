var octokit = require('./build')()

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
