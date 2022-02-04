// contracts/ERC20.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ErcToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("ERCTOKEN", "ERC") {
        _mint(msg.sender, initialSupply);
    }
}
