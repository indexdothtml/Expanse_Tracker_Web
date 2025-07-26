import { Users, Settings } from "lucide-react";

import { SideBar, GroupImage, ExpanseTable } from "../components/index";

function Dashboard() {
  return (
    <main className="flex">
      <SideBar />
      <div className="right pt-4 pl-20 pr-20 w-full">
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="h-20 w-20 rounded-full border border-gray-400 flex justify-center items-center">
              <GroupImage groupName="Abhishek Kshirsagar" />
            </div>
            <div className="h-8 w-8 rounded-full border border-gray-400 flex justify-center items-center hover:shadow-[0_0_4px_rgba(0,0,0,0.25)] hover:cursor-pointer hover:text-[var(--primary-color)]">
              <Users size={16} />
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="font-bold text-[var(--primary-color)]">
              Lorem ipsum
            </h2>
            <Settings
              size={16}
              className="hover:rotate-45 transition-all cursor-pointer"
            />
          </div>
        </div>

        <ExpanseTable />
      </div>
    </main>
  );
}

export default Dashboard;
