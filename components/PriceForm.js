import React,{Component} from 'react';
import {Button,Form,Input,Message} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';


class PriceForm extends Component{
	state={
		value:'',
		errorMessage:'',
		loading: false
	};
	onSubmit= async (event) =>{
		event.preventDefault();
		this.setState({ loading: true, errorMessage: '' });
		try {
			const accounts=await web3.eth.getAccounts();
			await factory.methods
						.changeValue(this.props.id,this.state.value)
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
					<label>Change Value</label>
					<Input
						value={this.state.value}
						onChange={event => this.setState({value:event.target.value})}
						label="₹"
						labelPosition="right"

					/>
				</Form.Field>
				<Message error header="Oops!!!" content={this.state.errorMessage}/>
				<Button basic color="teal" disabled={re} loading={this.state.loading}>Change Value</Button>
			</Form>

			);

	}
}

export default PriceForm;