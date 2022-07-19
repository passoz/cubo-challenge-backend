import Repository from './repository';
import { ParticipationInterface, ParticipationDTO } from '../entities/participation';

interface Participations {
  items: Array<ParticipationInterface>;
}

class JSONRepository implements Repository {

  arr: Participations;
  json: string;

  constructor() {
    this.arr = {
      items: []
    }
    this.json = JSON.stringify(this.arr);
  }

  create(o: ParticipationDTO): ParticipationDTO {
    let last = this.arr.items.length === 0 ? 0 : this.arr.items[this.arr.items.length - 1].id
    this.arr.items.push({ id: last + 1, firstName: o.firstName, lastName: o.lastName, participation: o.participation })

    let part: ParticipationInterface = {
      id: 1,
      firstName: "Fernando",
      lastName: "Passos",
      participation: 20
    }
    return part;
  }

  update(o: object): object {
    return new Object
  }

  delete(o: object): boolean {
    return true
  }

  find(o: object): object[] {
    return new Array<object>
  }

  findOne(o: object): object {
    return new Object
  }



}

export default JSONRepository
