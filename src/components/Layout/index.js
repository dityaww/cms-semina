import React from 'react'
import {
    Box,
    Typography,
    Container
} from '@mui/material'
import SidebarSemina from '../Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <Box display={'flex'}>
        <SidebarSemina />
        <Box width={'100%'} marginLeft={'16%'} height={'100vh'} bgcolor={'#fafafa'}>
            <div className="glass-effect" style={{  width: '100%' }}>
                <Typography paddingX={10} variant='body1' color='black' fontWeight={'bold'}>Header</Typography>
            </div>
            {/* <Box width={'100%'} paddingY={2}>
            </Box> */}
            <Box paddingY={4}>
                <Container maxWidth="xl">
                    <Outlet />
                </Container>
            </Box>
        </Box>
    </Box>
  )
}

export default Layout