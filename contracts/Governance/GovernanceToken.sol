// contract contracts/Governance/GovernanceToken.sol

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract GovernanceToken is ERC20, ERC20Permit, ERC20Votes {
    constructor()
        ERC20("GovernanceToken", "GTK")
        ERC20Permit("GovernanceToken")
    {}
}
