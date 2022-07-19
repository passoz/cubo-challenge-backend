interface ParticipationInterface {
  id: number;
  firstName: string;
  lastName: string;
  participation: number;
}

interface ParticipationDTO {
  id?: number;
  firstName: string;
  lastName: string;
  participation: number;
}

export { ParticipationInterface, ParticipationDTO }
