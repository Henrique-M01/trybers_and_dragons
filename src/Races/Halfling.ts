import Races from './Race';

export default class Halfling extends Races {
  static instances = 0;
  public maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
  }

  public static createdRacesInstances(): number {
    Halfling.instances += 1;
    return Halfling.instances;
  }
}