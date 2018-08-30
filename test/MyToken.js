var MyToken =  artifacts.require('./MyToken.sol');
contract('MyToken', function(accounts){
if('sets the total supply upon deployment', function(){
	return MyToken.deployed().then(function(instance){
		tokenInstance = instance;
		return tokenInstance.totalSupply();
	}).then(function(totalSupply){
		assert.equal(totalSupply,1089800000, 'sets total supply to 1,000,000')
	})
});
})