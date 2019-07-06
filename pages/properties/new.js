import React,{Component} from 'react';
import {Form,Button,Input,TextArea,Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';
class PropertyNew extends Component{
	state={
		id:'',
		value:'',
		curr:'',
		what3:'',
		geo:'',
		des:'',
		ipfs:'',
		errorMessage:'',
		loading: false
	}
	onSubmit= async (event) =>{
		event.preventDefault(); 
		this.setState({ loading: true, errorMessage: '' });
		try {
		const accounts=await web3.eth.getAccounts();
		await factory.methods
		.createProperty(this.state.id,this.state.value,this.state.curr,this.state.what3,this.state.geo,this.state.des,this.state.ipfs)
		.send({
			from:accounts[0]

		});
		Router.pushRoute('/');
	} catch (err) {
		this.setState({ errorMessage: err.message });
    }
    	this.setState({ loading: false });
	};
	render(){
		return (
			<Layout>
			<h3>Register a Property</h3>
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Property ID</label>
					<Input label="Integer" labelPosition="right" 
						value={this.state.id}
						onChange={event => this.setState({id:event.target.value})}
					/>
				</Form.Field>
				<Form.Field>
					<label>Value</label>
					<Input label="₹" labelPosition="right" 
						value={this.state.value}
						onChange={event => this.setState({value:event.target.value})}
					/>
				</Form.Field>
				<Form.Field>
					<label>Current Owner</label>
					<Input label="address" labelPosition="right" 
					value={this.state.curr}
					onChange={event => this.setState({curr:event.target.value})}
					/>
				</Form.Field>
				<Form.Field>
					<label>What3Words</label>
					<Input label="what3words" labelPosition="right" 
					value={this.state.what3}
					onChange={event => this.setState({what3:event.target.value})}
					/>
				</Form.Field>
				<Form.Field>
					<label>Open Location Code</label>
					<Input label="Open location code" labelPosition="right" 
					value={this.state.geo}
					onChange={event => this.setState({geo:event.target.value})}
					/>
				</Form.Field>
				<Form.Field>
					<label>Property Description</label>
					<TextArea placeholder='Description of property' style={{ minHeight: 200 }} 
					value={this.state.des}
					onChange={event => this.setState({des:event.target.value})}
					/>
				</Form.Field>
				<Form.Field>
					<label>Property related files link</label>
					<Input label="ipfsurl" labelPosition="right" 
					value={this.state.ipfs}
					onChange={event => this.setState({ipfs:event.target.value})}
					/>
				</Form.Field>
				<Message error header="Oops!!!" content={this.state.errorMessage}/>
				<Button primary loading={this.state.loading} type='submit'>Create</Button>
			</Form>
			</Layout>

			);
	}
}

export default PropertyNew;