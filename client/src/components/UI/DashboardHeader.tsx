import { FC } from "react";

interface IHeader {
  header: string;
  subHeader: string;
  stylesHeader?: string;
  stylesSubHeader?: string;
}

export const DashboardHeader: FC<IHeader> = ({
  header,
  subHeader,
  stylesHeader,
  stylesSubHeader,
}) => {
  return (
    <section>
      <h3 className={`${!stylesHeader ? "text-base " : stylesHeader}`}>
        {header}
      </h3>
      <p
        className={`${
          !stylesSubHeader ? "text-[0.7rem] opacity-30 mt-1" : stylesSubHeader
        }`}
      >
        {subHeader}
      </p>
    </section>
  );
};
