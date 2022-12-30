// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

error InsufficientBalance();
error NotOwner();

contract payToStream {
    mapping(address => uint) s_accountBalance;
    address public i_owner;

    constructor(address owner) {
        i_owner = owner;
    }

    // i_owner is the address with administrative authority

    function fundContract() public payable {
        s_accountBalance[msg.sender] = msg.value;
    }

    function withdrawMoney(uint _amount) public {
        uint amount = _amount * 1e18;
        if (s_accountBalance[msg.sender] < amount) revert InsufficientBalance();
        s_accountBalance[msg.sender] -= amount;
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transaction failed");
    }

    modifier onlyOwner() {
        if (msg.sender != i_owner) revert NotOwner();
        _;
    }

    function withdrawCommission(address _reciever) public onlyOwner {
        uint commission = (3 * address(this).balance) / 1000;
        (bool success, ) = payable(_reciever).call{value: commission}("");
        require(success, "Transaction failed");
    }

    // _reciever is the address set by admin where they want to transfer funds

    fallback() external payable {
        fundContract();
    }

    receive() external payable {
        fundContract();
    }
}
