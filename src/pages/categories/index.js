import { Box, Breadcrumbs, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link, Paper, Typography, Stack } from '@mui/material'
import React from 'react'
import SButton from '../../components/Button'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { config } from '../../configs';

function Categories() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const token = localStorage.getItem('authToken')

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const { data } = useQuery({
        queryFn: async () => {
            const results = await axios.get(`${config.url_host}/cms/categories`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return results.data
        },
        queryKey: ['categories']
    })

    console.log(data)

    return (
        <Box>
            <Box marginBottom={3}>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="#">
                    Pages
                    </Link>
                    
                    <Typography sx={{ color: 'text.primary' }}>Categories</Typography>
                </Breadcrumbs>

                <Typography fontWeight={'bold'} variant='h3'>Categories</Typography>
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
                            <TableCell align="left">Category Name</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data.map((result, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{idx+1}</TableCell>
                                <TableCell>{result.name}</TableCell>
                                <TableCell align='right'>
                                    <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
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

export default Categories