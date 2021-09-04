import { Recipe } from "../flyweights/recipe";
import { IFlyweight } from "../models/flyweight.interface";

export class FlyweightFactory {
  private flyweights: IFlyweight[];
  private count: number;

  constructor() {
    this.flyweights = [];
    this.count = 0;
  }

  setCount(newCount: number): void {
    this.count = newCount;
  }

  getCount(): number {
    return this.count;
  }
  
  add(name: string): number {
    const alreadyExists: boolean = this.flyweights.some(f => f.getName() === name);

    if (alreadyExists) {
      console.log(`The object already exists, it cannot be added.`);
      return -1;
    } else {
      const recipe = new Recipe();
      recipe.setName(name);
      this.flyweights.push(recipe);
      this.count = this.flyweights.length;
      return this.count - 1; 
    }
  }

  getRecipeByIndex(index: number): IFlyweight {
    return this.flyweights[index];
  }
  
}