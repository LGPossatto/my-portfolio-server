# About
This is a NodeJS and Express server with MongoDB as a database, 
here you can access my portfolio and get information about my projects through the server API. 
You can find the public folder source files  here https://github.com/LGPossatto/my-portfolio, 
it was used gulp to minify and organize the files.  
  
There are two links to access the site, the first can be accessed here https://lg-portfolio-api.herokuapp.com/, 
using Heroku's services. The second one is posted here https://luizgustavo.netlify.app/ on Netlify and is a bit slower than using the Heroku one because, even if the site opens properly, it still needs to go to the Heroku server to get the project information.  
  
### How to interact with the API  
For everything you want to do other than Get request, you will need an authorization key that must be sent with the header 
in this format: "Bearer AUTH_KEY".  
  
#### Mongoose Project schema:  
```
const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, dropDups: true },
    desc: { type: String, required: true },
    git_url: { type: String, required: true },
    site_url: { type: String, required: true },
    tech: {
      stack: { type: String, required: true },
      tech_list: { type: [String], required: true },
    },
  },
  { timestamps: true }
); 
```
  
#### Get request:  
- Path: api/projects  
Get every project  
  
#### Post request:  
- Path: api/projects  
Post new project to the database  
* The data must be sent with the body as application/json and has to be in the schema above  
ex:  
```
{  
  "name": "Example Name",  
  "desc": "This is a Example",  
  "git_url": "https://github.com/YOUR_GIT_URL/example",  
  "site_url": "https://example.com/",  
  "tech": {  
    "stack": "fullstack",  
    "techList": ["example 1", "example 2"],  
  }  
}  
```
  
#### Put request:  
- Path: api/projects/:project-id  
Update the project with _id === project-id  
* The data must be sent with the body as application/json and has to have the fields you want to update  
ex:  
```
{  
  "name": "Updated Name",  
  "desc": "New Description"
}  
```
  
#### Delete request:  
- Path: api/projects/:project-id  
Delete the project with _id === project-id  
  
##### Tech Utilized  
- NodeJS  
- Express  
- MongoDB  
- Mongoose  
