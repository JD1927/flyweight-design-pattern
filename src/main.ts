import { FlyweightFactory } from './factory/flyweight-factory';
export class Main {
  constructor() {}

  static main(): void {
    let index: number = 0;
    const american: number[] = [];
    const italian: number[] = [];
    const mexican: number[] = [];

    const meats: number[] = [];
    const soups: number[] = [];
    const salads: number[] = [];
    
    const fast: number[] = [];

    const flyweightFactory = new FlyweightFactory();

    index = flyweightFactory.add('Hamburger');
    american.push(index);
    meats.push(index);
    fast.push(index);

    index = flyweightFactory.add('Wisconsin Cheese');
    american.push(index);
    salads.push(index);

    index = flyweightFactory.add('Minestrone');
    italian.push(index);
    soups.push(index);

    index = flyweightFactory.add('Antipasto');
    italian.push(index);
    salads.push(index);

    index = flyweightFactory.add('Tacos');
    mexican.push(index);
    meats.push(index);
    fast.push(index);

    index = flyweightFactory.add('Coditos');
    mexican.push(index);
    soups.push(index);

    index = flyweightFactory.add('Nopales');
    mexican.push(index);
    salads.push(index);

    index = flyweightFactory.add('Pizza');
    italian.push(index);
    fast.push(index);

    fast.forEach(f => {
      const recipe = flyweightFactory.getRecipeByIndex(f);
      recipe.calcCost();
      recipe.show();
    });

    console.log('<================>');

    american.forEach(a => {
      const recipe = flyweightFactory.getRecipeByIndex(a);
      // recipe.calcCost();
      recipe.show();
    });
    console.log('<================>');
  }
}
Main.main();
