// contracts/ErcToken.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ErcToken is ERC20 {
    constructor() ERC20("ERCTOKEN", "ERC") {
        _mint(msg.sender, 100_000);
    }
}
