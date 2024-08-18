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

    function addQuestion(string memory questionText) public {
        require(msg.sender == chairperson, "Only the chairperson can add questions.");
        questions.push(Question({
            text: questionText,
            totalVotesFor: 0,
            totalVotesAgainst: 0,
            votingOpen: true
        }));
    }

    function giveRightToVote(address voter) public {
        require(msg.sender == chairperson, "Only the chairperson can give right to vote.");
        require(!voters[voter].voted, "The voter already voted.");
        voters[voter].weight = umcToken.balanceOf(voter);
    }

    function vote(uint questionIndex, bool voteFor) public {
        require(questionIndex < questions.length, "Invalid question.");
        Question storage question = questions[questionIndex];
        require(question.votingOpen, "Voting for this question is closed.");

        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Has no right to vote");
        require(!sender.voted, "Already voted.");
        sender.voted = true;

        if (voteFor) {
            question.totalVotesFor += sender.weight;
        } else {
            question.totalVotesAgainst += sender.weight;
        }
    }

    function closeVoting(uint questionIndex) public {
        require(msg.sender == chairperson, "Only the chairperson can close the vote.");
        require(questionIndex < questions.length, "Invalid question.");
        Question storage question = questions[questionIndex];
        question.votingOpen = false;
    }

    function getQuestionResult(uint questionIndex) public view returns (string memory text, uint forVotes, uint againstVotes, bool isOpen) {
        require(questionIndex < questions.length, "Invalid question.");
        Question storage question = questions[questionIndex];
        return (question.text, question.totalVotesFor, question.totalVotesAgainst, question.votingOpen);
    }
}
