import React from 'react'
import { useParams } from 'react-router-dom'
import { styled } from "styled-components";
import SideBar from './SideBar';

const Wrapper =styled.div`

    
`

function WatchMovie() {
    const {id}= useParams()
  return (
    <Wrapper>
        <SideBar/>
        WatchMovie {id}
    
    </Wrapper>
  )
}

export default WatchMovie