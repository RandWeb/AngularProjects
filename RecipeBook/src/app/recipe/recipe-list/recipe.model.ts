export class Recipe {
  constructor(
    name: string,
    desc: string,
    imagePath: string
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }

  public name: string;
  public description: string;
  public imagePath: string;
}
