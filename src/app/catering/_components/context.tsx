"use client";
import { IMenuItem } from "@/app/_utilities";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SelectedItemsContextType {
  selectedItems: IMenuItem[];
  setSelectedItems: (items: IMenuItem[]) => void;
}

const SelectedItemsContext = createContext<
  SelectedItemsContextType | undefined
>(undefined);

export const useSelectedItemsContext = () => {
  const context = useContext(SelectedItemsContext);
  if (!context) {
    throw new Error(
      "useSelectedItemsContext must be used within a SelectedItemsProvider"
    );
  }
  return context;
};

interface SelectedItemsProviderProps {
  children: ReactNode;
}

export const SelectedItemsProvider: React.FC<SelectedItemsProviderProps> = ({
  children,
}) => {
  const [selectedItems, setSelectedItems] = useState<IMenuItem[]>([]);

  return (
    <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
      {children}
    </SelectedItemsContext.Provider>
  );
};
