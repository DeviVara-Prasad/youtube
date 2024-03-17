import { comment } from 'postcss'
import React from 'react'
import Comment from './Comment'
const CommentList = ({comments}) => {
  return (
    <div>
        {
            comments.map(
                (comment,index) => 
                <div key={index}>
                    <Comment  data={comment}/>
                    <div className='ml-5 border border-l-black'>
                        <CommentList comments={comment.replies}/>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default CommentList