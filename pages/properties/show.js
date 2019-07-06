import React,{Component} from 'react';
import {Card,Grid} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import ApproveForm from '../../components/ApproveForm';
import PriceForm from '../../components/PriceForm';
import Approval from '../../components/Approval';
class PropertyShow extends Component{
	state={
		status:''
	}

	static async getInitialProps(props) {
		const property= await factory.methods.getPropertyDetails(props.query.id).call();
		const change=await factory.methods.propOwnerChange(props.query.id).call();
		const approver=await factory.methods.getApprover(props.query.id).call();
		
		return {
			status:property[0],
			value:property[1],
			curr:property[2],
			wor:property[4],
			geo:property[3],
			des:property[5],
			ipfs:property[6],
			approver:approver,
			change:change
		};
	}

	renderCards(){
		const {
			status,
			value,
			curr,
			wor,
			geo,
			des,
			ipfs,
			approver
		}=this.props;
		const items=[
			{
				header:status,
				meta:'Status of property',
				description:'The status indicates whether the property is valid or not 1 indicates pending,2 indicates Approved and 3 indicates rejected'

			},
			{
				header:value,
				meta:'value of property',
				description:'The value of property'

			},
			{
				header:curr,
				meta:'Address of current owner of  property',
				description:'The status indicates whether the property is valid or not 1 indicates pending,2 indicates Approved and 3 indicates rejected',
				style:{overflowWrap:'break-word'}

			},
			{
				header:wor,
				meta:'what3words code for property',
				description:'Helps in locating property over map',
				style:{overflowWrap:'break-word'}

			},
			{
				header:geo,
				meta:'pluscode code for property',
				description:'Helps in locating property over map',
				style:{overflowWrap:'break-word'}

			},
			{
				header:'Description of property',
				meta:'pluscode code for property',
				description:des,
				style:{overflowWrap:'break-word'}

			},
			{
				header:ipfs,
				meta:'property related document links',
				
				style:{overflowWrap:'break-word'}

			},
			{
				header:approver,
				meta:'Account address of approver of property(0x0000000000000000000000000000000000000000 indicates not approved)',
				style:{overflowWrap:'break-word'}
			}

		];

		return <Card.Group items={items}/>;

	}
	renderRows(){
		return (
        <Approval id={Number(this.props.url.query.id)}
        		  status={this.props.status}
        		  change={Number(this.props.change)}
        />
        );
	}
	renderForm()
	{
		return(
			<ApproveForm status={this.props.status}
			             id={Number(this.props.url.query.id)}
			/>
			);
	}
	renderChange()
	{
		return(
			<PriceForm status={this.props.status}
			             id={Number(this.props.url.query.id)}
			/>
			);

	}
	render()
	{
		
		 
		return (
			<Layout>
				<h3>Property Details</h3>
				<Grid>
				<Grid.Row>
					<Grid.Column width={10}>
						{this.renderCards()}

					</Grid.Column>
					<Grid.Column width ={4}>
						{this.renderForm()}
						<br/><br/><br/><br/>
						{this.renderChange()}
					</Grid.Column>

				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						{this.renderRows()}
					</Grid.Column>
				</Grid.Row>
				</Grid>
				
				
			</Layout>

			);
	}

}

export default PropertyShow;