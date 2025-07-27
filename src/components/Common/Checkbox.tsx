import { Check } from "lucide-react";
import { useState, useContext } from "react";

import { SelectedExpanseContext } from "../../contexts/SelectedExpanseContext";

type CheckboxProps = {
  rowId: string;
};

function Checkbox({ rowId }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);
  const selectedExpanse = useContext(SelectedExpanseContext);

  const handleClickEvent = () => {
    setIsChecked(!isChecked);
    selectedExpanse?.handleSelectionUpdate(rowId);
  };

  return (
    <div
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      onClick={handleClickEvent}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClickEvent();
        }
      }}
      className="h-5 w-5 bg-white border border-gray-400 rounded-sm flex justify-center items-center cursor-pointer text-[var(--primary-color)]"
    >
      {isChecked && <Check size={16} strokeWidth={3} />}
    </div>
  );
}

export default Checkbox;
