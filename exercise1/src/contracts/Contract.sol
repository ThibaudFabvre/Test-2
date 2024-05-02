// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token {
    string public name;
    string public symbol;

    mapping(address => uint256) public balanceOf;

    event Burn(address indexed from, uint256 value);
    event Mint(address indexed to, uint256 value);

    constructor(
        string memory _name,
        string memory _symbol
    ) {
        name = _name;
        symbol = _symbol;
    }

    function burn(address _to, uint256 _value) public returns (uint256 newBalance) {
        require(balanceOf[_to] >= _value, "Insufficient balance");
        
        balanceOf[_to] -= _value;
        emit Burn(_to, _value);
        return balanceOf[_to];
    }

    function mint(address _to, uint256 _value) public returns (uint256 newBalance) {
        require(_to != address(0), "Invalid address");
        
        balanceOf[_to] += _value;
        emit Mint(_to, _value);
        return balanceOf[_to];
    }

    function getBalance(address _address) public view returns (uint256) {
        return balanceOf[_address];
    }
}