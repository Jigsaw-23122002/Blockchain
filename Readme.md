# Blockchain

![image](https://images.idgesg.net/images/article/2017/10/fintech_financial_technology_blockchain_network_thinkstock_664868402-100739353-large.jpg)

## Introduction

Blockchain is a disruptive technology.
Disruptive technology is a technology that completely changes the traditional technology into a more enhanced version.
For eg: Tanga was replaced by car, bus and other vehicles as they are fast and more feasible as compared to the tanga. So they are disruptive technology. Similarly Email, Internet is also the disruptive technology in the communication environment.

(Blockchain is used for trust environment on internet).

## What is Trust ?

Let's consider an example of buying a coffee from the reputed coffee store which promises to provide some good ingredients into its coffee. But how can we actually know that the coffee which the reputed store providing actually contains those nutrients.
So Using blockchain, we can have some trust under such conditions.

## Blockchain Technology

In layman language, blockchain is a decentralized, immutable and transparent ledger.
(Ledger is like a entry book or data book which keeps the track of all transaction).

Lets consider the example of a shopkeeper selling a flour to a man in debt of rupees 1000 and enters this debt record into its ledger book in front of man. But after the man departs from the shop, the shopkeeper changes this 1000 rs to 2000 rs. So this is wrong.

In case of blockchain, this record is stored in the BLOCK and this CHAIN of BLOCKS(records) form the ledger book. In blockchain, the data once feed to the block can NEVER be changed.
Now whenever some change is done to the blockchain in one device, the changes if valid are reflected in all the other copy of blockchain available with all the devices on the network. So this means that blockchain is decentralized.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/01.png)

This gives rise to the question in our mind that - the copy of ledger is available with everyone on the network. So everone will be able to see our transactions. But this is not the case, the block contains all its data encrypted and its data can only be accessed by the one who are the owner of the block in the blockchain. So the data is very safe.

## Applications Of Blockchain

1. Product tracking (can be used to check whether the product is original or fake)
2. Smart contract (It is special type of program that runs on etherium blockchain)

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/02.png)

3. International wire transfer (transfering money from one country format to another country format. In case of centralized system this is disadvantageous due to the high cost charged by the intermediate banks and the time taken for the conversion is also high.Using blockchain cuts down the cost and time by larger extent).
4. Health Care System
   Consider an example where a person visits a hospital 'A' for all health realted problem he has. So all the details about the diagnonis of the person is stored in the database of hospital 'A' and suppose in future the same person goes to hospital 'B' then they will not have any details about the previous diagnosis of the person. So this was the problem of centralized database of the hospitals.
   Blockchain helps to decentralize this data and helps the hospital 'B' to also access the previous diagnosis details of the person.

## Hashing Block

The block in the blockchain looks like -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/03.png)

The Hash part in the block acts like the fingerprint of the block.It is unique for each block in the blockchain. This hash is generated using SHA-256 algorithm.
Whenever any data is entered into the block, it is first passed through the SHA-256 algorithm which generates a string of length 64 characters and each character is of 4 bits leading to the total 256 bits data generation.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/04.png)

The first block in the block chain is known as the genesis block as it does not have any previous hash

Properties of hashing i blockchain :

1. It is one way i.e. the from the data, we can generate the hash but from hash we can never generate the data.
2. The algorithm is deterministic i.e. for same data, the hash will always be same no matter how many times we pass the data.
3. Fast computation i.e. the hash is generated at faster rate.
4. Withstand collision i.e. the hash cannot be easily decrypted by the hackers.
5. Avalache effect (Even the smallest change results in the drastic change in the newly generated hash)

## Immutable Ledger

We know that every block in the blockchain stores the hash of the previous block. So suppose the hacker change the content of one of the block of the blockchain. Now due to this change in data the hash of the block also changes due to the avalanche effect property of the hashing algorithm. Now as this hash changes, this changed hash need to be reflected in the next block which storing the hash of the changed block as the previous hash. This leads to the change in the content of the next block leading to change in its hash too. So it is like a domino effect and the entire blockchain from the changed block becomes corrupted and all have to be changed.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/05.png)

## P2P Network

In P2P networks, there is no centralized database and the data is kept distributed on the clients on the networks and sometimes copy of the same data is also kept on multiple clients on the network.
This eliminates the risks due to hacking.(There is no centralized server for hackers to hack it. Multiple copies of data are available on multiple clients on the network so if one of the client is hacked and some changes are done on the copy of data reciding in the hacked computer then the same data can be retirived from another client on the network)

## How does distributed P2P network work in blockchain ?

Suppose the network is as follows shown in figure. Now suppose A mines a block and add this newly mined block into its blockchain. So after adding this new block the blockchain has changed and all the other devices should also be having the same new block chain so A reports the change to the devices B, E and F on the network. If more than 50% of the neighbours approve the addition of new block by A then all the neighbours are modified with new block and similarly this process works for their neighbors too.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/06.png)

1. Why do we need distributed P2P in blockchain ?

- Suppose Hacker hacks the blockchain of device A and changes the blocks in it. As soon as the changes are done in the blockchain of A, the neighbours B, F and E will be notified with the changes to agree and disagree. Obviously the changes will be milacious as it is changed by the hacker so B, E and F will disagree from the changes and the blockchain of A will be again changed back to the original blockchain. So in this way distributed network helps us in getting the blockchain secured from the hackers.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/07.png)

## Blockchain Mining

In this, the group of miners try to solve a particular mathematical problem. A miner who solves that mathematical problem first will get a chance to mine(extract) a block from the mem-pool. Now this mined block is verified by the other miners whether the mined block is valid or not. After the successful verification of the mined block by the other miners on the network the block can be added into the blockchain.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/08.png)

## Byzantine Generals Problem

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/09.png)

This problem is commonly faced in case of distributed computing system.
To understand this problem, let's consider the case where there is a kingdom which has to attacked by the 4 enemies from 4 different directions (N,E,W,S).
Now in ideal case when the conditions was actaully favourable for the attack, all the four enemies would simultaneouly agree to attack onto the kingdom.
But there might be some case when one or more than one enemy can disagree to attack on the kingdom. This is because they might be the traitor among the enemies.
So in actual we don't know whether the disagreement to attack the kingdom was because of some valid reason or they were the traitors.
So this is _Byzantines General Problem_.
So as to avoid this, Miguel Castro provided the solution to this problem called _Byzantine Fault Tolerance_.

Byzantine Fault Tolerance states that the distributed system can tolerate 1/3 of the total population of the network as the network hackers because the decision is always based on the majority so 2/3 will always take the correct decision no matter what decision the remaining 1/3 will take.

## Concensus Protocol

Concensus protocol protects us by preventing the attacks and solves the competing chain problem.
There are two main type of concensus protocols :

1. Proof of work
2. Proof of stake

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/10.png)

- **Preventing attacks**
  <br>We know that when an attacker tries to attack an existing block present somewhere in the middle of the blockchain then this attack can be easily resolved by checking the blockchain with the blockchains present on the other devices in the network.
  But when the attacker tries to add a new corrupt block at the end of the blockchain then this is difficult to recognize whether the block is corrupt or valid because there is no block in the blockchain present on the other devices in the network containing the newly added block with which we can compare.
  Concensus protocol helps us to resolve this problem.
  Whenever the miner tries to add a new block in the blockchain, the other nodes present in the network do not directly add the block into their blockchain too. Instead all the nodes present in the network run an algorithm on the newly added block to check whether it is authenticated block or not.(The time for completely running the algorithm on the newly added block only takes few seconds. This is because checking the mined block is like checking the whether the rubik's cube is solved or not.The solver takes a lot of time for solving the rubik's cube but the checker instead takes only few seconds to check whether it is solved or not)
  Also mining a block is a very costly task for the miners(Very hogh computational power computer is needed and the hardware has to be kept in cool conditions so as to avoid the fire) and they themselve avoid to the add some milacious or corrupt block into the blockchain as the incentives which was meant to be given to them for mining will not be given to them.

- **Competing Chain Problem**
  <br/>Suppose node A and node C simultaneously mine a block and adds the mined block into their respective blockchain. Now the notification is sent to the remaining nodes onto the network by the nodes A and C to change the blockchain of all the other nodes (shown in the diagram below).<br/><br/>
  ![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/11.png)

  <br/>Let's assume that the notification sent by node A reaches node E and F and the notification sent by the node C reaches the node B. So after verifying the validity of the new block, nodes E and F adds them into their blockchain too and similarly node B will also add the new block of node C into its blockchain after verifying its validity.
  So, Node A, E and F have the same blockchain and Nodes B and C have the same blockchain (shown in the diagram below). Now the problem is that within the same network, there exists two different blockchains.<br/><br/>
  ![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/12.png)

  <br/>This problem is known as competing chain problem and to eliminate such difference of blockchain, a simple rule is used - _Eliminate the block having smaller length and keep the one having larger length_.

  Now at this point of time the network will not be able to discard any of the blockchain as the length of both the blockchain is same. So now the network will wait for the new block being added by someone else on the network. Now assuming the computational power of all the nodes on the network same, the chances of blockchain contained by nodes A, E and F to get accepted is more because there are 3 nodes in their favour so chances of them mining a new block is more as compared to the nodes B and C.
  Suppose one among the nodes A, E and F mines a new block, then the length of their blockchain will now be more and hence the entire network will contain the blockchain of A, E and F.
  <br/><br/>
  ![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/12.png)

  Note -

  1. The concensus protocol of the blockchain is much better than the byzantine's general problem as it requires only the 51% of the majority which was 66% in case of byzantine.
  2. All the transaction in the discarded block will be dropped and the miner that had mined the block will not get any reward.
  3. So that's why wait for 6 confirmations before assuming payment to be successful.

# Bitcoin

( Below content is taken from the article - https://8bitsumo.com/difference-between-coin-token-protocol/ )

## What is Cryptocurrency ?

Before we delve into complicated matters, let start at the beginning and explain what cryptocurrencies are and why the name “cryptocurrency” doesn’t capture all the nuances.
I’m sure that by now you know that cryptocurrencies are digital/virtual money. But do you interpret this phrases correctly? In a sense, your money in the bank also could be called “digital” because they exist as a sum in your bank account. But whenever you feel like it, you can go to the nearest machine and withdraw them.
In addition to this, in case someone deceives you, or you pay for something you don’t receive, you can file a complaint, and you’ll probably get part of your money back.

Cryptocurrencies are virtual because they don’t exist as material objects. You can’t touch them, withdraw them, or store them under your mattress. People get cofounded because everybody talks about “coins.” But these coins are not like the one you’ll find in your purse. They are just a string of data, which you transfer from one account to the other and store in cryptocurrency wallets.

No one but you has control over these digital currencies, which is great on the one hand. But on the other, it also means that you’re the only one responsible for keeping your investments safe, and you can’t complain to anyone if someone cheats you.

We call them cryptocurrencies because cryptography is used to secure and validate the transactions and to make sure that no one can create thousands of “coins” easily.

By this point, some of you might be wondering how something that doesn’t exist can be worth something.
But have you actually thought what money is? Economically speaking, money functions as:

1. ​A unit of account
2. ​A store of value
3. A medium of exchange

If we go back in the centuries, we’ll see that people used many goods as currency – metals, pelts, corn, and so on. Banknotes became valuable because they represented gold – a metal, which people deemed precious and rare, and they wanted to have it.

The same is happening with cryptocurrencies. They are valuable because people want to own them. If no one were interested in buying bitcoins or Litecoins, they would be useless and worthless, and you wouldn’t be reading this article.

Today, when people hear “cryptocurrency”, they immediately think Bitcoin. Bitcoin is the first among many. There are “coins” and “tokens” which are regarded as cryptocurrencies, but they don’t have the same functions. What’s more, people don’t use them as a medium of exchange, e.g. to buy and sell things.

## What is protocol ?

So, if the blockchain is the idea, the protocols are the sets of rules, which define the idea. I know that it’s hard to comprehend, so let me give you an example.

Think about the blockchain as language itself – the concept of communicating with other people with words/signs. But not everybody speaks the same language. So protocols would be all those individual languages that exist – like English, French, Spanish, which have their own sets of grammar rules. They are all based on the same idea – to communicate – but execute it differently.

Wait a minute. Don’t all cryptocurrencies use the same protocol developed by the creators of Bitcoin? No, the Bitcoin protocol was the first one, but other cryptocurrencies have their independent protocols, their own rules of communicating between the different nodes in the chain.

Take Bitcoin and Ethereum – one of the most popular cryptocurrencies – for example. Bitcoin transactions require 10-15 minutes to confirm, while Ethereum ones get validated in seconds. Bitcoin uses a hash algorithm to encrypt, while Ethereum uses ethash. Bitcoin strives to be an alternative to fiat currencies, while Ethereum aims to facilitate peer-to-peer contracts.

As you start to grasp, all the important rules are defined by the protocols – consensus, validation, and participation in the network. That’s why every cryptocurrency is different and unique, even those based on Bitcoin.

If you think about it, you’ll realize that you’re already using one protocol without even knowing it. I’m talking about BitTorrent, which allows us to send files through a torrent application, which runs the BitTorrent protocol.

## What is the difference between coins and tokens?

Now when we know what blockchain and protocols are, we can explain the difference between coins and tokens. We said already that most people often use them interchangeably. As you would see, there is a difference between the two, even though it’s not as blaring as between Bitcoin and the blockchain.

If we have to divide cryptocurrencies into groups, we would have:

1. Bitcoin and Altcoins/coin
2. Tokens

The name “altcoin” comes from alternative coins. All cryptocurrencies created after Bitcoin are altcoins. For example, ​Ripple, ​Cardano, Monero, or Litecoin. Sometimes they are simply called “coins” for short.

Most altcoin cryptocurrencies are build using the original Bitcoin protocol. That doesn’t mean that they are identical with Bitcoin. The developers have made changes in the code, which results in a new coin with new features, which bears a similarity to Bitcoin. Examples of such coins are Litecoin, Bitcoin Cash, and Namecoin.

Others, like Ethereum, have their unique blockchain and protocol, which doesn’t have anything to do with Bitcoin. They also offer some additional features, which we are going to discuss later.

## What are coins?

So, coins are the native digital assets of their blockchain. In simple words, Bitcoin operates on the Bitcoin blockchain following the Bitcoin protocol. It can’t function or operate on another blockchain like Ethereum. That’s why, if you want to buy something with bitcoins, you can’t do it on Ethereum. You’ll have to convert the bitcoin into Ether.

Since most altcoins follow the steps of Bitcoin, they have the same goals as Bitcoin – to function as money. In other words, they are a unit of account, a store of value, and a medium of exchange. You can store them if you like and wait for their price to go up and then sell. You can use them to buy goods, or you can exchange them for other digital currencies.

However, some altcoins like Ethereum doesn’t function simply as currencies. And here is where tokens come into the picture, and things get complicated.

## What are tokens?

Tokens exist on top of another blockchain, so they are not a separate currency with its own blockchain. While “coins” are used to purchase goods or pay for services, tokens can represent anything tradable – a utility, an asset or both. Also, coins can exist independently, but tokens can’t.

Usually, people create tokens on the Ethereum platform, but you can also use NEO or Waves. Unlike “coins” like Bitcoin, which require significant processing power to mine, tokens are easy to create by following the provided template on the platform. Even someone with little programming experience can do it, as long as he is ready to try.

However, to build tokens, you need “coins.” Did you get confused already? Let’s illustrate. If you want to make a token on Ethereum, you’ll have to spend some Ethers (the native digital asset of the Ethereum blockchain) to validate the creation. You’ll also have to pay fees if you want to send the token to someone else.

## Bitcoin's Monetory policy

Every country has a simple authority which determines/decides/controls how much of money will be in circulation in our system.
To maintain the demand and supply of money, Monetory policies are used.
Since, Bitcoin is also related to money/transaction, there has to be some monetory policy for it to control its supply.

The two principles given by Satoshi Nakamoto for bitcoin's monetory policy are :

1. Halving
2. Block Frequency

- **Halving**
  <br/>
  It states that when the number of block increases by 210,000 then the reward value id decreased by half.
  <br/><br/>
  ![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/14.png)

  In the above table we can see that in 2009 the number of blocks was 0 and at that time the reward given for mining a particular block was 50 bitcoins. But as the mining increased and when the number of blocks mined reached 210,000 in 2012 then after that the reward for mining a new block was halved to 25 bitcoins only.
  So, In this way it is estimated that in 2140 the reward of mining the block will be 0 bitcoins.

  Satoshi estimated this start value of 50 bitcoins by considering the constraint that only 21 million bitcoins will be available for transaction in all together.
  The algorithm is designed such that it automatically keeps the track when to half the value.

## How mining works ?

The Miners solve the mathematical problem to mine the blocks. Now to understand what kind of mathematical problem is solved by them, we have to first understand the concept of NONCE(a number).

Now solving a particular mathematical problem for miners is to generate the block with hash which is very close to some target value. Now the general structure of block in the block chain is shown below -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/15.png)

Now, we can see that the fields block no., data and previous hash cannot be changed by us. So the only thing we can change is the field called NONCE, such that the hash generated is close to the target value. So solving the mathematical problem means selecting a value for nonce such that the hash generated after passing the through SHA-256 is very close to the target value.

Use this website to have a testing experience : https://demoblockchain.org/block

So basically, NONCE is a number that blockchain miners are solving for.

**Target**

1. Target is a number used in mining.
2. It is a number that a block hash must be below for the block to be added on to the blockchain.
3. The target adjusts every 2016 blocks (roughly 2 weeks) to try and ensure that the blocks aare mined once every 10 minutes on an average.

Target hashes can be visualized as -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/16.png)

Here we can see that the all possible hashes are from 0000000.......00 to fffffffff.......ff. Now suppose target value is set to something like it must start with 4 zeroes, so the miner hash to select such a NONCE such that the generated hash lies between the smallest hash (0000000......00) and the target hash (0000ffff.....ff).
The miner will continue to change the nonce unless it gets the satisfactory hash.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/17.png)

In above figure we can see that on putting the nonce value as 100, the hash is not valid.But when we put nonce value as 512, a valid hash is generated as show in figure below.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/18.png)

This means the miner has successfully mined the block.

**_The change of target is handle automatically by the algorithm i.e. it is not manually changed by anyone_**
The Bitcoin's target history can be seen below -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/19.png)

## CPU vs GPU vs ASIC

These are the technologies which are used to generate the hashes by the miners in order to mine the block.
Let's consider the example, Suppose a person A generates 5 hashes per second and checks fro its validity and there is another person B who generates 10 hashes per second and checks for its validity. So obviously the probability of person B hitting the target is more as compared to person A.
That means the more advance technology one use for generating hash more is the probablity of mining the block for the block chain.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/20.png)

In the above image, we can see that the hashes generated by CPUs is 1 Million hashes per second, GPU generates 1 Giga hashes per second and ASIC generates more than 1000 giga hashes per second.

## Mining Pool

Suppose miners individually try to mine the block but among them suppose there are some bulk miners with much higher power of mining technologies, then in such cases the individual miners will suffer as their chance of mining the block individually is very less.
So in such cases what miners do is that they form the groups among themselves to mine the block which is called as the MINING POOL and on mining the block successfully the reward is divided based on the computing power of the miner's technology.
The higher percentge of the reward will be given to the miner providing higher power technology for mining the block.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/21.png)

If any new miner has to join the mining pool then by paying small amount in terms of bitcoin, the new miner can join the pool. Also the new miner doen't have to do much, he/she just have to start the machine to generate the hashes.
One can see the hash rate distribution on - https://www.blockchain.com/explorer/charts/pools
