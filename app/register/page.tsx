"use client";

import React, { useState } from "react";
import { Form, useNotification } from "web3uikit";
import { ethers } from "ethers";
import votingAbi from "../../constants/Voting.json";
import networkConfig from "../../constants/networkMapping.json";
import Navbar from "@/components/navbar";

export default function Register() {
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
    const [signer, setSigner] = useState<ethers.Signer | null>(null);
    const [votingContract, setVotingContract] = useState<ethers.Contract | null>(null);
    const dispatch = useNotification();
    const addresses = networkConfig;
    const chainId = 5; // Replace with the correct chainId for Sepolia

    React.useEffect(() => {
        if (provider && signer) {
            // @ts-ignore
            const contractAddress = addresses[chainId.toString()]["Voting"][0];
            const contract = new ethers.Contract(contractAddress, votingAbi, signer);
            setVotingContract(contract);
        }
    }, [provider, signer]);

    // Function to handle voter registration
    async function registerVoter(data:any) {
        if (!votingContract) {
            console.log("Voting contract is not initialized.");
            return;
        }

        const name = data.data[0].inputResult;
        const email = data.data[1].inputResult;
        const aadhar = data.data[2].inputResult;
        const phone = data.data[3].inputResult;

        try {
            const tx = await votingContract.registerAsVoter(name, phone, aadhar, email);
            await tx.wait();
            dispatch({
                type: "success",
                message: "Successfully registered as a voter!",
                title: "Voter Registered",
                position: "topR",
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: "error",
                message: "Failed to register as a voter.",
                title: "Registration Failed",
                position: "topR",
            });
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="container grid grid-cols-2 gap-20">
                <div className="left_image ml-28 mt-20">
                    <img src="/regis.jpg" alt="Vote" height={500} width={500} />
                </div>
                <div className="form flex justify-center items-center">
                    <Form
                        onSubmit={registerVoter}
                        data={[
                            { name: "Name", type: "text", inputWidth: "50%", value: "", key: "name" },
                            { name: "Email", type: "text", inputWidth: "50%", value: "", key: "email" },
                            { name: "Aadhar Number", type: "number", value: "", key: "aadhar" },
                            { name: "Phone Number", type: "number", value: "", key: "phone" },
                        ]}
                        title="Register Now"
                        id="Register Form"
                        isDisabled={!signer} // Disable form submission if wallet is not connected
                    />
                </div>
            </div>
        </div>
    );
}
