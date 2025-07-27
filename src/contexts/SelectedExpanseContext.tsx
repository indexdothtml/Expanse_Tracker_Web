import { type ReactNode, useState, createContext } from "react";

type SelectedExpanseContext = {
  selectedExpanse: string[];
  handleSelectionUpdate: (id: string) => void;
};

type SelectedExpanseProviderProps = {
  children: ReactNode;
};

const SelectedExpanseContext = createContext<SelectedExpanseContext | null>(
  null
);

function SelectedExpanseProvider({ children }: SelectedExpanseProviderProps) {
  const [selectedExpanse, setSelectedExpanse] = useState<string[]>([]);

  // Function adds selected row id in selectedExpanse state if it is not exist already inside state.
  // and it removes same id if it is already exist in state.
  const handleSelectionUpdate = (id: string) => {
    setSelectedExpanse((prev) =>
      prev.includes(id) ? prev.filter((Id) => Id !== id) : [...prev, id]
    );
  };

  return (
    <SelectedExpanseContext.Provider
      value={{ selectedExpanse, handleSelectionUpdate }}
    >
      {children}
    </SelectedExpanseContext.Provider>
  );
}

export { SelectedExpanseContext, SelectedExpanseProvider };
