import React,{Component} from 'react';
import {Form,Button,Input,TextArea,Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';


class RegisterUser extends Component{

	state={
			address1:'',
			address2:'',
			address3:'',
			status:'',
			errorMessage:'',
			loading: false
	}

	onUser= async (event) =>{
		event.preventDefault(); 
		this.setState({ loading: true, errorMessage: '' });
		try {
		const accounts=await web3.eth.getAccounts();
		await factory.methods
		.addNewUser(this.state.address1)
		.send({
			from:accounts[0]

		});
		Router.pushRoute('/userindex');
	} catch (err) {
		this.setState({ errorMessage: err.message });
    }
    	this.setState({ loading: false });
	};


	 
	render(){

		return(
				<Layout>
				<h3>Create User</h3>
					<Form  error={!!this.state.errorMessage} onSubmit={this.onUser}>
					<Form.Field>
						<label> Account Address   </label>
						<Input
							value={this.state.address1}
							onChange={event => this.setState({address1:event.target.value})}
							label="address" labelPosition="right" 
						/>
						</Form.Field>
						 
					<Message error header="Oops!!!" content={this.state.errorMessage}/>
					<Button basic color = 'teal' loading={this.state.loading} type='submit'>Register User</Button>
					</Form>
					<br/><br/>
					<Form  error={!!this.state.errorMessage}>
					<Form.Field>
						<label> Account Address   </label>
						<Input
							value={this.state.address2}
							onChange={event => this.setState({address2:event.target.value})}
							label="address" labelPosition="right" 
						/>
						</Form.Field>

						 
					<Message error header="Oops!!!" content={this.state.errorMessage}/>
					<Button basic color = 'yellow' loading={this.state.loading} type='submit'>Register Admin</Button>
					</Form>

					<br/><br/>
					<Form  error={!!this.state.errorMessage}>
					<Form.Field>
						<label> Account Address   </label>
						<Input
							value={this.state.address3}
							onChange={event => this.setState({address3:event.target.value})}
							label="address" labelPosition="right" 
						/>
						</Form.Field>
						 
					<Message error header="Oops!!!" content={this.state.errorMessage}/>
					<Button basic color = 'violet' loading={this.state.loading} type='submit'>Register SuperAdmin</Button>
					</Form>
					

				</Layout>

			);
	}
}


export default RegisterUser;