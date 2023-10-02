import React from "react";

interface IButton {
  name: string;
}

export const ButtonPrimary: React.FC<IButton> = ({ name }) => {
  return <button type="submit" className="button-primary">{name}</button>;
};
