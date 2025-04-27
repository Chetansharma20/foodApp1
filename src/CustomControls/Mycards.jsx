import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { addItem } from '../reduxwork/CartSlice'
import {useDispatch} from 'react-redux'
const Mycards = ({data}) => {
    let dispatcher = useDispatch()
    let navigate = useNavigate()
    
  return (
    <>
                                    <Grid2 size={{
                                    sm: 12,
                                    md: 6,
                                    lg: 4
                                }} item key={data.id}>
                                    <Card>
                                        <CardMedia
                                            sx={{
                                                height: 190
                                            }}
                                            image={data.thumbnail}
                                        />
                                        <CardContent>
                                            <Typography variant='h5'>{data.title}</Typography>
                                            <Typography variant='h5'>{data.category}</Typography>
                                            <Typography variant='h5' color={data.price>15 ? "error" : "success" }>{data.price}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant='outlined' color='success' onClick={()=> {dispatcher(addItem(data)) 
                                               }}>Add To Cart</Button>
                                            <Button variant='outlined' onClick={() => 
                                                {
                                                     navigate('/productDetails',{state: data })}} color='success'> Details </Button>

                                                       {/* setselectedProduct(prod)
                                                     handleOpenDialog()   */}
                                                  
                                        </CardActions>
                                    </Card>
                                </Grid2>
                        

    </>
  )
}

export default Mycards