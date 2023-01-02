const mine_rate = 1000; // 1sec
const initial_diff = 2;
const genesis_data = {
  timestamp: 1,
  prevHash: "0000000000000000000000000000000000000000000000000000000000000000",
  hash: "2b959579f85ebf7f81f3ad5875a444eed1b7694ff0a9d558edd2a7699df0b8e7",
  diff: initial_diff,
  nonce: 0,
  data: [],
};

module.exports = { genesis_data, mine_rate };
