const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const asset=require('./build/asset.json');


const provider=new HDWalletProvider('item divorce outdoor ugly try learn success act satoshi just earn outside',
	'https://rinkeby.infura.io/v3/3e10a8a1255b46aeb8492835a1fd6f5f');


const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(asset.interface))
    .deploy({ data: '0x' + asset.bytecode })
    .send({ gas: '4000000', from: accounts[0] });
     
  console.log('Contract deployed to', result.options.address);
};
deploy();
//0x44AE569C8E5f0F7eDbfa6F8Fc709Fa16143816fC

//0x44AE569C8E5f0F7eDbfa6F8Fc709Fa16143816fC