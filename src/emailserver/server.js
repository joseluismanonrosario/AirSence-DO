const express = require('express'),
  app = express(),
  port = 3005,
  dotenv = require('dotenv'),
  cors = require('cors')
  const formData = require('form-data');
  const Mailgun = require('mailgun.js');

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});

app.post('/api/email', (req, res) => {
    const {nombre, telefono, email, message} = req.body;
    const messageData = {
        from: 'Airsense <airsences3@gmail.com>',
        nombre: `${nombre}`,
        telefono: `${telefono}`,
        email: `${email}`,
        text: `${message}`
      };    

      client.messages.create(process.env.MAILGUN_DOMAIN, messageData)
      .then((e) => {
        res.send({message: 'Email sent succesfully!'})
        console.log(e.message)
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
            message: 'something went wrong in sending email!'
        })
      });

})

app.use('/', (req, res) => {
    res.send('Mailgun API')
})

app.listen(port, () => {
    console.log(`running on http://localhost:${port}`)
})