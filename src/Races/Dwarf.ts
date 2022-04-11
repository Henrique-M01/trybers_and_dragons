import Races from './Race';

export default class Dwarf extends Races {
  static instances = 0;
  public maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
  }

  public static createdRacesInstances(): number {
    Dwarf.instances += 1;
    return Dwarf.instances;
  }
}