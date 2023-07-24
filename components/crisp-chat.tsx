"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("86f660a4-1e68-45e8-9f75-59ce9671a54c");
  }, []);

  return null;
};