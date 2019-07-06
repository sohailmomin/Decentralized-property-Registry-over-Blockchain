# Property-Registry


**Smart
Contracts**

Smart contracts are
**self-executing** contracts with the terms of the agreement
between buyer and seller being directly written into lines of code.
The code and the agreements contained therein exist across a
**distributed**, **decentralized** [blockchain](https://www.investopedia.com/terms/b/blockchain.asp)
network. Smart contracts permit trusted **transactions** and
**agreements** to be carried out among disparate, anonymous
parties without the need for a central authority, legal system, or
external enforcement mechanism. They render transactions **traceable**,
**transparent**, and **irreversible**.

**Blockchain**

The smart contracts
are developed for the **ethereum** blockchain. Ethereum is a
**decentralized** platform that runs smart contracts. **Contracts**
can be deployed  on the **Ethereum Virtual Machine** (EVM). Once
deployed it can be accesed globally. These contracts are enforced and
certified by parties that we call miners. Miners are multiple
computers who add a transaction (Addition or modification of the
state) to a public ledger that we call a block. Multiple blocks
constitute a blockchain.

We pay these miners
with something called _Gas_, which is the cost to run a
contract. When you publish a smart contract, or execute a function of
a smart contract, or transfer money to another account, you pay some
ether that gets converted into gas.

**Platforms**

**High Level Languages** for smart contract
developing:

- [Solidity](http://solidity.readthedocs.org/en/latest/) 
- [Serpent](https://github.com/ethereum/wiki/wiki/Serpent) 

See the differences [here](https://ethereum.stackexchange.com/questions/126/fundamental-limitations-between-solidity-and-serpent).

**Command Line Development Management Tools** for
creating a DAPP project:

- [Truffle](https://github.com/ConsenSys/truffle) 
- [Embark](https://github.com/iurimatias/embark-framework) 
- [Dapple](https://github.com/nexusdev/dapple) 

**Testnode with RPC Interace** for deploying
contracts on a virtual node and make transactions without the need to
be mined:

- [Javascript
	testrpc](https://github.com/ethereumjs/testrpc) 
- [Python
	testnode](https://github.com/ethereum/pyethereum/wiki/Using-pyethereum.tester) 

**Browser based IDE** to get instant feedback for
solidity code:

- [ReMix](https://remix.ethereum.org/) 
- [EthFiddle](https://ethfiddle.com/) 

**Wallet clients** to connect a ethereum wallet

- Metamask 
- MyEtherWallet 

**Compiler**

The contracts are
written in solidity codes and these are to be compiled to get the
**Application Binary Interface** (ABI) codes. ABI is the interface
between two program modules, one of which is often at the level of
machine code. The interface is the de facto method for
encoding/decoding data into/out of the machine code. It defines how
you can encode Solidity contract calls for the EVM and, backwards,
how to read the data out of transactions. It also provides the
**Bytecode** or the opcodes of the contract.

A command line tool
such as **truffle** or online ide such as **ReMix** can be used
to compile.

**Network**

The smart contracts
are deployed on the ethereum network on the EVM. But any transaction
executed on this network requires ether to be spent, hence its not
advicable for development.

Ethereum network is
called ‘**livenet**’ and there exists multiple ‘**testnet**’
which are copies of ethereum network. Like ethereum, these networks
have currency called ‘**test ether**’s which can be spent to
execute a transcation on the network. Now the important difference is
that you can get free ‘test ether’s here unlike real valued
ether.

Some testnets are :

- **Testrpc**
	– This is a local network running on your compuetr. 10 free wallet
	accounts with test ether is allocated. 
- **Ropsten**
	– This is a global testnet with free test ether. 
- **Rinkeby**
	– Another global testnet with free ether. 

**Wallet**

Wallets are very
important part of a smart contract. It serves 2 purposes:

- It serves as
	client to ethereum wallet. To make a transaction on network ether
	has to be spent and you can authorize these payments using this. 
- To
	communicate with a blockchain and to deploy, you need to either have
	a full node or a wallet cleint of the network.  A wallet can
	facilitate the communication with the network. 

**Deployment**

To deploy a contract
the following steps are to be taken:

- Compile the
	code and get necessary **bytecodes** and **ABIcodes** 
- Select a
	network to migrate to 
- Make a
	deployment with a wallet address as transaction sender 
- Authenticate
	the transaction form the wallet and pay the transaction cost. 

Your contract will
be deployed and will be assigned a public address which can be used
to access it.

**Web
Interface**

A web app can be
used to work with the contract. A backend  javascript framework,
**web3.js**, can intract with the blockchain. It can connect to
the network, identify the contract and perform transactions. There
are two kinds of transaction operation on a contract:

**1.Call**

A call is a local invocation of a contract function that does not
broadcast or publish anything on the blockchain. It is a read-only
operation and will not consume any Ether. It simulates what would
happen in a transaction, but discards all the state changes when it
is done. It is synchronous and the return value of the contract
function is returned immediately.

**2.Transaction**

A transaction is broadcasted to the network, processed by miners,
and if valid, is published on the blockchain. It is a write-operation
that will affect other accounts, update the state of the blockchain,
and consume Ether (unless a miner accepts it with a gas price of
zero). It is asynchronous, because it is possible that no miners will
include the transaction in a block (for example, the gas price for
the transaction may be too low). Since it is asynchronous, the
immediate **return value of a transaction is always the
transaction's hash.**

The **web3js framework **works in the following way:

- Connect to a network using  ‘**web3Provider**’ to a
	localhost(local testnet) or a global network 
- Create a contract **instance** using the **ABI code **and
	C**ontract address**. Contract address identifies the particular
	contract on the network to interact with and the ABI code specifies
	how to access each function. 
- Use the instance to call contract functions like
	javascript. 





**Steps:**

**Install MetaMask**

1. Go to [https://metamask.io/](https://metamask.io/)
and install the **browser plugin**.

2. Setup a **password** and open the wallet. Select the network
as ‘**Rinkeby Test Network**’.

3. Click on ‘**CREATE ACCOUNT**’ to create a new wallet
accout and click ‘**Copy Address to clipboard**’ to copy your
**public address** for the wallet.Remeber the metamask mnemonic.

4. Go to [https://faucet.rinkeby.io/](https://faucet.rinkeby.io/)
to get free test ether to the address. Check your account on metamask
and verify the **balance**.

5. Repeat steps 3 and 4 to create more accounts.

**Deploying contract**
1. Go to ethereum folder and open deploy.js file.In deploy.js file add your rinkeby network address in provider.

2. Open cmd ,switch to the  project folder then ethereum folder run "node compile.js".A build folder will be generated which will contain contract ABI in .json format as "asset.json".

3. Now run "node deploy.js".At the  you will get "Attempting to deploy from account "<some address>" remeber this address and  "Contract deployed to <some address>".Copy this address.
	Open factory.js and enter this address where the contract is deployed.

4. Now swicth to main folder and run "npm install" in cmd.Then after installation run "npm run dev".
Open localhost:3000 in browser and also make sure you have metamask installed and you are login into metamask.

5. Your wallet must contain atleast three accounts one from which is  deployed which will be for  superadmin and other two 
	simple user accounts.Superadmin address will be the first address you get after running deploy.js

6. Switch to super admin account in metamask.Click on "registeraccount".

7. Add address and click on register user.After user is registered you will get a page with a list of users.Click on one user and you will be displayed with it's status.Click on approve user.Apply Similar steps for another user account.

9. Now go to home page and switch to one of the user account.Click on "register property".You will get a form.Fill the form and click on create.You will get a popup of metamask and click on submit transaction.

10. You will be redirected to home page which will contain list of properties.Click on one which you have created.
	You will be shown a page with details of that property.You will also shown some set of buttons.

11. To approve or reject the property switch to superadmin account and click on either approve or reject button.

12. If you approve a propery it will be available for further transactions and if rejected no further transactions can       take place on it.

13. To change ownership or price of property you need to switch to the user account which is owner.

14. After you send a request to change ownership ,it needs to be approved which will be done by superadmin account.

15. To get transaction details regarding a particular property enter "localhost:3000/trasactions/<propertyID>".




**Different Operations In the App**

**1.Intialising Contract**

**Output**

- msg.sender is made as creatorAdmin
- msg.sender is made as superAdmin
- msg.sender is made as verified user

**2.Create a new Property.**

**parameters**

- CreateProperty- property Id, propoerty value, property owner address

**prerequisites**


- property owner should be verified user

**Output**

 mark property Id, Status as Pending, propoerty value, property owner address

**3.Approve the new Property.**

**parameters**

- approveProperty- property Id

**prerequisites**

- msg.sender should be superadmin
- current owner should not be msg.sender

**Output**

mark property Satus as Approved

**4.Reject the new Property.**

**parameters**

- rejectProperty- property Id

**prerequisites**

- msg.sender should be superadmin
- current owner should not be msg.sender

**Output** 

Mark property Satus as Rejected

**5. Request Change of Ownership.**

**parameters**

- changeOwnership- property Id, new owner address

**prerequisites**

- msg.sender should be the current owner
- new owner should be verified user
- current owner is not the new owner
- No pending ownership change request should exist.

**Output**

mark property Ownership change request

**6.Approve change in Onwership.**

**parameters**

- ApproveChangeOwnership

**prerequisites**

- msg.sender should be superadmin
- ownership change request must exist

**Output**

mark new owner address as current owner

**7.Change the price of the property.**

**parameters**

- changeValue-  new property value

**prerequisites**

- msg.sender should be the current owner
- No pending ownership change request should exist.

**Output**

change property value

**8.Get the property details.**

**parameters**

- GetPropertyDetails- propoerty Id

**Output**

Status, propoerty value, property owner address

**9.Add new user.**

**parameters**

- addNewUser- address

**prerequisites**

- msg.sender should be admin
- No pending request for the address should exist.(user or admin or superadmin)
- address should not be a verified user.(user or admin or superadmin)

**Output**
mark address as user

**10.Add new admin.**

**parameters**

- AddNewAdmin- address

**prerequisites**

- msg.sender should be superadmin
- No pending request for the address should exist.(user or admin or superadmin)
- address should not be a verified user.(user or admin or superadmin)

**Output**

mark address as Admin

**11.Add new SuperAdmin**

**parameters**

- addNewSuperAdmin- address

**prerequisites**

- msg.sender should be superadmin
- No pending request for the address should exist.(user or admin or superadmin)
- address should not be a verified user.(user or admin or superadmin)

**Output**

mark address as SuperAdmin

**12. Approve Pending User.**

**parameters**

- approveUsers- address

**prerequisites**

- msg.sender should be superadmin
- Pending request should exist for address

**Output**

mark address as Verified user


**12. Get Transaction Details.**

**parameters**

- getTransactionDetails- propertyID

**prerequisites**

-None  


**Output**

Details of latest transaction on a property.
