import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'
import ThreadInputWrapper from './styled/ThreadInputWrapper'

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('')
  const [category, onCategoryChange] = useInput('')
  const [body, onBodyChange] = useInput('')

  return (
    <ThreadInputWrapper>
      <div className='wrap-input'>
        <label>Title</label>
        <input type='text' value={title} onChange={onTitleChange} />
      </div>
      <div className='wrap-input'>
        <label>Category</label>
        <input type='text' value={category} onChange={onCategoryChange} />
      </div>
      <div className='wrap-input'>
        <label>Content</label>
        <textarea value={body} onChange={onBodyChange} rows={20}></textarea>
      </div>
      <button onClick={() => addThread({ title, category, body })} className='btn-create'>
        Create
      </button>
    </ThreadInputWrapper>
  )
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired
}

export default ThreadInput
