const { genesis_data, mine_rate } = require("./config.js");
const cryptoHash = require("./crypto_hash.js");

class Block {
  constructor({ timestamp, prevHash, hash, data, nonce, diff }) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.diff = diff;
  }
  static genesis() {
    return new this(genesis_data);
  }
  // The above function is static because everytime new block is created we do not need to create new genesis block. So the genesis block is common to all the objects(new blocks) of this class.
  static mineBlock({ prevBlock, data }) {
    let hash, timestamp;
    const prevHash = prevBlock.hash;
    let { diff } = prevBlock;

    let nonce = 0;
    do {
      nonce++;
      timestamp = Date.now();
      diff = Block.adjustDiff({
        originalBlock: prevBlock,
        timestamp,
      });
      hash = cryptoHash(timestamp, prevHash, data, nonce, diff);
    } while (hash.substring(0, diff) !== "0".repeat(diff));

    return new this({
      timestamp,
      prevHash,
      data,
      diff,
      nonce,
      hash,
    });
  }
  static adjustDiff({ originalBlock, timestamp }) {
    const { diff } = originalBlock;
    const difference = timestamp - originalBlock.timestamp;
    if (diff < 1) {
      return 1;
    } else if (difference > mine_rate) {
      return diff - 1;
    } else {
      return diff + 1;
    }
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
