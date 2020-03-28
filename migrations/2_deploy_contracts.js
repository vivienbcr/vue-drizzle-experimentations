const HelloWorld = artifacts.require("HelloWorld");
const ERC20 = artifacts.require("MyERC20");
const ERC721 = artifacts.require("MyERC721");

module.exports = deployer => {
  deployer.deploy(HelloWorld);
  deployer.deploy(ERC20, 21000000);
  deployer.deploy(ERC721);
};
