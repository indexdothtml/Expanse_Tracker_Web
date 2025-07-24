type SearchBarProps = {
  placeholder: string;
};

function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <input
      type="text"
      name={`${placeholder}-SearchBar`}
      id={`${placeholder}-Id`}
      placeholder={placeholder}
      className="shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-sm w-full text-[#636161] font-semibold text-xs pl-4 pr-4 pt-2 pb-2 focus:outline-none"
    />
  );
}

export default SearchBar;
