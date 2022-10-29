
export default function FilterMiddleWare(request, response, next) {


  const { id, firstName, lastName, email } = request.body; 
  
  
  
  request.firstName = firstName;
  request.lastName = lastName;
  request.email = email;
  request.id = id;
  
  
  next();
  }
  