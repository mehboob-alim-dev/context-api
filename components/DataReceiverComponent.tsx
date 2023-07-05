import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";
export default function DataReceiverComponent() {
  const user = useContext(UserContext);

  return (
    <>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
