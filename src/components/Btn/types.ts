// eslint-disable-next-line no-shadow
export enum BtnType {
  Primary = "primary",
  Secondary = "secondary",
  Warning = "warning",
}
// eslint-disable-next-line no-shadow
export enum BtnSize {
  Default = "default",
  Small = "small",
}

export interface BtnProps {
  type?: BtnType;
  size?: BtnSize;
  onClick: () => void;
}
