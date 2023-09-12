import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import React from 'react'
import { styled } from "styled-components"

const Wrapper =styled.div`
display:flex;
flex-direction:column;
width:400px;
margin:100px auto;
.IconBox{
    display:flex;
    justify-content:space-between;
    align-items:center;


}
.witeupss{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

    
`

function Footer() {
  return (
    <Wrapper>
    <div className='IconBox'>
        <FeatherIcon icon='facebook'/>
        <FeatherIcon icon='instagram'/>
        <FeatherIcon icon='twitter'/>
        </div>
    <div className='witeupss'>
    <p>Condition of use</p>
    <p>Privacy and policy</p>
    <p>Press Room</p>
    </div>
    <p>2021 movieBox by Nobody</p>  
    </Wrapper>
  )
}

export default Footer