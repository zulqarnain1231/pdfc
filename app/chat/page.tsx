import Chat from "@/components/Chat/Chat";
import Navbar from "@/components/Shared/Navigations/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="w-full h-full">
      <Navbar />
      <Chat />
    </main>
  );
};

export default page;
