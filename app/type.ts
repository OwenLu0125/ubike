export type BikeData = {
  sno: string;
  sna: string;
  tot: number;
  sbi: number;
  sarea: string;
  mday: string;
  lat: number;
  lng: number;
  ar: string;
  sareaen: string;
  snaen: string;
  aren: string;
  bemp: number;
  act: string;
  srcUpdateTime: string;
  updateTime: string;
  infoTime: string;
  infoDate: string;
};

export type BikeApiResponse = BikeData[];
