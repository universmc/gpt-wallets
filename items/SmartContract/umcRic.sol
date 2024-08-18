// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

interface UMCToken {
    function balanceOf(address account) external view returns (uint256);
}

contract RegulationVote {
    UMCToken public umcToken;

    struct Question {
        string text;
        uint totalVotesFor;
        uint totalVotesAgainst;
        bool votingOpen;
        uint startTime; // Ajout de l'horodatage de début de vote
        uint endTime; // Ajout de l'horodatage de fin de vote
    }

    struct Voter {
        uint weight;
        bool voted;
    }

    address public chairperson;
    Question[] public questions;
    mapping(address => Voter) public voters;

    constructor(address _umcTokenAddress) {
        chairperson = msg.sender;
        umcToken = UMCToken(_umcTokenAddress);
    }

    function addQuestion(string memory questionText, uint _startTime, uint _endTime) public {
        require(msg.sender == chairperson, "Only the chairperson can add questions.");
        require(_startTime < _endTime, "Start time must be before end time.");
        questions.push(Question({
            text: questionText,
            totalVotesFor: 0,
            totalVotesAgainst: 0,
            votingOpen: true,
            startTime: _startTime,
            endTime: _endTime
        }));
    }

    // Les fonctions giveRightToVote, vote et closeVoting restent inchangées.

    function getQuestionResult(uint questionIndex) public view returns (string memory text, uint forVotes, uint againstVotes, bool isOpen, uint startTime, uint endTime) {
        require(questionIndex < questions.length, "Invalid question.");
        Question storage question = questions[questionIndex];
        return (
          
            question.text,
            question.totalVotesFor,
            question.totalVotesAgainst,
            question.votingOpen,
            question.startTime,
            question.endTime
        );
    }
}
