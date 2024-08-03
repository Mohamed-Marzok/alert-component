import { Bell, X } from "lucide-react";
import "./alert.scss";
import { ReactNode, useState } from "react";

interface Iprops {
  title: string;
  description: string;
  icon: ReactNode;
  className: string;
}
export default function Alert({
  title,
  description,
  icon,
  className = "aleart-error",
}: Iprops) {
  const [open, setOpen] = useState(true);
  const closeAleartHandle = () => {
    setOpen(false);
  };
  return (
    <div className={className} style={{ display: open ? "block" : "none" }}>
      <div className="aleart-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>
        <span>
          <X size={20} onClick={closeAleartHandle} />
        </span>
      </div>
      <p>{description}</p>
    </div>
  );
}
