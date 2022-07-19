import Repository from './repository';

class PrismaRepository implements Repository {

  constructor(o: object | null) {

  }
  create(o: object): object {
    return new Object;
  }

  update(o: object): object {

    return new Object;
  }

  delete(o: object): boolean {
    return true;
  }

  find(o: object): object[] {
    return new Array<Object>;
  }

  findOne(o: object): object {

    return new Object;
  }
}
