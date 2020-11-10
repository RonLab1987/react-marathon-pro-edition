export type HeaderMenuItem = {
  id: number;
  label: string;
  to: string;
};

export interface HeaderMenuProps {
  items: HeaderMenuItem[];
}
