import web3 from './web3';
import asset from './build/asset.json';

const instance=new web3.eth.Contract(
		JSON.parse(asset.interface),
		'0x3Cf1324208f26a196Dd4fe216915368Fc6B3D776'
	) ;

export default instance; 