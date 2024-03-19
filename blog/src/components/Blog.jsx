import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blog = () => {
  // consume
  const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[460px] py-3 flex flex-col gap-y-4 mt-[66px]'>
      {
        loading ? (<Spinner/>) : (
          posts.length === 0 ? (
            <div>
              <p>No Post Found</p>
            </div>
          ) : (
            posts.map((post)=> (
              <div key={post.id}>
                <p className='font-bold text-sm'>{post.title}</p>
                <p className='text-[13px]'>
                  By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span>
                </p>
                <p className='text-[13px]'>Posted on {post.date}</p>
                <p className='text-sm mt-[10px]'>{post.content}</p>
                <div className='flex gap-x-3'>
                  {post.tags.map((tag, index) =>{
                    return (
                      <span key={index} className='text-blue-500 underline bold text-[10px] '>{`#${tag}`}</span>
                    )
                  })}
                </div>
              </div>
            ))
          )
        )
      }
    </div>
  )
}

export default Blog
