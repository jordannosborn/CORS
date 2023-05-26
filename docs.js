/************************************************************************
 * Node.js is a server-side JavaScript runtime environment that allows developers to build fast and
 *  scalable network applications. When building web applications, 
 * it's common to encounter Cross-Origin Resource Sharing (CORS) issues. 
 * CORS is a security feature built into web browsers that prevents web pages from making
 * requests to a different domain than the one the page originated from.

 * To implement CORS in a Node.js application, you can use the cors package from npm. 
 * The cors package provides a middleware function that can be used with the express framework to enable CORS in your application.

    Here's an example of how to use the cors package:

 */
    const express = require('express');
    const cors = require('cors');
    
    const app = express();
    
    const data = [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Doe', age: 25 },
      { id: 3, name: 'Bob Smith', age: 40 },
    ];
    
    // Enable CORS for all routes
    app.use(cors());
    
    // Return the data as JSON
    app.get('/api/data', (req, res) => {
      res.json(data);
    });
    
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

/*******************************************************
 * In this example, the data array contains some sample data. 
 * The cors middleware is used to enable CORS for all routes in the application. 
 * The /api/data route returns the data array as JSON.

 * To test this API, you can use a tool like curl or Postman. 
 * For example, you can run the following command in your terminal:
 * 
 
curl http://localhost:3000/api/data

[
  { "id": 1, "name": "John Doe", "age": 30 },
  { "id": 2, "name": "Jane Doe", "age": 25 },
  { "id": 3, "name": "Bob Smith", "age": 40 }
]

**************************************************************************************
You can test that CORS is working as expected by sending a request to the API from a 
different origin than the one the API is hosted on.

For example, suppose your API is hosted on http://localhost:3000 and you want to test CORS 
by sending a request from http://google.com.au. Here's how you can do it using the curl command:

curl -H "Origin: http://google.com.au" http://localhost:3000/api/data

The -H option is used to set the Origin header in the request to http://google.com.au. 
This simulates a request coming from a different domain than the one the API is hosted on.

If CORS is working correctly, the API should reject the request and return a CORS error. 
The error message will depend on the browser and the specific error condition, 
but it will typically look something like this:

Access to XMLHttpRequest at 'http://localhost:3000/api/data' from origin 
'http://google.com.au' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
 header is present on the requested resource.

 This error message indicates that the API is rejecting the request because 
 the Access-Control-Allow-Origin header is not present in the response. 
 The Access-Control-Allow-Origin header is used by the browser to determine whether 
 the response is allowed to be accessed by the requesting domain

To fix this error, you need to modify the API to include the Access-Control-Allow-Origin header 
in the response. 
You can do this by adding the cors middleware to your Express application, 
as shown in the previous example.
see index.js

 ************************ test cors using POSTMAN *************************
1. Open Postman and create a new request.
2. Set the HTTP method to GET and set the request URL to http://localhost:3000/api/data.
3. Click on the Headers tab below the URL field.
4. Add a new header with the key Origin and the value https://www.google.com.au (or https://www.google.com if you want to test with google.com).
5. Click on the Send button to send the request.

If your API is properly configured to allow requests from the specified origin, 
you should receive a 200 OK response with the data in JSON format. 
If your API is not properly configured to allow requests from the specified origin, 
you should receive a 403 Forbidden response.

Note that you can also test with different HTTP methods (e.g., POST, PUT, DELETE) and 
with different request bodies to test your API thoroughly.
*/