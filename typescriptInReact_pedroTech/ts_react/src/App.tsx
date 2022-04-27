import React, {FC, createContext} from 'react';
import { Person } from '../src/components/Person'
import {HairColor} from './Enums'
import './App.css';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null)

const App: FC = () => {

  const contextValue: AppContextInterface = {
    name: 'Pedro',
    age: 20,
    country: 'Brazil'
  }

  // Firt example:
  // const name:string = 'Pedro'
  // const age:number = 20
  // const isMarried:boolean = false
  //
  // const getName = (name: string): number =>{
  //   if (name  === 'Pedro') {
  //   return 20
  //   }else {
  //     return 0
  //   }
  // }
  //----------------------

  return (
      <AppContext.Provider value={contextValue}>
    <div className="App">

      {/*{name}*/}
      {/*{age}*/}
      {/*{isMarried}*/}

      <Person name='Pedro' age={20} email='pedroemail@gmail.com'hairColor={HairColor.Pink} />
    </div>
      </AppContext.Provider>
  );
}

export default App;
