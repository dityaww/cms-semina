import axios from 'axios'
import React from 'react'
import { config } from '../../configs'
import { useQuery } from '@tanstack/react-query'
import { Box, Breadcrumbs, Table, TableBody, TableCell, TableContainer, TableHead, Typography, TableRow, Link, Paper, Chip, Stack } from '@mui/material'
import SButton from '../../components/Button'

function Orders() {
    const token = localStorage.getItem('authToken')

    const { data, error, isError } = useQuery({
        queryFn: async () => {
            const results = await axios.get(`${config.url_host}/cms/orders`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return results.data.data
        },
        queryKey: ['orders']
    })

    console.log(data)

    return (
        <Box>
            <Box marginBottom={3}>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="#">
                    Pages
                    </Link>
                    
                    <Typography sx={{ color: 'text.primary' }}>Orders</Typography>
                </Breadcrumbs>

                <Typography fontWeight={'bold'} variant='h3'>Orders</Typography>
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
                            <TableCell>Event Name</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Total Orders</TableCell>
                            <TableCell>Total Price</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.order.map((result, idx) => (
                            <TableRow
                                key={idx}
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{idx+1}</TableCell>
                                <TableCell>{result?.historyEvent?.title}</TableCell>
                                <TableCell>
                                    <Chip label={result?.status} color={result.status === 'Published' ? 'success' : 'default'} />
                                </TableCell>
                                <TableCell>{result?.totalOrderTicket}</TableCell>
                                <TableCell>{result?.totalPay}</TableCell>
                                <TableCell align='right'>
                                    <Stack direction="row" spacing={1}>
                                        <SButton color='primary' variant='contained' onClick={() => alert('edit konten')}>Edit</SButton>
                                        <SButton color='error' variant='contained' onClick={() => alert('delete konten')}>Delete</SButton>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default Orders