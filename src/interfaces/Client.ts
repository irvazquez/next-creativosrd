export interface IClient {
  logo: string;
  name: string;
  information: IInformation;
  infoCards: IInfoCards[];
  infoTexts?: IInfoTexts;
}

export interface IInformation {
  location: Location;
  service: string;
  challenge: string;
}

export interface ILocation {
  flag?: string;
  place: string;
  map: string;
}

export interface IInfoCards {
  icon: string;
  title: string;
  text: string;
  width: number;
  height: number;
}

export interface IInfoTexts {
  p?: string;
  title?: string;
  subtitle?: string;
}
