"use client";

import React, { createContext, useContext, useState } from "react";
import { BookACallModal } from "@/components/BookACallModal";

interface BookACallContextType {
  isOpen: boolean;
  openBookACall: () => void;
  closeBookACall: () => void;
}

const BookACallContext = createContext<BookACallContextType | undefined>(undefined);

export function BookACallProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBookACall = () => setIsOpen(true);
  const closeBookACall = () => setIsOpen(false);

  return (
    <BookACallContext.Provider value={{ isOpen, openBookACall, closeBookACall }}>
      {children}
      <BookACallModal isOpen={isOpen} onClose={closeBookACall} />
    </BookACallContext.Provider>
  );
}

export function useBookACall() {
  const context = useContext(BookACallContext);
  if (!context) {
    throw new Error("useBookACall must be used within a BookACallProvider");
  }
  return context;
}
