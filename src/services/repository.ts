interface Repository {
  create(o: object): object;
  update(o: object): object;
  delete(o: object): boolean;
  find(o: object): object[];
  findOne(o: object): object;
}


export default Repository
