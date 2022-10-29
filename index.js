import express, { response } from 'express';
import FilterMiddleWare from './middleware/FilterMiddleware.js';

const app = express();
const PORT = '3000';

const  users  = [
  { id:1, firstName: 'b1', lastName: 'hello' },
  { id: 2, firstName: 'b2', lastName: 'mello' },
]; 

app.use(express.json()); //middleware json para di undefined

//.........................................................................101: task1
app.get('/', (request, respond) => {
  respond.json({ message: 'hello world' });
  
});


//.........................................................................101: task2 , task 6
//app.post('/users', ValidateEmailMiddleware, (request, response) => {  
//return response.status(201).json(request.body); 


//});

//.........................................................................101: task2 , task 3, task 6

app.post('/users', FilterMiddleWare, (request, response) => {
  
  const newUser = {
    firstName: request.firstName,
    lastName: request.lastName,
    email: request.email, //  expected thanks to filtermiddleware
  };

  //.........................................................................101: task4

  users.push(newUser); //push newuser in users array
  response.status(201).json(newUser);
});


  //.........................................................................101: task5
//get all users through this route
app.get('/users', (request, response) => {
  response.json(users);
});


app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));