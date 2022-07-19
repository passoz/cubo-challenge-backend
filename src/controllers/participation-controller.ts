


interface ControllerInterface {
  create(firstName: string, lastName: string, participation: number): object;
  update(id: number, firstName: string, lastName: string, participation: number): object;
  delete(id: number): boolean;
  find(id: number, firstName: string, lastName: string, participation: number): object;
  findOne(id: number, firstName: string, lastName: string, participation: number): object[];
}


