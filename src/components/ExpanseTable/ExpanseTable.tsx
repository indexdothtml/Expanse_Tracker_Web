import { SearchBar, ExpanseTableHeader } from "../index";

function ExpanseTable() {
  return (
    <>
      <h3 className="text-sm font-semibold text-[var(--primary-color)]">
        Expanses
      </h3>
      <div className="flex justify-between items-center">
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
      <ExpanseTableHeader />
    </>
  );
}

export default ExpanseTable;
