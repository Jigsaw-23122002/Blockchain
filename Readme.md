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
   ​3) A medium of exchange

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
