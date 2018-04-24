import React from 'react'

const Meat = (props) => {
	return <h1 onClick={props.goodbye ? props.goodbye : props.hello}>Our meat is certified 100% grade A {props.type}!</h1>
}

export default Meat