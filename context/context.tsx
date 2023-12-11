"use client";
import { createContext, useState } from "react";

export const fileContext = createContext<null | any>(null);

type Props = {
  children: React.ReactNode;
};
function Context({ children }: Props) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <fileContext.Provider value={{ file, setFile }}>
      {children}
    </fileContext.Provider>
  );
}

export default Context;
