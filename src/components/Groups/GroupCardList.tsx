import GroupCard from "./GroupCard";

type GroupCardListProps = {
  title: string;
  listHeight: string;
};

function GroupCardList({ title = "title", listHeight }: GroupCardListProps) {
  return (
    <div className="w-full">
      <h4 className="text-xs text-[var(--primary-color)] font-semibold mb-2">
        {title}
      </h4>
      <ul className={`flex flex-col gap-2 overflow-y-scroll ${listHeight}`}>
        <GroupCard name="Our Nest" status="owed" isPinned={true} />
        <GroupCard name="Hideout" status="owe" isPinned={false} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />

        <GroupCard name="room no. 35" status="settled" isPinned={true} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />

        <GroupCard name="room no. 35" status="settled" isPinned={true} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />

        <GroupCard name="room no. 35" status="settled" isPinned={true} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />
        <GroupCard name="room no. 35" status="settled" isPinned={true} />
      </ul>
    </div>
  );
}

export default GroupCardList;
