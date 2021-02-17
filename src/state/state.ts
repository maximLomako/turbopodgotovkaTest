export interface UserStateType {
  id: number
  userName: string
  firstName: string
  lastName: string
}

export interface EventLogType {
  id: number
  name: string
}

export const usersState: Array<UserStateType> = [
  {id: 1, userName: 'Dru', firstName: 'Dru', lastName: 'England'},
  {id: 2, userName: 'Chantel', firstName: 'Chantel', lastName: 'Holder'},
  {id: 3, userName: 'Lynn', firstName: 'Lynn', lastName: 'Blevins'},
  {id: 4, userName: 'Umaiza', firstName: 'Umaiza', lastName: 'Elliot'},
  {id: 5, userName: 'Wayne', firstName: 'Wayne', lastName: 'Hamer'},
  {id: 6, userName: 'Jasper', firstName: 'Jasper', lastName: 'Mcintosh'},
  {id: 7, userName: 'Edmund', firstName: 'Edmund', lastName: 'Nolan'},
  {id: 8, userName: 'Lennon', firstName: 'Lennon', lastName: 'Franklin'},
  {id: 9, userName: 'Arla', firstName: 'Arla', lastName: 'Cash'},
  {id: 10, userName: 'Rae', firstName: 'Rae', lastName: 'Mendez'}
]
export const eventLog: Array<EventLogType> = [
  {id: 1, name: 'site'},
  {id: 2, name: 'app'},
  {id: 3, name: 'other'}
]