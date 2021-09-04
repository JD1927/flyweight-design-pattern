import { IFlyweight } from "../models/flyweight.interface";

export class Recipe implements IFlyweight {
  private name!: string;
  private cost!: number;
  private sellCost!: number;

  constructor() {
    this.cost = 0;
    this.sellCost = 0;
  }

  setName(newName: string): void {
    this.name = newName;
  }

  getName(): string {
    return this.name;
  }

  calcCost(): void {
    this.cost += this.name.length * 5;
    this.sellCost = this.cost * (Math.random() * 2);
  }

  show(): void {
    console.log(`${this.name} costs $USD ${this.sellCost}`);
  }

}