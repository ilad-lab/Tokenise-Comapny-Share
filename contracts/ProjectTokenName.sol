// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// import "hardhat/console.sol";

contract ProjectTokenName is ERC20, Ownable {
    string _ticker = "PTN"; // Project Token ticker

    constructor() ERC20("Project Token Name", _ticker) {
    }

    function mint(address _account, uint256 _amount) external onlyOwner {
        _mint(_account, _amount);
    }


    function burn(address _account, uint256 _amount) public {
        _burn(_account, _amount);
    }
}
