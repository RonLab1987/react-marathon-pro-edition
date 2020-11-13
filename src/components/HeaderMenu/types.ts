export type HeaderMenuItem = {
  id: number;
  label: string;
  to: string;
  isActive: boolean;
};

export interface HeaderMenuProps {
  items: HeaderMenuItem[];
}
