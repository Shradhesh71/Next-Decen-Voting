"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Form, useNotification, Button } from "web3uikit";

export default function admin() {
  const router = useRouter();

  return (
    <div>
      <div className="container grid grid-cols-2 gap-20 ">
        <div className="left_image ml-28 mt-20">
          <Image src="/regis.jpg" alt="Vote" height={500} width={500} />
        </div>
        <div className="form flex justify-center items-center">
          <Form
            // onSubmit={approveAndList}
            data={[
              {
                name: "UserId",
                type: "text",
                inputWidth: "50%",
                value: "",
                key: "userId",
              },
              {
                name: "Password",
                type: "text",
                inputWidth: "50%",
                value: "",
                key: "password",
              },
            ]}
            title="Admin Login"
            id="admin_login Form"
          />
        </div>
      </div>
    </div>
  );
}
