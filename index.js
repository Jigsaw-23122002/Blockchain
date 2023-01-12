const express = require("express");
const Blockchain = require("./blockchain");
const bodyParser = require("body-parser");
const PubSub = require("./publish_subscribe");

const app = express();
const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain });

setTimeout(() => {
  pubsub.broadcastChain();
}, 1000);

app.use(bodyParser.json());
app.get("/api/blocks", (req, res) => {
  res.json(blockchain.chain);
});

app.post("/api/mine", (req, res) => {
  const data = req.body;
  blockchain.addBlock({ data });
  res.json(blockchain.chain);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
