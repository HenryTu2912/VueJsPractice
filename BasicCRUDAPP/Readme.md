This app will use Node, npm, MongoDB Compass, and Postman
Use libraries:
- express: small framework for Node that provides many useful features, such as routing and middleware
- cors: Express middleware to parse the body of incoming requests
- mongoose: a MongoDB ODM (the NoSQL equivalent of an ORM) for Node. It provides a simple validation and query API to help you interact with your MongoDB database
- Nodemon: a simple monitor script which will automatically restart a Node app when file changes are detected

In this project, we use Vue CLI to scaffold the project:
- npm i -g @vue/cli
- In the root folder of the project, run vue create front-end

Then install libraries
- axios - a Promise-based HTTP client which will allow us to make Ajax requests from our front end to our back end.
- semantic-ui-css - a lightweight, CSS-only version of Semantic UI
- vue-flash-message - a Vue flash message component which we will use to display information to the user.