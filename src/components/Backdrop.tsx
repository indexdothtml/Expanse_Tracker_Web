import { type ReactNode, type Dispatch, type SetStateAction } from "react";

type BackdropProps = {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

function Backdrop({ children, open, setOpen, className }: BackdropProps) {
  if (open) {
    return (
      <div
        className={`bg-black opacity-50 h-screen w-screen absolute top-0 left-0 ${className}`}
        onClick={() => setOpen(false)}
      >
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    );
  } else {
    return null;
  }
}

export default Backdrop;
