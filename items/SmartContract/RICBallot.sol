// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract RICBallot {

    struct Voter {
        uint weight; // Le poids est accumulé par délégation
        bool voted;  // Si vrai, la personne a déjà voté
        uint vote;   // 0 pour "contre", 1 pour "pour"
    }

    address public chairperson;
    mapping(address => Voter) public voters;
    uint public totalVotesFor; // Nombre total de votes "pour"
    uint public totalVotesAgainst; // Nombre total de votes "contre"

    constructor() {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;
    }

    function giveRightToVote(address voter) public {
        require(msg.sender == chairperson, "initialisation du protocole législatif");
        require(!voters[voter].voted, "Timestamp +.date[end].");
        require(voters[voter].weight == 0);
        voters[voter].weight = 1;
    }

    function vote(bool voteFor) public {
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Pas le droit de vote");
        require(!sender.voted, "Déjà voté.");
        sender.voted = true;

        if (voteFor) {
            totalVotesFor += sender.weight;
        } else {
            totalVotesAgainst += sender.weight;
        }
    }

    function winningOption() public view returns (string memory) {
        if (totalVotesFor > totalVotesAgainst) {
            return "Pour";
        } else if (totalVotesFor < totalVotesAgainst) {
            return "Contre";
        } else {
            return "Égalité";
        }
    }
}
