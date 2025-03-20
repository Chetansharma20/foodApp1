import { Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2, selectClasses, Typography, Stack, Chip, Slider } from '@mui/material'
import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Mycards from '../CustomControls/Mycards'

const Products = () => {
//create the range variable
const [value, setvalue] = useState([0])
    const [isOpen, setisOpen] = useState(false)
    const [selectedProduct, setselectedProduct] = useState(null)
    const [allProducts, setallProducts] = useState([])
    let navigate = useNavigate()

    
const [selectedCategory, setselectcaedCategory] = useState("All")
const[filterData, setfilterData] = useState([])
    useEffect(() => {
        //define function
        let fetchProducts = async () => {
            let result = await axios.get("https://dummyjson.com/products")
            console.log("DATR", result.data.products);
            setallProducts(result.data.products)
        }

        //call functions
        fetchProducts()
    }, [])


    useEffect(()=>
    {
        
        let filterProducts = allProducts.filter((prd)=> prd.category == selectedCategory)
        setfilterData(filterProducts)
        if (selectedProduct == "All") {
            setfilterData(allProducts)
        }
        console.log(filterProducts)
       
    },[selectedCategory, allProducts])

    useEffect(() => {
      
    
        //create the variable and filter the value
        let filterprice= allProducts.filter((prd)=>prd.price<= value )
        console.log(filterprice)
        setfilterData(filterprice)
     }, [value])
let handleOpenDialog = () =>
{
    setisOpen(true)
}

let handleCLoseDialog=()=>
{
    setisOpen(false)
}
//use range function

let handleChange=(event,newvalue)=>{

    setvalue(newvalue)

    console.log(newvalue)

    

 }
    return (
        <>
        <Slider
                    aria-label="Temperature"
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={5}
                    marks
                    min={0}
                    max={300}
                />
            

        <Stack direction="row" spacing={2} sx={{m:2}}>
            <Chip label="All" onClick={()=> setselectcaedCategory("All")} variant='filled' color='primary'/>
            <Chip label="Beauty" onClick={()=> setselectcaedCategory("beauty")} variant='filled' color='primary'/>
            <Chip label="Fragrances" onClick={()=> setselectcaedCategory("fragrances")} variant='filled' color='primary'/>
            <Chip label="Furniture" onClick={()=> setselectcaedCategory("furniture")} variant='filled' color='primary'/>
            <Chip label="Groceries" onClick={()=> setselectcaedCategory("groceries")} variant='filled' color='primary'/>
        </Stack>
            <Box>
                <Grid2 container spacing={3} padding={2}>
                    {
                        filterData.map((prod) => {
                            return (
                                <Mycards data={prod} />     
                            )
                        }

                        )
                    }
                </Grid2>
            </Box>

            <Dialog open={isOpen}
            onClose={handleCLoseDialog}>
                <DialogTitle>Product Detail</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant='h6'>{selectedProduct?.title}</Typography>
                        {selectedProduct?.price}
                    </DialogContentText>
                </DialogContent>
                        <DialogActions>
                            <Button onClick={()=> handleCLoseDialog()} variant='text' color='error'>close</Button>
                        </DialogActions>
            

            </Dialog>
        </>
    )
}

export default Products