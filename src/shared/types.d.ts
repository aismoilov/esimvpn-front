export type Breadcrumb = {
  text: string;
  url: string;
}

export type Tariff = {
  id: number,
  internetLimit: string,
  vpnLimit: string,
  daysCount: number,
  price: number,
  sale: boolean,
}

export type Contact = {
  email: string;
  message?: string;
}