//contracts/NftToken.sol

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NftToken is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("NftToken", "NFT") {}

    function mint(address recipient, string memory tokenURI) public onlyAdmin {
        _tokenIds.increment();

        uint256 currentId = _tokenIds.current();
        _mint(recipient, currentId);
        _setTokenURI(currentId, tokenURI);
    }

    function getTokenIdValue() public view returns (uint256) {
        return _tokenIds.current();
    }

    modifier onlyAdmin() {
        require(msg.sender == owner(), "Caller doesn't have admin access");
        _;
    }
}
