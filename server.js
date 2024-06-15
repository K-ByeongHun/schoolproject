const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB 연결 설정 (예: 로컬 MongoDB)
mongoose.connect('mongodb://localhost:27017/signupDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Body-parser 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS 설정 (필요한 경우)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// 회원가입 라우트
app.post('/signup', (req, res) => {
  const { email, name, password } = req.body;

  const newUser = new User({
    email,
    name,
    password
  });

  newUser.save((err) => {
    if (err) {
      res.status(500).send('Error saving user.');
    } else {
      res.status(200).send('User registered successfully.');
    }
  });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
app.post('/signup', (req, res) => {
  const { email, name, password } = req.body;

  // 요청된 데이터 콘솔에 출력
  console.log(`Received data: Email=${email}, Name=${name}, Password=${password}`);

  const newUser = new User({
    email,
    name,
    password
  });

  newUser.save((err) => {
    if (err) {
      res.status(500).send('Error saving user.');
    } else {
      res.status(200).send('User registered successfully.');
    }
  });
});
 
