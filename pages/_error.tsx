// @ts-nocheck

import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/notfound");
  });

  return null;
};

export default Error;