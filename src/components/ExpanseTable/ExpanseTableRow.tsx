import { EllipsisVertical, IndianRupee } from "lucide-react";

import { Checkbox } from "../index";

type ExpanseTableRowProps = {
  id: string;
  name: string;
  amount: number;
  date: string;
  paidBy: string;
  youOwe: number;
  isRowSelected: boolean;
};

function ExpanseTableRow({
  id,
  name,
  amount,
  date,
  paidBy,
  youOwe,
}: ExpanseTableRowProps) {
  return (
    <div
      role="row"
      className="border-b border-black pt-6 pb-6 text-xs font-semibold text-gray-600 h-8 flex items-center justify-between pl-4 pr-4"
    >
      <div className="flex gap-3 items-center w-1/4">
        <div className="w-5">
          <Checkbox rowId={id} />
        </div>
        <span className="overflow-hidden text-ellipsis text-nowrap w-32">
          {name}
        </span>
      </div>
      <div className="w-1/5 flex gap-1 items-center">
        <IndianRupee size={12} strokeWidth={2.25} /> {amount}
      </div>
      <div className="w-1/5 text-start">{date}</div>
      <div className="w-1/5 text-start overflow-hidden text-ellipsis text-nowrap pr-2">
        {paidBy}
      </div>
      <div className="w-1/5 flex gap-1 items-center">
        <IndianRupee size={12} strokeWidth={2.25} /> {youOwe}
      </div>
      <div className="hover:text-[var(--primary-color)] hover:cursor-pointer">
        <EllipsisVertical size={20} />
      </div>
    </div>
  );
}

export default ExpanseTableRow;
