const routes=require('next-routes')();


routes.add('/properties/new','/properties/new')
	  .add('/users/new','/users/new')
	  .add('/users/:address','/users/show')
	  .add('/properties/:id','/properties/show')
	  .add('/transactions/:id','/transactions/show');

module.exports=routes;

