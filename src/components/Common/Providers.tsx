import { type ReactNode } from "react";

import { SelectedExpanseProvider } from "../../contexts/SelectedExpanseContext";

type ProvidersProps = {
  children: ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return <SelectedExpanseProvider>{children}</SelectedExpanseProvider>;
}

export default Providers;
