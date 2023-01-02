const Block = require("./block.js");
const cryptoHash = require("./crypto_hash.js");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }
  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      prevBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }
  static isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false;
    }
    for (let i = 1; i < chain.length; i++) {
      const { timestamp, prevHash, hash, nonce, diff, data } = chain[i];
      const lastDifficulty = chain[i - 1].diff;
      const realLastHash = chain[i - 1].hash;
      if (prevHash !== realLastHash) {
        return false;
      }
      const validatedHash = cryptoHash(timestamp, prevHash, nonce, diff, data);
      if (hash !== validatedHash) {
        return false;
      }
      if (Math.abs(lastDifficulty - diff) > 1) {
        return false;
      }
    }
    return true;
  }
  replaceChain(chain) {
    if (chain <= this.chain.length()) {
      console.error("The incoming chain is not longer.");
      return;
    }
    if (!Blockchain.isValidChain(chain)) {
      console.error("The incoming chain is not valid.");
      return;
    }
    this.chain = chain;
    return;
  }
}

// const blockchain = new Blockchain();
// blockchain.addBlock({ data: "This is block no.1" });
// blockchain.addBlock({ data: "This is block no.2" });
// console.log(Blockchain.isValidChain(blockchain.chain));
// console.log(blockchain);

module.exports = Blockchain;
