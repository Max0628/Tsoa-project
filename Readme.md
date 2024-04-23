# Project structure
Backend layers
- model : connect to prisma and database
- service : do the jwt auth
- controller : setting the url route

API 
1. **GET /user/{name}**:
   - This route retrieves user data based on the provided name.
   - Requires JWT authentication (`Security('jwt')`).
   - Handled by the `getUser` method.

2. **GET /user/profile**:
   - This route returns the profile data of the current user.
   - Requires JWT authentication (`Security('jwt')`).
   - Handled by the `profile` method.

3. **POST /user/login**:
   - This route is used for user login and token retrieval.
   - Expects a request body containing email and password.
   - Handled by the `login` method.
   
4. **POST /user**:
   - This route is used to create a new user.
   - Expects a request body containing name, email, and password.
   - Handled by the `createUser` method.
- 

# tools

- Typescript/mySQL/Prisma/Express/React
-plugin：Tsoa/Swagger

# commands

-  `npm run dev`     test,to compile Typescript file
-  `npm run build`   build,compile Typescript to Javascript
-  `npm run start`   execute Javascript file


frontend port 3000
backend port 3001
