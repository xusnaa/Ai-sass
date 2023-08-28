"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("bfc33f6c-d4b4-44e6-9f74-65f510c82ddf");
  }, []);

  return null;
};