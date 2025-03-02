import { useContext } from 'react'
import React from 'react'
import { Data, Data1 } from '../App'


const ComponentA = () => {
    const userName = useContext(Data);
    const Age = useContext(Data1);

  return (
    <h1>
        My name is: {userName} and I'm {Age} years old
    </h1>
  )
}

export default ComponentA