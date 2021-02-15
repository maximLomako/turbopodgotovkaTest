import React from 'react';
import './App.css';
import { ChangeUserLog } from './components/ChangeUserLog/ChangeUserLog';
import {LogTable} from "./components/LogTable/LogTable";

export interface UserStateType {
  id: number
  userName: string
  firstName: string
  lastName: string
}

export interface EventLogType  {
  id: number
  name: string
}
export interface LogStateType {
  id: number,
  userId: number,
  eventId: number,
  eventTime: string
}

export interface EventStateType {
  id: number,
  name: string
}

function App() {

  const usersState: Array<UserStateType> = [
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
  const eventLog: Array<EventLogType> = [
    {id: 1, name: 'site'},
    {id: 2, name: 'app'},
    {id: 3, name: 'other'}
  ]
  const logState: Array<LogStateType> = [
    {id: 1, userId: usersState[0].id, eventId: 1, eventTime: 'новое время'},
  ]

  const eventState: Array<EventStateType> = [
    {id: logState[0].id, name: 'Hello'}
  ]

  return (
    <div className="App">
      <ChangeUserLog
        usersState={usersState}
        logState={logState}
        eventLog={eventLog}
      />
      <LogTable
        usersState={usersState}
        logState={logState}
        eventState={eventState}
      />
    </div>
  );
}

export default App;
