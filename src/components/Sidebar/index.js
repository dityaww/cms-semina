import React, { useEffect, useRef, useState } from 'react'
import {
    Box,
    Stack,
    Typography
} from "@mui/material"
import { useNavigate } from 'react-router-dom'

function SidebarSemina() {
    const listMenu = ['Dashboard', 'Categories', 'Events', 'Talents', 'Orders']

    const navigate = useNavigate()
    return (
        <Box width={'16%'} position={'fixed'} bgcolor={'#2563eb'} height={'100vh'}>
            <Stack gap={2} paddingY={1} paddingX={3}>
                {listMenu.map((response, idx) => (
                    <Box
                        key={idx} 
                        onClick={() => {
                            navigate(response.toLowerCase())
                        }} 
                        id={idx}
                        sx={{ borderRadius: 2,padding: 1.5, ":hover": {
                                backgroundColor: '#1d4ed8',
                                cursor: 'pointer'
                            }
                        }}>
                        <Typography fontSize={15} color='white'>{response}</Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}

export default SidebarSemina