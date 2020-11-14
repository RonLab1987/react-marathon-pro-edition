export enum PageContainerType {
  Accent = "accent",
  Dark = "dark",
  Light = "light",
  Danger = "danger",
}

export interface PageContainerProps {
  type?: PageContainerType;
  center?: boolean;
}
