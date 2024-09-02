"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Form, useNotification, Button } from "web3uikit";
import CandidateName from "../../components/canadidates";
import Navbar from "@/components/navbar";

export default function VotingPage() {
  return (
    <div>
        <Navbar/>
      <div className="justify-center text-center flex-row flex mt-44">
        <div className="flex-col flex">
          <CandidateName name="Mukexh" slogan="jai ho mukesh" partyname="BJP" />
          <CandidateName
            name="Muka bhai"
            slogan="jai ho muka ki "
            partyname="BJP"
          />
          <h1 className="mt-5">
            Please select one of the condidates and click the vote buttons
          </h1>
        </div>
        <div className="flex ml-20">
          <Button text="Vote" theme="primary" type="button"></Button>
        </div>
      </div>
    </div>
  );
}
