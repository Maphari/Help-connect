import { ReactNode, FC } from "react";
import { Link, Location, useLocation } from "react-router-dom";

interface ILinkNav {
  path: string;
  name: string;
  styles?: string;
  children: ReactNode;
  onClick?: () => void
}

export const LinkNav: FC<ILinkNav> = ({ path, name, styles, children, onClick }) => {
  const location:Location<string> = useLocation()

  return (
    <Link
      to={path}
      onClick={onClick}
      className={`flex p-2 rounded justify-between transition-all duration-700 ease-linear hover:bg-slate-300 ${location.pathname === path ? "bg-slate-300" : ""}  ${styles}`}
    >
      <div className="flex items-center gap-2 text-gray-600">
        <span className="text-lg">{children}</span>
        <span className="text-sm">{name}</span>
      </div>
      {/* <div className="bg-blue-950 w-2"></div> */}
    </Link>
  );
};
