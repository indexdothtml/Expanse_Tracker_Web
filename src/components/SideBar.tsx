import { BottomNavigationBar, GroupCardList, Logo, SearchBar } from "./index";

function SideBar() {
  return (
    <div className="w-80 h-svh border-r border-gray-300 p-9 flex flex-col items-center gap-4">
      <Logo />
      <span className="text-sm text-[#F18C09] font-semibold">Groups</span>
      <SearchBar placeholder="Search group" />
      <GroupCardList title="All Groups" listHeight="max-h-80" />
      <div className="flex justify-center items-center fixed bottom-0">
        <BottomNavigationBar />
      </div>
    </div>
  );
}

export default SideBar;
