import React,{Component} from 'react';
import {Card,Grid} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';


class TransactionShow extends Component{
	state={
		status:''
	}

	static async getInitialProps(props) {
		const transaction= await factory.methods.getTransactionDetails(props.query.id).call();
		 
		 
		
		return {
			 status:transaction[0],
			 value:transaction[1],
			 owner:transaction[2],
			 buyer:transaction[3]
		};
	}

	renderCards(){
		const {
			status,
			value,
			owner,
			buyer
		}=this.props;
		const items=[
			{
				header:status,
				meta:'Status of Transaction',
				description:'The status indicates whether the transaction is approved  or not 0 indicates pending,1 indicates Approved'

			},
			{
				header:value,
				meta:'value of Transaction',
				description:'The value of Transaction'

			},
			{
				header:owner,
				meta:'Address of seller of  property',
				style:{overflowWrap:'break-word'}

			},
			{
				header:buyer,
				meta:'Address of buyer of property',
				style:{overflowWrap:'break-word'}

			}
			 

		];

		return <Card.Group items={items}/>;

	}
	render()
	{
		
		 
		return (
			<Layout>
				<h3>Transaction Details</h3>
				<Grid>
				<Grid.Row>
					<Grid.Column width={10}>
						{this.renderCards()}

					</Grid.Column>
					 

				</Grid.Row>
				 
				</Grid>
				
				
			</Layout>

			);
	}

	
}
export default TransactionShow;