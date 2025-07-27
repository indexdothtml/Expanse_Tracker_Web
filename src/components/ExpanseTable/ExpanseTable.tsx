import { Trash2 } from "lucide-react";

import { SearchBar, ExpanseTableHeader, ExpanseTableRow } from "../index";
import { useSelectedExpanse } from "../../hooks/useSelectedExpanse";

function ExpanseTable() {
  const selectedExpanse = useSelectedExpanse();

  return (
    <>
      <h3 className="text-sm font-semibold text-[var(--primary-color)]">
        Expanses
      </h3>

      <div className="flex justify-between items-center pl-8 pr-8 mt-2 mb-2">
        <p className="text-xs font-semibold">
          Expanses <span className="text-gray-400">13</span>
        </p>
        <SearchBar placeholder="Search expanse" />
        <button
          type="button"
          className="pt-2 pb-2 pl-5 pr-5 rounded-md bg-[var(--primary-color)] shadow-[0_0_4px_rgba(0,0,0,0.25)] text-white font-semibold text-xs active:shadow-none hover:cursor-pointer"
        >
          Add Expanse
        </button>
      </div>

      <div role="table" className="w-full mb-4">
        <ExpanseTableHeader />
        <div
          role="rowgroup"
          className="h-80 overflow-y-scroll scroll-container"
        >
          <ExpanseTableRow
            id="1E"
            name="car fuel long sdffggw ljalje asdfjeo"
            amount={1000}
            date="01 July 2025"
            paidBy="Venket Sai Krishna Kommonaboina"
            youOwe={0}
            isRowSelected={true}
          />
          <ExpanseTableRow
            id="2E"
            name="car fuel long sdffggw ljalje asdfjeo"
            amount={1000}
            date="01 July 2025"
            paidBy="Venket Sai Krishna Kommonaboina"
            youOwe={0}
            isRowSelected={true}
          />
        </div>
      </div>

      <div role="status" className="pl-8">
        {selectedExpanse && selectedExpanse.length !== 0 && (
          <p className="flex items-center gap-5 text-xs font-semibold">
            <span>
              Selected{" "}
              <span className="text-gray-400">{selectedExpanse.length}</span>
            </span>{" "}
            <Trash2
              size={16}
              className="hover:text-[var(--primary-color)] hover:cursor-pointer"
            />
          </p>
        )}
      </div>
    </>
  );
}

export default ExpanseTable;
