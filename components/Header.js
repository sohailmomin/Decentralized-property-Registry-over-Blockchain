import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';


export default () =>{
	return(
		<Menu style={{marginTop:'10px' }}>
			 <Link route="/">
			 	<a className="item">
			 		Decentralized Property Registry
			 	</a>
			 </Link>
			<Menu.Menu position = "right">
			 <Link route="/">
			 	<a className="item">
			 		 Properties
			 	</a>
			 </Link>
			 <Link route="/properties/new">
			 	<a className="item">
			 	+	
			 	</a>
			 </Link>
			 <Link route="/users/new">
			 	<a className="item">
			 	Register Account
			 	</a>
			 </Link>
			</Menu.Menu>
		</Menu>
		);


};