const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/contactForIdea');


  } catch (error) {
    // console.error('Error connecting to MongoDB:', error);
  }
}

main(); // Call the main function to establish the MongoDB connection


const contactSchema = new mongoose.Schema({
  FullName: String,
  Phonenmbr: String,
  Email: String,
  Address: String,
  Message: String,
});

const contact = mongoose.model('contact', contactSchema);


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/Weblog', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Weblog.html'));
});
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services.html'));
});
app.get('/Our-values', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Our Values.html'));
});
app.get('/Case-study', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'case-study.html'));
});

app.post('/', (req, res) => {
  console.log('Received data:', req.body);

  var myData = new contact(req.body);
  myData
    .save()
    .then(() => {
      console.log('Data saved successfully');
      res.sendFile(path.join(__dirname, 'public', 'popup.html'));
    })
    .catch((error) => {
      console.error('Error saving data to database:', error);
      res.status(400).send('Item was not saved');
    });
});

app.listen(3000);
module.exports = app;




  



