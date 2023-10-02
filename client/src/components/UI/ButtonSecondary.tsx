import React from "react";

interface IButton {
  name: string;
}

export const ButtonSecondary: React.FC<IButton> = ({ name }) => {
  return <button type="submit" className="button-secondary">{name}</button>;
};
