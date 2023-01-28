import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ThreadInput from '../components/ThreadInput'
import { asyncAddThread } from '../states/threads/action'
import MainPage from '../components/styled/MainPage'
import MainPageHeadingOne from '../components/styled/MainPageHeadingOne'

function AddThreadPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }))

    navigate('/')
  }

  return (
    <MainPage>
      <MainPageHeadingOne>Create New Discussion</MainPageHeadingOne>
      <ThreadInput addThread={onAddThread} />
    </MainPage>
  )
}

export default AddThreadPage
