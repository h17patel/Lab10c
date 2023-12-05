const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const details = [
    { difficulty: 'Database Connection Issue', solution: 'Double-check database credentials and connection strings. Ensure the database server is running.' },
    { difficulty: 'CORS Policy Blocking Requests', solution: 'Configure the server to handle Cross-Origin Resource Sharing (CORS) properly. Use the cors middleware in your Express app.' },
    { difficulty: 'Undefined Variable Error in Template', solution: 'Make sure to pass all required variables to the template. Check for typos and ensure the variables are correctly named.' },
    { difficulty: 'Route Not Found Error', solution: 'Verify the routes in your Express app. Ensure that the requested URL corresponds to a defined route.' },
    { difficulty: 'Missing Dependency', solution: ' Check your project dependencies. Run npm install to install any missing packages. Update packages if needed.' },

];

app.get('/', (req, res) => {
    res.render('index', { details });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

