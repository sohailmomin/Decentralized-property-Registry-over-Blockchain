import React,{Component} from 'react';
import {Card,Grid,Button} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';


class UserShow extends Component{

	static async getInitialProps(props) {
		const status = await factory.methods.users(props.query.address).call();
		const verified=await factory.methods.users(props.query.address).call();
		return{
			status:status,
			verified:verified
		};

}
onApprove = async () => {
     

    const accounts = await web3.eth.getAccounts();
    await factory.methods.approveUsers(this.props.url.query.address).send({
      from: accounts[0]
    });
  };
	renderCards(){
		const {
			status,
			verified
		}=this.props;
		const items=[
			{
				header:status,
				meta:'Status of User',
				description:'The status indicates  1 indicates Simple user,2 indicates Admin and 3 indicates SuperAdmin'

			}
			 
			];
			return <Card.Group items={items}/>;
		}
	render()
	{

		 
		const dis=Number(this.props.status) > 1 ;
		 
			return(
			  <Layout>
			  	<Grid>
			  		<Grid.Row>
			  			<Grid.Column>
			  				{this.renderCards()}
			  			</Grid.Column>

			  		</Grid.Row>
			  		<Grid.Row>
			  			<Grid.Column>
			  				<Button basic color='green' disabled={dis} onClick={this.onApprove}>Approve User</Button>
			  			</Grid.Column>
			  		</Grid.Row>

			  	</Grid>
			  </Layout>

			);

	}

}

export default UserShow;