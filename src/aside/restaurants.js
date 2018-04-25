import React from 'react'
import Meat from './meat.js'


//////////
const Donalds = (props) => {

  const sayHello = (event) => {
    alert("HELLO")
  }
  return <Meat hello={sayHello} type="xanthan gum"/>
}

//////////
const PhilA = (props) => {
  const sayGoodbye = (event) => {
    alert("GOODBYE")
  }
  return <Meat goodbye={sayGoodbye} type="chicken"/>
}

//////////
const Dees = (props) => {
  return <Meat type="beef"/>
}

export {Donalds, PhilA, Dees}
