// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract masters {
    string user_name;
    uint256 user_id;
    string user_essay;
    string user_sop;
    string user_lor;
    string user_resume;

    function applicant_id(uint256 id) public {
        user_id = id;
    }

    function printuser_id() public view returns (uint256) {
        return user_id;
    }

    function applicant_essay(string memory essay) public {
        user_essay = essay;
    }

    function printuser_essay() public view returns (string memory) {
        return user_essay;
    }

    function applicant_sop(string memory sop) public {
        user_sop = sop;
    }

    function printuser_sop() public view returns (string memory) {
        return user_sop;
    }

    function applicant_resume(string memory resume) public {
        user_resume = resume;
    }

    function printuser_resume() public view returns (string memory) {
        return user_resume;
    }

    function applicant_lor(string memory lor) public {
        user_lor = lor;
    }

    function printuser_lor() public view returns (string memory) {
        return user_lor;
    }
}
