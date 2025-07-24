import { UserRound, Activity, Flag } from "lucide-react";

function BottomNavigationBar() {
  return (
    <nav>
      <ul className="flex justify-center gap-8 p-2 cursor-pointer bg-white">
        <li className="flex flex-col items-center gap-1 hover:text-[#F18C09]">
          <UserRound size={20} />
          <h4 className="text-xs font-semibold">Friends</h4>
        </li>
        <li className="flex flex-col items-center gap-1 hover:text-[#F18C09]">
          <Activity size={20} />
          <h4 className="text-xs font-semibold">Activity</h4>
        </li>
        <li className="flex flex-col items-center gap-1 hover:text-[#F18C09]">
          <Flag size={20} />
          <h4 className="text-xs font-semibold">Pinned</h4>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavigationBar;
