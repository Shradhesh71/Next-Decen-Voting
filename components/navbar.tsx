"use client";

// import WalletIcon from "../public/icons/WalletIcon";

// import { Button } from "./ui/button";

// import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
// import { formatAddress } from "../lib/utils";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";

// export const ConnectWalletButton = () => {
//   const { sdk, connected, connecting, account } = useSDK();

//   const connect = async () => {
//     try {
//       await sdk?.connect();
//     } catch (err) {
//       console.warn(`No accounts found`, err);
//     }
//   };

//   const disconnect = () => {
//     if (sdk) {
//       sdk.terminate();
//     }
//   };

//   return (
//     <div className="relative">
//       {connected ? (
//         <Popover>
//           <PopoverTrigger>
//             <Button>{formatAddress(account)}</Button>
//           </PopoverTrigger>
//           <PopoverContent className="mt-2 w-44 bg-gray-100 border rounded-md shadow-lg right-0 z-10 top-10">
//             <button
//               onClick={disconnect}
//               className="block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200"
//             >
//               Disconnect
//             </button>
//           </PopoverContent>
//         </Popover>
//       ) : (
//         <Button disabled={connecting} onClick={connect}>
//           <WalletIcon className="mr-2 h-4 w-4" /> Connect Wallet
//         </Button>
//       )}
//     </div>
//   );
// };

// export const NavBar = () => {
//   const host =
//     typeof window !== "undefined" ? window.location.host : "defaultHost";

//   const sdkOptions = {
//     logging: { developerMode: false },
//     checkInstallationImmediately: false,
//     dappMetadata: {
//       name: "Next-Metamask-Boilerplate",
//       url: host, // using the host constant defined above
//     },
//   };

//   return (
//     <nav className="flex items-center justify-between max-w-screen-xl px-6 mx-auto py-7 rounded-xl">
//       <Link href="/" className="flex gap-1 px-6">
//       <div className="text-white text-4xl font-bold font-mono">
//            <Link href="/">Decentralized Voting</Link>
//          </div>
//       </Link>
//       <div className="flex gap-4 px-6">
//         <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
//           <ConnectWalletButton />
//         </MetaMaskProvider>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Link from 'next/link';

export default function Navbar() {
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [provider, setProvider] = useState(null);

  const connectWalletHandler = () => {
    //   @ts-ignore
    if (typeof window !== "undefined" && window.ethereum && defaultAccount == null) {
      // set ethers provider
      //   @ts-ignore
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
      //   @ts-ignore
      // connect to metamask
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: any) => {
          setConnButtonText("Wallet Connected");
          setDefaultAccount(result[0]);
        })
        .catch((error: any) => {
          setErrorMessage(error.message);
        });
      //   @ts-ignore
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  useEffect(() => {
    if (defaultAccount) {
        // @ts-ignore
      provider.getBalance(defaultAccount)
        .then((balanceResult:any) => {
            //   @ts-ignore
            setUserBalance(ethers.utils.formatEther(balanceResult));
        })
    }
  }, [defaultAccount]);

  const shortenAddress = (defaultAccount:any) => {
    return `${defaultAccount.slice(0, 6)}...${defaultAccount.slice(-4)}`;
  }

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold"><Link href="/">Decentralized Voting</Link></div>
        <div>
          {defaultAccount ? (
            <button onClick={connectWalletHandler} className="bg-indigo-500 text-white px-4 py-2 rounded">
              {shortenAddress(defaultAccount)}
            </button>
          ) : (
            <button onClick={connectWalletHandler} className="bg-blue-600 text-white px-4 py-2 rounded">
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
