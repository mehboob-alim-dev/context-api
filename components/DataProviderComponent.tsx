import { useState, createContext } from "react";
import DataReceiverComponent from "./DataReceiverComponent";
import { UserContext } from "@/context/UserContext";

export default function DataProviderComponent() {
  const [user, setUser] = useState("Mehboob Alim");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <DataReceiverComponent />
    </UserContext.Provider>
  );
}
