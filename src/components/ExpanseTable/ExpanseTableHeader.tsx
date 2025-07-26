import { Check } from "lucide-react";
import { useState } from "react";

function ExpanseTableHeader() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <thead className="bg-gray-100 text-xs font-normal text-gray-600 h-8 rounded-md flex items-center justify-between pl-4 pr-4">
      <th className="flex gap-3 items-center">
        <div
          role="checkbox"
          aria-checked={isChecked}
          tabIndex={0}
          onClick={() => setIsChecked(!isChecked)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsChecked(!isChecked);
            }
          }}
          className="h-5 w-5 bg-white border border-gray-400 rounded-sm flex justify-center items-center cursor-pointer"
        >
          {isChecked && <Check size={16} strokeWidth={3} />}
        </div>
        Name
      </th>
      <th>Amount</th>
      <th>Date</th>
      <th>Paid by</th>
      <th>You owe</th>
      <th></th>
    </thead>
  );
}

export default ExpanseTableHeader;
