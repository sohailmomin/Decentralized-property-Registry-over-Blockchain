pragma solidity ^0.4.17;

contract asset {

    address public creatorAdmin;
	enum Status { NotExist, Pending, Approved, Rejected }

	struct PropertyDetail {
		Status status;
		uint value;
		address currOwner;
		
		string what3words;
		string geohash;
		string description;
		string ipfs_qm;
		address approver;
		
		
	}
	struct Transaction{
	     
	    uint status;
	    uint value;
	    address owner;
	    address buyer;
	}

	// Dictionary of all the properties, mapped using their { propertyId: PropertyDetail } pair.
	mapping(uint => PropertyDetail) public properties;
	mapping(uint => address) public propOwnerChange;
	mapping(uint => Transaction) public transactions;
	uint [] public tranArr;
	uint [] public propArr;
	
	
	

    mapping(address => int) public users;
    mapping(address => bool) public verifiedUsers;
    address[] public us;

	modifier onlyOwner(uint _propId) {
		require(properties[_propId].currOwner == msg.sender);
		_;
	}

	modifier verifiedUser(address _user) {
	    require(verifiedUsers[_user]);
	    _;
	}

	modifier verifiedAdmin() {
		require(users[msg.sender] >= 2 && verifiedUsers[msg.sender]);
		_;
	}

	modifier verifiedSuperAdmin() {
	    require(users[msg.sender] == 3 && verifiedUsers[msg.sender]);
	    _;
	}

	// Initializing the User Contract.
	function asset() public {
		creatorAdmin = msg.sender;
		users[creatorAdmin] = 3;
		verifiedUsers[creatorAdmin] = true;
	}

	// Create a new Property.
	function createProperty(uint _propId, uint _value, address _owner,string _what3words, string _geohash,string _description,string _ipfs) 
	public  verifiedUser(_owner) returns (bool) {
		properties[_propId] = PropertyDetail(Status.Pending, _value, _owner,_what3words,_geohash,_description,_ipfs,address(0));
		propArr.push(_propId);
		return true;
	}

	// Approve the new Property.
	function approveProperty(uint _propId) public verifiedSuperAdmin returns (bool){
		require(properties[_propId].currOwner != msg.sender);
		properties[_propId].status = Status.Approved;
		properties[_propId].approver=msg.sender;
		
		return true;
	}

	// Reject the new Property.
	function rejectProperty(uint _propId) public verifiedSuperAdmin returns (bool){
		require(properties[_propId].currOwner != msg.sender);
		properties[_propId].status = Status.Rejected;
		return true;
	}

	// Request Change of Ownership.
	function changeOwnership(uint _propId, address _newOwner) public onlyOwner(_propId) verifiedUser(_newOwner) returns (bool) {
		require(properties[_propId].currOwner != _newOwner);
		require(propOwnerChange[_propId] == address(0));
		propOwnerChange[_propId] = _newOwner;
		if(transactions[_propId].buyer==address(0))
		{
		    delete transactions[_propId];
		    tranArr.push(_propId);
		}
		 
		transactions[_propId]=Transaction(0,properties[_propId].value,properties[_propId].currOwner,_newOwner);
		
		return true;
	}

	// Approve chage in Onwership.
	function approveChangeOwnership(uint _propId) public verifiedSuperAdmin returns (bool) {
	    require(propOwnerChange[_propId] != address(0));
	    properties[_propId].currOwner = propOwnerChange[_propId];
	    propOwnerChange[_propId] = address(0);
        transactions[_propId].status=1;
	    return true;
	}

	// Change the price of the property.
    function changeValue(uint _propId, uint _newValue) public onlyOwner(_propId) returns (bool) {
        require(propOwnerChange[_propId] == address(0));
        properties[_propId].value = _newValue;
        return true;
    }

	// Get the property details.
	function getPropertyDetails(uint _propId) public view returns (Status, uint, address,string,string,string,string) {
		return (properties[_propId].status, properties[_propId].value, properties[_propId].currOwner,properties[_propId].geohash,properties[_propId].what3words,properties[_propId].description,properties[_propId].ipfs_qm);
	}

	// Add new user.
	function addNewUser(address _newUser) public verifiedAdmin returns (bool) {
	    require(users[_newUser] == 0);
	    require(verifiedUsers[_newUser] == false);
	    users[_newUser] = 1;
	    us.push(_newUser);
	    return true;
	}

	// Add new Admin.
	function addNewAdmin(address _newAdmin) public verifiedSuperAdmin returns (bool) {
	    require(users[_newAdmin] == 0);
	    require(verifiedUsers[_newAdmin] == false);
	    users[_newAdmin] = 2;
	    us.push(_newAdmin);
	    return true;
	}

	// Add new SuperAdmin.
	function addNewSuperAdmin(address _newSuperAdmin) public verifiedSuperAdmin returns (bool) {
	    require(users[_newSuperAdmin] == 0);
	    require(verifiedUsers[_newSuperAdmin] == false);
	    users[_newSuperAdmin] = 3;
	    us.push(_newSuperAdmin);
	    return true;
	}

	// Approve User.
	function approveUsers(address _newUser) public verifiedSuperAdmin returns (bool) {
	    require(users[_newUser] != 0);
	    verifiedUsers[_newUser] = true;
	    return true;
	}
	function getProperties() public view returns (uint[])
	{
	    return propArr;
	}
	function getUs() public view returns (address[])
	{
	    return us;
	}
	function getApprover(uint _propId) public view returns (address)
	{
	    return properties[_propId].approver;
	    
	}
    
    function getTransactions() public view returns(uint[])
    {
        return tranArr;
    }
	
	function getTransactionDetails(uint _propId) public view returns(uint,uint,address,address)
	{
	    return (transactions[_propId].status,transactions[_propId].value,transactions[_propId].owner,transactions[_propId].buyer);
	}
	
}
