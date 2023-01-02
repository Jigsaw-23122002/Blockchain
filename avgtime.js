const Blockchain = require("./blockchain");
const blockchain = new Blockchain();

let prevTimestamp, nextTimestamp, nextBlock, timeDiff, averageDiff;
const times = [];

blockchain.addBlock({ data: "This is sample block." });
console.log(blockchain.chain[blockchain.chain.length - 1]);

for (let i = 0; i < 1000; i++) {
  prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;
  blockchain.addBlock({ data: `Block ${i}` });
  nextBlock = blockchain.chain[blockchain.chain.length - 1];
  nextTimestamp = nextBlock.timestamp;

  timeDiff = nextTimestamp - prevTimestamp;
  times.push(timeDiff);

  averageTime = times.reduce((total, num) => total + num) / times.length;

  console.log(
    `Time to mine block : ${timeDiff} ms, Diff : ${nextBlock.diff}, Average time : ${averageTime} ms`
  );
}
