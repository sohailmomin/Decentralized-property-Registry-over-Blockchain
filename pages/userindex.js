import React,{Component} from 'react';
import {Card,Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';

class UserIndex extends Component{

	static async getInitialProps() {
		 
		const users=await factory.methods.getUs().call();
		 
		return { users };
		
		 
	}
	renderUsers(){
		const items=this.props.users.map(address =>{

			return{
				header:address,
				description:(
					<Link route={`users/${address}`} >
					<a> View user</a>
					</Link>
					
					),
				fluid:true
			};

		});

		return <Card.Group items={items}/>;

	}
	render(){
		return(

				<Layout>
				<div>
				{this.renderUsers()}

				</div>

				</Layout>


			);
	}
	
}

export default UserIndex;