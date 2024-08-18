pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UMCToken is ERC20 {
    address public owner;
    uint256 public MinVP;
    uint256 public MaxVP;
    mapping(address => uint256) public userVP;

    constructor() ERC20("UMCToken", "UMC") {
        owner = msg.sender;
        MinVP = 500 * 10 ** decimals();
        MaxVP = 5144 * 10 ** decimals();
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function setMinVP(uint256 _minVP) external onlyOwner {
        MinVP = _minVP * 10 ** decimals();
    }

    function setMaxVP(uint256 _maxVP) external onlyOwner {
        MaxVP = _maxVP * 10 ** decimals();
    }

    function updateUserVP(address account, uint256 amount) external onlyOwner {
        userVP[account] += amount;
    }

    function getUserLevel(address account) public view returns (uint256) {
        if (userVP[account] >= MinVP && userVP[account] < MaxVP) {
            return 1;
        } else if (userVP[account] >= MaxVP) {
            return 5;
        } else {
            return 0;
        }
    
    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external onlyOwner {
        _burn(account, amount);
    }

    function transferFrom(address sender, address recipient, uint256 amount) external onlyOwner {
        _transfer(sender, recipient, amount);
    }
}
}