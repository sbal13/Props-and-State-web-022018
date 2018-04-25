import React from 'react'
import Comment from './Comment'

const CommentList = (props) => {

	let comments = props.comments.map((comment, index) => {
		return <Comment key={index} comment={comment} deleteComment={props.deleteComment} />
	})

	return (
		<ul>
			{comments}
		</ul>
	)
}

export default CommentList