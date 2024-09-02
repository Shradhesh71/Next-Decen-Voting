"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Form, useNotification, Button } from "web3uikit";
// import {} from ""

export default function mainDashboard() {
  return (
    <div className="ml-32">
      <div className="container grid grid-row-2 gap-20">
        <div className="container grid grid-cols-2 gap-20">
          <div>
            <h1>Election Name</h1>
          </div>
          <div>
            <h3>Start date: </h3>
            <h3>End date: </h3>
          </div>
        </div>
        <div className="container grid grid-cols-3 gap-20">
          <div>
            <h1>Voter Count</h1>
          </div>
          <div>
            <h1> Candidate count</h1>
          </div>
          <div>
            <h1> Total Votes</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
