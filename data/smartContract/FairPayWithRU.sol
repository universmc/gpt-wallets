pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

struct Job {
    string name;
    uint256 salary;
    bool completed;
}

contract FairPayWithRU is ERC20 {
    using SafeMath for uint256;

    address public owner;
    uint256 public MinVP;
    uint256 public MaxVP;
    uint256 public RUAmount;
    uint256 public piCoinValue;
    uint256 public cvunRate;
    uint256 public cvunCap;
    mapping(address => uint256) public userVP;
    mapping(address => uint256) public userRU;

    constructor() ERC20("FairPayToken", "FPT") {
        owner = msg.sender;
        MinVP = 500 * 10 ** decimals();
        MaxVP = 5144 * 10 ** decimals();
        RUAmount = 100 * 10 ** decimals();
        piCoinValue = 1 * 10 ** decimals();
        cvunRate = 10 * 10 ** decimals();
        cvunCap = 10000 * 10 ** decimals();
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function setPiCoinValue(uint256 _piCoinValue) external onlyOwner {
        piCoinValue = _piCoinValue * 10 ** decimals();
    }

    function setCvunRate(uint256 _cvunRate) external onlyOwner {
        cvunRate = _cvunRate * 10 ** decimals();
    }

    function setCvunCap(uint256 _cvunCap) external onlyOwner {
        cvunCap = _cvunCap * 10 ** decimals();
    }

    function updateCvun(address account, uint256 value) external onlyOwner {
        uint256 cvun = userVP[account] * cvunRate;
        if (cvun > cvunCap) {
            cvun = cvunCap;
        }
        userVP[account] += cvun;
    }

    function getCvunRate() public view returns (uint256) {
        return cvunRate;
    }

    function getPiCoinValue() public view returns (uint256) {
        return piCoinValue;
    }

    function distributeRU() public {
        for (uint256 i = 0; i < userRU.length; i++) {
            if (userVP[i] >= MinVP) {
                userRU[i] += RUAmount;
            }
        }
    }

    function claimRU() public {
        payable(msg.sender).transfer(userRU[msg.sender]);
    }

    function getUserLevel(address account) public view returns (uint256) {
        if (userVP[account] >= MinVP && userVP[account] < MaxVP) {
            return 1;
        } else if (userVP[account] >= MaxVP) {
            return 5;
        } else {
            return 0;
        }
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
