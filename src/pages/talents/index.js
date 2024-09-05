import { Box, Breadcrumbs, Table, TableBody, TableCell, TableContainer, TableHead, Typography, TableRow, Link, Paper, Stack } from '@mui/material'
import React from 'react'
import SButton from '../../components/Button'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { config } from '../../configs'

function Talents() {
    const token = localStorage.getItem('authToken')

    const { data } = useQuery({
        queryFn: async () => {
            const results = await axios.get(`${config.url_host}/cms/talents`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return results.data
        },
        queryKey: ['talents']
    })

    console.log(data);

    return (
        <Box>
            <Box marginBottom={3}>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="#">
                    Pages
                    </Link>
                    
                    <Typography sx={{ color: 'text.primary' }}>Talents</Typography>
                </Breadcrumbs>

                <Typography fontWeight={'bold'} variant='h3'>Talents</Typography>
            </Box>

            <Box>
                <Box marginBottom={2}>
                    <SButton variant={'outlined'} color={'primary'} onClick={() => alert('tambah data')}>Tambah Data</SButton>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Image</TableCell>
                            <TableCell align="left">Role</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data.map((result, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{idx+1}</TableCell>
                                <TableCell>{result?.name}</TableCell>
                                <TableCell>
                                    <img src={`${config.url_image}/${result?.image?.name}`} width={100} alt="error-image" />
                                </TableCell>
                                <TableCell>{result?.role}</TableCell>
                                <TableCell align='right'>
                                    <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
                                        <SButton color='primary' variant='contained' onClick={() => alert('edit konten')}>Edit</SButton>
                                        <SButton color='error' variant='contained' onClick={() => alert('delete konten')}>Delete</SButton>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                        {/* {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                        ))} */}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default Talents