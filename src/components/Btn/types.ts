// eslint-disable-next-line no-shadow
export enum BtnType {
  Primary = "primary",
  Secondary = "secondary",
  Accent = "accent",
}

export interface BtnProps {
  type?: BtnType;
  small?: boolean;
  onClick: () => void;
}
