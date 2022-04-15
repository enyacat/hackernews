import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage, handleTypeInPage } =
    useGlobalContext()
  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={() => handlePage('dec')}>
        prev
      </button>
      <p>
        <input
          type='number'
          value={page + 1}
          onChange={(e) => {
            handleTypeInPage(e.target.value)
          }}
        />{' '}
        of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage('inc')}>
        next
      </button>
    </div>
  )
}

export default Buttons
