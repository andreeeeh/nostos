# NOSTOS - The Concept

Nostos is a community based app focussed around visiting locations in the real world and then writing about your perceptions of the places you go to. The app is framed in a sci-fi theme, with the user taking on the role of an alien researcher visiting Earth.

On opening the map the user is presented with several points of interest to visit. After selecting one they will not be able to proceed until physically within a 100m radius of the point (using native GPS tracking). Once at said location, the user is able to write an entry log for this place, being prompted to look around and engage, writing some meaningful content.

Other users are then able to rate and comment on these entries and receive awards for interacting with the app.

# The Tech

Front-end  
- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Google Places API](https://developers.google.com/maps)
- [Dall-E](https://openai.com/dall-e-2)
- [Node.js](https://nodejs.org/en)
- [Jest.js](https://jestjs.io/) with Supertest  
- [Prisma](https://www.prisma.io/)
- [AWS](https://aws.amazon.com/)

[Figma](https://www.figma.com/) and [Trello](https://trello.com/) for design and task management.  

# The Creators

This project was created in two-weeks by the following contributors:

[Andre Pangoni](https://github.com/andreeeeh),  
[Diego Saborido](https://github.com/diegoss-github),  
[Dana Yachini](https://github.com/DanaYachini),  
[Andrew MacShane](https://github.com/amacsha),  
[Dominic Stewart-Smith](https://github.com/dominicstewartsmith).  

# Demo Video

[Visit YouTube](https://youtu.be/tUzWbjgdQwU)

# Screenshots
![image](https://github.com/andreeeeh/nostos/assets/144232373/ee40e272-74ca-4cf0-b785-50db5d3f2712)
![image](https://github.com/andreeeeh/nostos/assets/144232373/2982b00b-ceed-4a83-8215-a98d1dccedc5)
![image](https://github.com/andreeeeh/nostos/assets/144232373/7ca108e6-3d1a-48d0-a7bb-5a0a9f18d7e1)
![image](https://github.com/andreeeeh/nostos/assets/144232373/bd978494-5d76-4c0b-be0c-efc0620f1fb4)
![image](https://github.com/andreeeeh/nostos/assets/144232373/932c1de4-37d4-4fa2-9eea-67950ee58c97)
![image](https://github.com/andreeeeh/nostos/assets/144232373/24003d47-a09b-4a5c-b4a6-c3286cc6d3f5)

# Instructions for running

In ./server:
Create a .env file, following the example of .env.example.
You will need a Postgres database URI, and a secret key of your choice for encrypting user data.
Run the commands `npm i`, and once that is finished `npm run initDB` to populate your database with some location data.

In ./client you will also need an .env file containing your local IP address.
Then run `npm i`

Finally from ./server you can run `npm run dev` to create the server, and simultaneously from ./client run `npm run start` to build the app and open it on Expo.
