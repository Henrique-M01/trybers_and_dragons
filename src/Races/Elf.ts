import Races from './Race';

export default class Elf extends Races {
  static instances = 0;
  public maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
  }

  public static createdRacesInstances(): number {
    Elf.instances += 1;
    return Elf.instances;
  }
}