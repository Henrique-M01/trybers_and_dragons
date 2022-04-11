export default abstract class Races {
  constructor(protected _name: string, protected _dexterity: number) {
    this._dexterity = _dexterity;
    this._name = _name;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  public abstract get maxLifePoints(): number;

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}