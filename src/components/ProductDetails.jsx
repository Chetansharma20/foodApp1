import { Box, Card, CardMedia, Grid2, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {

    let productData = useLocation().state
  return (
    <>

    
<Typography variant='h4'>Details</Typography>
<Typography variant='h6'>Id: {productData.id}</Typography>
<Typography variant='h6'>Title: {productData.title}</Typography>
<Typography variant='h6'>Description:{productData.description}</Typography>
<Typography variant='h6'>Category:{productData.category}</Typography>
<Typography variant='h6'>Price:{productData.price}</Typography>
 <Typography variant='h6'>Discount Percentage:{productData.discountPercentage}</Typography>
<Typography variant='h6'>Stock:{productData.stock}</Typography> 
 <Typography variant='h6'>Tags:{productData.tags}</Typography>
 <Typography variant='h6'>Sku:{productData.sku}</Typography>
<Typography variant='h6'>weight:{productData.weight}</Typography>
{/* <Typography variant='h6'>:{productData.dimensions}</Typography> */}
<Typography variant='h6'>Warranty:{productData.warrantyInformation}</Typography>
<Typography variant='h6'>Shipping Information:{productData.shippingInformation}</Typography>
<Typography variant='h6'>Availabiltiy Status:{productData.availabilityStatus}</Typography>
<Typography variant='h6'>Return Policy:{productData.returnPolicy}</Typography>
<Typography variant='h6'>Minimum Order Quantity:{productData.minimumOrderQuantity}</Typography> 
{/* <Typography variant='h6'>Price:{productData.meta}</Typography> */}








<Box>
<Grid2 container spacing={3} padding={3} >
{
    productData.reviews.map((rev)=>
    {
        return(
            <Grid2 size={{
                lg:3
}}>
                <Card>

            <cardContent>


                <Typography variant='inherit'>Rating:{rev.rating}</Typography>
                <Typography variant='inherit'>Rating:{rev.reviewerName}</Typography>
                <Typography variant='inherit'>Rating:{rev.comment}</Typography>
                

            </cardContent>
                  
                </Card>
                </Grid2>
        )
    })
}



</Grid2>



</Box>


<CardMedia
    sx={{
            height: 390,
            width: 350
           
            
             }}
                image={productData.thumbnail}
            />






    </>
  )
}

export default ProductDetails