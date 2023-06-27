export interface ICard {
  key?: React.Key;
  children: string | JSX.Element | JSX.Element[] | React.ReactElement;
  extraStyles?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
