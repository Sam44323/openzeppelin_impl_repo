// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ErcToken is ERC20, Ownable {
    address public admin;

    // constructor for creating a new token and setting the admin for the Token
    constructor() ERC20("Token", "TOK") {
        admin = msg.sender;
        _mint(msg.sender, 100000000 ether); // 100 Mil
    }

    // method for updating the admin

    function updateAdmin(address newAdmin) external onlyAdmin {
        admin = newAdmin;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only Admin can access this method");
        _;
    }
}
