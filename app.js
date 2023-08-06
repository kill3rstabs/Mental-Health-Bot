const express = require('express');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set the 'views' folder
app.set('views', path.join(__dirname, 'views'));

const port = 3000;

// Check for required environment variables
if (!process.env.MONGODB_URI) {
  console.error('Please provide the MONGODB_URI in the .env file.');
  process.exit(1);
}

// Database connection
main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(session({
  secret: 'Our little secret.',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const foundUser = await User.findOne({ email: username });

    if (foundUser && foundUser.password === password) {
      res.render('secrets');
    } else {
      res.render('loginFailed', { error: 'Invalid username or password' });
    }
  } catch (err) {
    console.log(err);
    res.render('login', { error: 'Error occurred during login' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.username,
      password: req.body.password,
    });

    await newUser.save();
    res.render('secrets');
  } catch (err) {
    console.log(err);
    res.render('register', { error: 'Error occurred during registration' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
