import { Box, Breadcrumbs, Table, TableBody, TableCell, TableContainer, TableHead, Typography, TableRow, Link, Paper, Chip, Stack } from '@mui/material'
import React from 'react'
import SButton from '../../components/Button'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { config } from '../../configs';
import moment from 'moment'

function Events() {
    const token = localStorage.getItem('authToken')

    const { data } = useQuery({
        queryFn: async () => {
            const results = await axios.get(`${config.url_host}/cms/events`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return results.data
        },
        queryKey: ['events']
    })

    console.log(data)

    return (
        <Box>
            <Box marginBottom={3}>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="#">
                    Pages
                    </Link>
                    
                    <Typography sx={{ color: 'text.primary' }}>Events</Typography>
                </Breadcrumbs>

                <Typography fontWeight={'bold'} variant='h3'>Events</Typography>
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
                            <TableCell>Category</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Tagline</TableCell>
                            <TableCell>Images</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Talent</TableCell>
                            <TableCell>Venue</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data.map((result, idx) => (
                            <TableRow
                                key={idx}
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{idx+1}</TableCell>
                                <TableCell>{result?.category?.name}</TableCell>
                                <TableCell>{result?.title}</TableCell>
                                <TableCell>{result?.tagline}</TableCell>
                                <TableCell>
                                    <img src={`${config.url_image}/${result?.image?.name}`} width={60} alt="error-image" />
                                </TableCell>
                                <TableCell width={100}>{moment(result?.date).format('DD-MM-YYYY')}</TableCell>
                                <TableCell>
                                    <Chip label={result?.statusEvent} color={result.statusEvent === 'Published' ? 'success' : 'default'} />
                                </TableCell>
                                <TableCell>{result?.talent?.name}</TableCell>
                                <TableCell>{result?.venueName}</TableCell>
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

export default Events