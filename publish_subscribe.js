const redis = require("redis");

const channel = {
  test: "test",
  blockchain: "blockchain",
};

class PubSub {
  constructor({ blockchain }) {
    this.publisher = redis.createClient();
    this.subscriber = redis.createClient();
    this.blockchain = blockchain;
    this.subscriber.subscribe(channel.test);
    this.subscriber.subscribe(channel.blockchain);
    this.subscriber.on("message", (c, message) => {
      this.handleMessage(c, message);
    });
  }
  handleMessage(c, message) {
    console.log(
      `Message recieved on channel : ${c} and the Message : ${message}`
    );
    const parseMessage = JSON.parse(message);
    if (c === channel.blockchain) {
      this.blockchain.replaceChain(parseMessage);
    }
  }
  publish({ c, message }) {
    this.publisher.publish(c, message);
  }
  broadcastChain() {
    this.publish({
      channel: channel.blockchain,
      message: JSON.stringify(this.blockchain.chain),
    });
  }
}

// const checkPubSub = new PubSub();
// setTimeout(
//   () => checkPubSub.publisher.publish(channel.test, "Hello channel"),
//   1000
// );

module.exports = PubSub;
