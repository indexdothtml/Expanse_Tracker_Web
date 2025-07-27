function ExpanseTableHeader() {
  return (
    <div
      role="row"
      className="bg-gray-100 text-xs font-semibold text-gray-600 h-8 rounded-md flex items-center pl-4 pr-4"
    >
      <div role="columnheader" className="w-1/4 pl-8">
        Name
      </div>
      <div role="columnheader" className="w-1/5 text-start">
        Amount
      </div>
      <div role="columnheader" className="w-1/5 text-start">
        Date
      </div>
      <div role="columnheader" className="w-1/5 text-start">
        Paid by
      </div>
      <div role="columnheader" className="w-1/5 text-start">
        You owe
      </div>
      <div role="columnheader" className="w-8"></div>
    </div>
  );
}

export default ExpanseTableHeader;
