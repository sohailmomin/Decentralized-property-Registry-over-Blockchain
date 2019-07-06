import React,{Component} from 'react';
import {Table,Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';

class Approval extends Component{
	onApprove = async () => {
     

    const accounts = await web3.eth.getAccounts();
    await factory.methods.approveProperty(this.props.id).send({
      from: accounts[0]
    });
  };
  onReject=async() =>{
  	const accounts = await web3.eth.getAccounts();
  	await factory.methods.rejectProperty(this.props.id).send({
      from: accounts[0]
    });
  };
  onChan=async() =>{
  	const accounts = await web3.eth.getAccounts();
  	await factory.methods.approveChangeOwnership(this.props.id).send({
      from: accounts[0]
    });
  };


	render(){
		
		const { Row, Cell } = Table;
		const { status,change } = this.props;
		const dis=status > 1;
		 
		const re = (status >2 && status <4);
		const se=(status >2 && status <4) || (change <=0 );

				 

		return (
			<div>
			<Button color="green" disabled={dis} onClick={this.onApprove}>
				Approve Property
			</Button>
			<Button color ="red" disabled={dis} onClick={this.onReject}>Reject Property</Button>

			<Button color = "teal" disabled={se} onClick={this.onChan}>Approve change Ownership</Button>
			</div>	
			
			);
	}


}

export default Approval;