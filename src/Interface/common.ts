import { ReactNode } from "react";

export interface IDropdownOption {
  key: string;
  label: ReactNode | string | any;
}

export interface IProduct {
  title: string;
  vin: string;
  Odometer: string;
  primaryDamage: string;
  secondaryDamage: string;
  EstRetailValue: string;
  bodyStyle: string;
  vehicleType: string;
  color: string;
  Engine: string;
  cylinders: string;
  transmission: string;
  drive: string;
  fuel: string;
  auctionHighlights: string;
  finalBidAtAuction: string;
  pictures: string[];
}

export interface IQuery {
  name: string;
  total: string;
}
