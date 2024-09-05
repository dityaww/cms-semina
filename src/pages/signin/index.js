import { Box, Grid2, Typography, FormControl, Button, TextField, Alert, AlertTitle } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Abs1 from '../../assets/abs1.jpg'
import axios from 'axios'
import { config } from '../../configs'
import { useMutation } from '@tanstack/react-query'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

function Signin() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [token, setToken] = useState(null)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate()

    console.log(token);
    
    const { mutate, error, isError, isPending } = useMutation({
        mutationFn: async () => {
            const res = await axios.post(`${config.url_host}/cms/auth/signin`, form )

            localStorage.setItem('authToken', res.data.data.token);
            setToken(res.data.data)
            return res.data.data
        },
        mutationKey: ['sign'],
        onError: () => {
            console.log("error post");        
            setForm({...form, email: '', password: ''})
        },
        onSuccess: async () => {
            setForm({...form, email: '', password: ''})

            toast.success('successfully login')

            setTimeout(() => {
                navigate('/dashboard')
            }, 2000);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        mutate()
    }

    return (
        <Box>
            <Toaster />
            <Grid2 container height={'100vh'}>
                <Grid2 size={4} borderRight="1px solid #eee" paddingX={18} alignItems='center' display={'flex'}>
                    <Box gap={2.5} display={'flex'} flexDirection={'column'} width={'100%'}>
                        <Box gap={1} display={'flex'} flexDirection={'column'}>
                            <Typography variant='h3' fontWeight={'bold'} fontSize={44}>Sign In</Typography>
                            <Typography variant='body1' color='#6b7280' fontWeight={'normal'}>Enter the fields below to get started</Typography>
                        </Box>
                        {isError && <Alert severity="error" variant='filled'>
                            <AlertTitle>Error</AlertTitle>
                                {error?.response?.data?.msg}
                            </Alert>
                        }
                        <FormControl fullWidth>
                            <TextField 
                                type='text'
                                label="email"
                                variant='outlined'
                                name='email'
                                fullWidth={true}
                                value={form?.email}
                                onChange={handleChange}
                                // error={true}
                                // helperText='error bro'
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField 
                                type='password'
                                label="password"
                                name='password'
                                variant='outlined'
                                fullWidth={true}
                                value={form?.password}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <Button variant='contained' color='primary' sx={{ paddingY: 1.5, fontSize: 16 }} onClick={handleSubmit}>SIGN IN</Button>
                        <Box display={'flex'} gap={0.5} justifyContent={'center'}> 
                            <Typography color='#6b7280'>Dont have account?</Typography>
                            <Typography color='primary' fontWeight='bold' sx={{  cursor: 'pointer' }}>Create account</Typography>
                        </Box>
                    </Box>
                </Grid2>
                <Grid2 size={8} bgcolor={'#f5f5f5'} height={'100vh'} overflow={'hidden'}>
                    <img src={Abs1} alt="" height={'100%'} width={'100%'}/>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Signin