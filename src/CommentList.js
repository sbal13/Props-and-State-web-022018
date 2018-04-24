import React from 'react'
import Comment from './Comment'

const CommentList = (props) => {

	let comments = props.comments.map((comment, index) => {
		return <li key={index}><Comment {...comment} /></li>
	})

	return (
		<ul>
			{comments}
		</ul>
	)
}

export default CommentList