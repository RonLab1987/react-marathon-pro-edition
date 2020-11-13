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
