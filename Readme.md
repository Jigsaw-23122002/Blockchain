# Blockchain

![image](https://i1.wp.com/viden.com.au/wordpress/wp-content/uploads/2016/09/BlockChain.jpeg?fit=6250%2C4000&ssl=1)

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

Lets consider the example of a shopkeeper selling a flour to a man in debt of rupees 1000 and enters this debt record into its ledger book in front of man. But after the man goes from the shop, the shopkeeper changes this 1000 rs to 2000 rs. So this is wrong.

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

