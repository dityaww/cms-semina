import { Box, Breadcrumbs, Typography, Link, Grid2, ListItem } from '@mui/material'
import React from 'react'
import SButton from '../../components/Button'

function Dashboard() {
    return (
        <Box>
            <Box marginBottom={3}>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="#">
                    Pages
                    </Link>
                    
                    <Typography sx={{ color: 'text.primary' }}>Dashboard</Typography>
                </Breadcrumbs>

                <Typography fontWeight={'bold'} variant='h3'>Dashboard</Typography>
            </Box>

            <Box marginTop={6}>
                <Grid2 container spacing={2}>
                    <Grid2 size={3} sx={{  backgroundColor: '#ef4444', height: 200, borderRadius: 2 }}>
                        <Typography variant='h5' color='white' fontWeight={'bold'} p={2}>Orders</Typography>
                    </Grid2>
                    <Grid2 size={3} sx={{  backgroundColor: '#0ea5e9', height: 200, borderRadius: 2 }}>
                        <Typography variant='h5' color='white' fontWeight={'bold'} p={2}>Orders</Typography>
                    </Grid2>
                    <Grid2 size={3} sx={{  backgroundColor: '#6366f1', height: 200, borderRadius: 2 }}>
                        <Typography variant='h5' color='white' fontWeight={'bold'} p={2}>Orders</Typography>
                    </Grid2>
                    <Grid2 size={3} sx={{  backgroundColor: '#8b5cf6', height: 200, borderRadius: 2 }}>
                        <Typography variant='h5' color='white' fontWeight={'bold'} p={2}>Orders</Typography>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    )
}

export default Dashboard