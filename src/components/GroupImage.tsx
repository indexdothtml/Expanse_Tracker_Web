import { Group } from "lucide-react";

import { shortNameOf } from "../utils/utilityFunctions";

type GroupImageProps = {
  imageURL?: string;
  groupName: string;
};

function GroupImage({ imageURL, groupName }: GroupImageProps) {
  if (imageURL && imageURL !== "") {
    return <img src={imageURL} />;
  } else {
    const shortedName = shortNameOf(groupName);
    if (shortedName === "") {
      return <Group size={20} />;
    } else {
      return <span className="font-semibold">{shortedName}</span>;
    }
  }
}

export default GroupImage;
