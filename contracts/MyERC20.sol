pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";


contract MyERC20 is ERC20, ERC20Detailed {
    constructor(uint256 initialSupply)
        public
        ERC20Detailed("VUEtoken", "VUE", 18)
    {
        _mint(msg.sender, initialSupply);
    }
}
