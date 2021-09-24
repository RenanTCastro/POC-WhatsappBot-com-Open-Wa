const wa = require('@open-wa/wa-automate');
const express = require('express');
const cors = require('cors');

// Enviar mensagem
function sendMessage(client, number, message) {
  client.sendText(number, message);
}

// Chama função de enviar mensagem
const callSendMessage = ( number, message) => {
  wa.create().then(client => sendMessage(client, number, message));
}

// API
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

// Controller
const sendText = (req, res) => {
  let number = "557799364602@c.us";
  let message = "Testando"
  callSendMessage(number, message)
  res.send({ status: 'Enviado mensagem!' })
}

// Rotas e ativar servidor
app.post('/send', sendText);
app.listen(9000, () => console.log('Server ready!'));
