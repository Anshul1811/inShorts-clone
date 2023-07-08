import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material'
import {Menu} from '@mui/icons-material';


const StyledHeader=styled(AppBar)`
  background:#fff;
  height:70px;
`

const IconMenu=styled(Menu)`
   color:#000
`

const Image=styled('img')({
    height:70,
    margin:'auto'
})

const Header = () => {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    <div>
       <StyledHeader position='sticky'>
        <Toolbar>
          <IconMenu/>
          <Image src={url} alt="logo" />
        </Toolbar>
       </StyledHeader>
    </div>
  )
}

export default Header
