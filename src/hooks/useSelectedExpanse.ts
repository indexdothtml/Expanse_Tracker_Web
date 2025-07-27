import { useContext } from "react";

import { SelectedExpanseContext } from "../contexts/SelectedExpanseContext";

// Gets all selected expanses id as an array.
function useSelectedExpanse() {
  const selectedExpanse = useContext(SelectedExpanseContext);

  return selectedExpanse?.selectedExpanse;
}

export { useSelectedExpanse };
