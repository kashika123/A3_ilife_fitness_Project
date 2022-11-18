# ilife-fitness-dev-it-out
# Installation

- install nvm ( recommended ) or Node v14.18.1
`nvm use v14.18.1`

## In /server:

- npm install
- npm run seed:data
- npm start

# In /client: 
- npm install
- npm start

if you are on local ->
- change that part in client folder to match your local server's address
before -> `const apiUrl = 'https://ilife-fitness-api.herokuapp.com/'`
in local mode -> `const apiUrl = 'http://localhost:3001/'`
