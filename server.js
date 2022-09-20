//Core Modules & Dependencies
const express = require('express');
const { default: mongoose } = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser')
const app = express();

// Require All Routes
const homeRouter = require('./routes/blogsRoutes/homeRoute');
const blogsRouter = require('./routes/blogsRoutes/blogsRoute')
const AuthRouter = require('./routes/blogAuthRoutes/blogAuthRoutes')
  

// Port Address
const PORT = process.env.PORT || 8000;

// views and other middlewares
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, 'public', 'css', 'AuthCss')));
app.use(express.static(path.join(__dirname, 'public', 'css', 'BlogsCss')));
app.use(express.static(path.join(__dirname, 'public', 'image')));
app.use(express.json())
app.use(cookieParser())

app.use(express.urlencoded({extended: true}));


// DataBase Connection
const DBURI ='mongodb+srv://benteezy44:benteezy44@benteezy44.f9opiaj.mongodb.net/?retryWrites=true&w=majority'                                                  //"mongodb://localhost:27017/BlogSite"
    mongoose.connect(DBURI,
    {
         useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
      })
        .then((data) => {
            app.listen(PORT, () => console.log(`server listening on port: ${PORT} and connected to DB @ ${DBURI}`))

        })
        .catch((err) => console.log(err))


// Routes 
app.use(homeRouter);
app.use(blogsRouter);
app.use(AuthRouter)