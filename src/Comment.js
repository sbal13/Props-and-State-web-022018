import React from 'react'

const Comment = ({author, text}) => {
	return (
		<span>
			{author} says: {text}
		</span>
	)
}

export default Comment