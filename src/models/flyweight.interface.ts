export interface IFlyweight {
  setName: (name: string) => void;
  calcCost: () => void;
  show: () => void;
  getName: () => string;
}