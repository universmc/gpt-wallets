// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title RICballot
 * @dev Implémentation d'un vote pour ou contre la régulation du pouvoir d'achat avec l'UMC
 */
contract RICballot is Ownable {
    IERC20 public umcToken;
    uint256 public endTime;
    mapping(address => bool) public hasVoted;
    uint256 public votesFor;
    uint256 public votesAgainst;

    event Voted(address indexed voter, bool vote, uint256 weight);

    constructor(address _umcTokenAddress, uint256 _duration) {
        umcToken = IERC20(_umcTokenAddress);
        endTime = block.timestamp + _duration;
    }

    function vote(bool _voteFor) external {
        require(block.timestamp <= endTime, "Le vote est terminé.");
        require(!hasVoted[msg.sender], "Vous avez déjà voté.");
        uint256 voterBalance = umcToken.balanceOf(msg.sender);
        require(voterBalance > 0, "Vous devez posséder des UMC pour voter.");

        hasVoted[msg.sender] = true;
        if (_voteFor) {
            votesFor += voterBalance;
        } else {
            votesAgainst += voterBalance;
        }

        emit Voted(msg.sender, _voteFor, voterBalance);
    }

    function getResult() external view returns (string memory) {
        require(block.timestamp > endTime, "Le vote n'est pas encore terminé.");
        if (votesFor > votesAgainst) {
            return "La majorité est pour la régulation du pouvoir d'achat avec l'UMC.";
        } else if (votesFor < votesAgainst) {
            return "La majorité est contre la régulation du pouvoir d'achat avec l'UMC.";
        } else {
            return "Le vote est à égalité.";
        }
    }
}
