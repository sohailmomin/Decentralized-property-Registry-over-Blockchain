import React,{Component} from 'react';
import {Card,Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';
 
class AssetIndex extends Component{
	 
	static async getInitialProps() {
		 
		const prop=await factory.methods.getProperties().call();
		 
		return { prop };
		
		 
	}
	renderProperties(){
		const items=this.props.prop.map(id =>{

			return{
				header:id,
				description:(
					<Link route={`properties/${id}`} >
					<a>View Property</a>
					</Link>
					),
				fluid:true
			};

		});

		return <Card.Group items={items}/>;

	}
	render()
	{
		
	
		return ( 
			<Layout>
			<div>
		
		<h3>List of Properties</h3>
		<Link route="/properties/new">
		<a>
		<Button
			floated="right"
			content="Register Property"
			icon="add circle"
			primary/>
		</a>
		</Link>
		{this.renderProperties()}

		</div>
		</Layout>
		);
	}

}
export default AssetIndex;