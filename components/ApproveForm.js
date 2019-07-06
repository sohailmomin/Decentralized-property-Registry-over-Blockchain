import React,{Component} from 'react';
import {Button,Form,Input,Message} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';


class ApproveForm extends Component{
	state={
		address:'',
		errorMessage:'',
		loading: false
	};
	onSubmit= async (event) =>{
		event.preventDefault();
		this.setState({ loading: true, errorMessage: '' });
		try {
			const accounts=await web3.eth.getAccounts();
			await factory.methods
						.changeOwnership(this.props.id,this.state.address)
						.send({
			from:accounts[0]

		});
			
		} catch(err) {
			 this.setState({ errorMessage: err.message });
		}
		this.setState({ loading: false });
	};
	render(){
		 
		const { status,id } = this.props;
		const re = (status >2 && status <4);
		return(
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Change Owner</label>
					<Input
						value={this.state.address}
						onChange={event => this.setState({address:event.target.value})}
						label="address"
						labelPosition="right"

					/>
				</Form.Field>
				<Button basic color="teal" disabled={re} loading={this.state.loading}>Change OwnerShip</Button>
			</Form>

			);

	}
}

export default ApproveForm;