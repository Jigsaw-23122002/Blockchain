const { genesis_data } = require("./config.js");
const cryptoHash = require("./crypto_hash.js");

class Block {
  constructor({ timestamp, prevHash, hash, data }) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
  }
  static genesis() {
    return new this(genesis_data);
  }
  // The above function is static because everytime new block is created we do not need to create new genesis block. So the genesis block is common to all the objects(new blocks) of this class.
  static mineBlock({ prevBlock, data }) {
    const timestamp = Date.now();
    const prevHash = prevBlock.hash;
    return new this({
      timestamp,
      prevHash,
      data,
      hash: cryptoHash(timestamp, prevHash, data),
    });
  }
}

// Genesis Block (First Block)
// const genesisBlock = Block.genesis();
// console.log(genesisBlock);

// Mining Block
// const block_01 = Block.mineBlock({
//   prevBlock: genesisBlock,
//   data: "Block no.1",
// });
// console.log(block_01);

module.exports = Block;
