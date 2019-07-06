import Web3 from 'web3';

let web3;


if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')
{
	web3=new Web3(window.web3.currentProvider);

}
else
{
	const provider=new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/3e10a8a1255b46aeb8492835a1fd6f5f');
	web3=new Web3(provider);
}


export default web3;