import Archetype, { Mage } from './Archetypes';
import Energy, { EnergyType } from './Energy';
import Fighter from './Fighter';
import Races, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Races;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _type_: EnergyType;
  private _amount: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._type_ = this._archetype.energyType;
    this._amount = getRandomInt(1, 10);
    this._energy = {
      type_: this._type_,
      amount: this._amount,
    };
  }

  get race(): Races {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      ...this._energy,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._amount = 10;
    this._energy.amount = this._amount;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(): void {
    this._strength += getRandomInt(1, 6);
    this._defense += getRandomInt(1, 6);
    this._energy.amount = 10;
  }
}
