import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import Comment from './Comment'
import CommentList from './CommentList'
const commentsData = [
  {
    key: nanoid(),
    name: "Prasad",
    text: "Lorem ipsum",
    replies: [
      {
        key: nanoid(),
        name: "Shive",
        text: "Namaste",
        replies: [
          {
            key: nanoid(),
            name: "Ganesh",
            text: "Hello",
            replies:[
              {
                key: nanoid(),
                name: "Ganesh",
                text: "Hello",
                replies:[]
              },
              {
                key: nanoid(),
                name: "Ganesh",
                text: "Hello",
                replies:[]
              },
              {
                key: nanoid(),
                name: "Ganesh",
                text: "Hello",
                replies:[
                  {
                    key: nanoid(),
                    name: "Ganesh",
                    text: "Hello",
                    replies:[]
                  },
                  {
                    key: nanoid(),
                    name: "Ganesh",
                    text: "Hello",
                    replies:[]
                  },
                  {
                    key: nanoid(),
                    name: "Ganesh",
                    text: "Hello",
                    replies:[]
                  }
                ]
              }
            ]
          },
          {
            key: nanoid(),
            name: "Ganesh",
            text: "Hello",
            replies:[
              {
                key: nanoid(),
                name: "Ganesh",
                text: "Hello",
                replies:[]
              },
              {
                key: nanoid(),
                name: "Ganesh",
                text: "Hello",
                replies:[]
              },
              {
                key: nanoid(),
                name: "Ganesh",
                text: "Hello",
                replies:[]
              }
            ]
          },
          {
            key: nanoid(),
            name: "Ganesh",
            text: "Hello",
            replies:[
              {
                key: nanoid(),
                name: "Ganesh",
                text: "Hello",
                replies:[]
              },
              {
                key: nanoid(),
                name: "Ganesh",
                text: "Hello",
                replies:[]
              },
              {
                key: nanoid(),
                name: "Ganesh",
                text: "Hello",
                replies:[]
              }
            ]
          }

        ]
      },
      {
        key: nanoid(),
        name: "Ganesh",
        text: "Hello",
        replies:[]
      }
    ]
  },
  {
    key: nanoid(),
    name: "Prasad",
    text: "Lorem ipsum",
    replies:[]
  },
  {
    key: nanoid(),
    name: "Ganesh",
    text: "Hello",
    replies:[]
  }
]

const CommentsContainer = () => {
  return (
    <div
    className='m-5 p-5'
    >
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer