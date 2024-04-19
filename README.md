# infoplus

### Pbinfo replica with all the base functionality done:

- accounts, user dashboard
- code compilation
- category system for exercises
- exercises
- sending solutions to exercises
- ability to create exercises, and write tests for them, etc.

# Technologies used

- Next.JS for frontend and backend
- MongoDB for the database

# How to run

- install MongoDB and create the collections listed below
- run `npm install`
- run `npm run dev` for development
- run `npm run prod` for production, then `npm start` for preview

### MongoDB collections needed to work

- `exercises`
- `exercises_hidden` - to store information such as official solution, and hints
- `solutions`
- `users`
