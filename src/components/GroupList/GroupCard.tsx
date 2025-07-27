import { Pin, PinOff } from "lucide-react";

import { GroupImage } from "../index";

type GroupCardProps = {
  image?: string;
  name: string;
  status: "owe" | "owed" | "settled";
  isPinned: boolean;
};

function GroupCard({ image, name, status, isPinned = false }: GroupCardProps) {
  const statusContentColor =
    status === "owe"
      ? "text-[#FD6565]"
      : status === "owed"
      ? "text-[#51D07D]"
      : "text-[#A9A9A9]";

  const statusContent =
    status === "owe"
      ? "You owe someone!"
      : status === "owed"
      ? "Someone owe to you!"
      : "Settled up!";

  return (
    <li className="h-14 w-fit list-none border-b pb-2 pt-2 border-black rounded-t-md flex justify-center items-center gap-4 hover:cursor-pointer hover:bg-gray-50">
      <div className="w-10 h-10 border border-gray-400 rounded-full flex justify-center items-center">
        <GroupImage imageURL={image} groupName="Abhishek Kshirsagar" />
      </div>

      <div className="flex flex-col">
        <span className="w-32 text-sm font-semibold text-gray-600 text-nowrap overflow-hidden text-ellipsis">
          Govardhan Apartment
        </span>
        <span className={`text-xs font-semibold ${statusContentColor}`}>
          {statusContent}
        </span>
      </div>

      <div className="h-7 w-7 rounded-full flex justify-center items-center hover:bg-amber-500 hover:text-white">
        {isPinned ? <PinOff size={20} /> : <Pin size={20} />}
      </div>
    </li>
  );
}

export default GroupCard;
