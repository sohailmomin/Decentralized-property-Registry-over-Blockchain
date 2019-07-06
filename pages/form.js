import React,{Component} from 'react';
import Head from 'next/head';
import {Form,Button,Input,TextArea,Message,Container} from 'semantic-ui-react';
 



class FormStudent extends Component{
	render(){
		return (
			<Container>
			<Head>
			<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
			</Head>
			<h3>Register Student</h3>
			<Form>
				<Form.Field>
					<label>First Name</label>
					<Input label="first name" labelPosition="right" 
						 
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<Input label="last name"
					/>
				</Form.Field>
				<Form.Field>
					<label>Department</label>
					<Input label="department" labelPosition="right" />
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<Input label="email" labelPosition="right" 
					/>
				</Form.Field>
				 
				 
				<Button type='submit' color="teal">Register</Button>
			</Form>
			</Container>

			);
	}

}

export default FormStudent