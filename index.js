const express =  require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use(require('./src/routes/router'));

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

app.listen(process.env.PORT||3000);

console.log('Server on port 3000');