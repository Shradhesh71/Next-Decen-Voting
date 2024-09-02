"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Form, useNotification, Button } from "web3uikit";
// import {} from ""

export default function CandidateList() {
  return (
    <div className="ml-32">
      <div className="container grid grid-cols-2 gap-20">
        <div>
          <h1> Candidate List </h1>
        </div>
        <div className="form flex justify-center items-center">
          <Form
            // onSubmit={approveAndList}
            data={[
              {
                name: "Name",
                type: "text",
                inputWidth: "50%",
                value: "",
                key: "name",
              },
              {
                name: "Slogan",
                type: "text",
                inputWidth: "50%",
                value: "",
                key: "slogan",
              },
              {
                name: "Party Name",
                type: "text",
                inputWidth: "50%",
                value: "",
                key: "party_name",
              },
              {
                name: "Aadhar Number",
                type: "number",
                inputWidth: "50%",
                value: "",
                key: "aadhar",
              },
            ]}
            title="Add Candidate"
            id="add_candidate Form"
          />
        </div>
      </div>
    </div>
  );
}
