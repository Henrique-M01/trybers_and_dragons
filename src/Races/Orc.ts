import Races from './Race';

export default class Orc extends Races {
  static instances = 0;
  public maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
  }

  public static createdRacesInstances(): number {
    Orc.instances += 1;
    return Orc.instances;
  }
}