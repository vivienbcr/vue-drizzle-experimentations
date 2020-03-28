const HelloWorld = artifacts.require("HelloWorld");
const ERC721 = artifacts.require("MyERC721");

module.exports = (deployer) => {
  deployer.deploy(HelloWorld);
  deployer.deploy(ERC721);
};
