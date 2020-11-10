// eslint-disable-next-line no-shadow
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
