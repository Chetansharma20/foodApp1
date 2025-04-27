import { Box, Button, CardContent, Grid2, Typography, Card, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React, { useState } from 'react'
import dayjs from 'dayjs';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect } from 'react';



const orders = [
    { orderNo: "ORD2001", customerName: "Rajesh Kumar", date: "2025-06-05", amount: 799, status: "Delivered" },
    { orderNo: "ORD2002", customerName: "Priya Sharma", date: "2025-06-12", amount: 650, status: "Pending" },
    { orderNo: "ORD2003", customerName: "Amit Singh", date: "2025-06-20", amount: 899, status: "Cancelled" },
    { orderNo: "ORD2004", customerName: "Neha Verma", date: "2025-07-03", amount: 1299, status: "Delivered" },
    { orderNo: "ORD2005", customerName: "Vikram Patel", date: "2025-07-09", amount: 450, status: "Pending" },
    { orderNo: "ORD2006", customerName: "Suman Joshi", date: "2025-07-15", amount: 999, status: "Delivered" },
    { orderNo: "ORD2007", customerName: "Ankit Yadav", date: "2025-07-22", amount: 1199, status: "Cancelled" },
    { orderNo: "ORD2008", customerName: "Kiran Gupta", date: "2025-08-01", amount: 750, status: "Delivered" },
    { orderNo: "ORD2009", customerName: "Pooja Reddy", date: "2025-08-08", amount: 599, status: "Pending" },
    { orderNo: "ORD2010", customerName: "Rohit Mehta", date: "2025-08-14", amount: 1299, status: "Delivered" },
    { orderNo: "ORD2011", customerName: "Swati Tiwari", date: "2025-06-07", amount: 799, status: "Cancelled" },
    { orderNo: "ORD2012", customerName: "Tarun Kapoor", date: "2025-06-18", amount: 1150, status: "Delivered" },
    { orderNo: "ORD2013", customerName: "Deepika Malhotra", date: "2025-07-02", amount: 899, status: "Pending" },
    { orderNo: "ORD2014", customerName: "Kunal Bansal", date: "2025-07-16", amount: 650, status: "Delivered" },
    { orderNo: "ORD2015", customerName: "Meera Nair", date: "2025-07-29", amount: 1350, status: "Cancelled" },
    { orderNo: "ORD2016", customerName: "Aditya Ghosh", date: "2025-08-05", amount: 999, status: "Delivered" },
    { orderNo: "ORD2017", customerName: "Nidhi Saxena", date: "2025-08-13", amount: 899, status: "Pending" },
    { orderNo: "ORD2018", customerName: "Suresh Menon", date: "2025-08-20", amount: 550, status: "Delivered" },
    { orderNo: "ORD2019", customerName: "Rekha Iyer", date: "2025-06-25", amount: 1199, status: "Pending" },
    { orderNo: "ORD2020", customerName: "Harsh Vardhan", date: "2025-07-05", amount: 1350, status: "Delivered" }
];

const Orders = () => {
    const [fromDate, setfromDate] = useState(null)
    const [toDate, settoDate] = useState(null)
    const [filterData, setFilteredData ] = useState([orders])
    const[orderstatus, setOrderStatus] = useState("")
    // const [data, setData] = useState([orders])

    useEffect(()=>
    {
    let filterByDate = ()=>
        {
          
            let filtered = orders.filter((ord)=>((new Date(ord.date) > dayjs(fromDate).toDate() && 
             new Date(ord.date) <= dayjs(toDate).toDate()) ))
            
        
            setFilteredData(filtered)
            // setOrderStatus(filtered)
            console.log(filtered)
         }
        filterByDate()
},[fromDate,toDate, orderstatus])

useEffect(()=>
{
    if (!orderstatus) 
        {
            setFilteredData(orders)
        
    }
    else
    {

    
    let setStatus = ()=>
    {
        let Status = orders.filter((st)=> st.status === orderstatus )
        
    // setOrderStatus(Status)
    console.log(Status)
    setFilteredData(Status)
    }
    setStatus()
}
},[orderstatus])

    return (
        <>
            <Box sx={{padding:"10px"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select From Date"
                        value={fromDate}
                        onChange={(newDate) => {
                            setfromDate(newDate)
                            console.log(newDate)
                        }
                        }
                        format='YYYY-MM-DD'
                    />

                    <DatePicker
                        label="Select To Date"
                        value={toDate}
                        onChange={(newDate) => {
                            settoDate(newDate)
                            console.log(newDate)
                        }
                        }

                        format="YYYY-MM-DD"
                    />








                </LocalizationProvider>


                <RadioGroup
                            row
                            defaultValue="female"
                            name="gender"
                            onChange={(e) => {
                setOrderStatus(e.target.value);
        console.log("Selected Status:", e.target.value);
    }}
                        >
                            <FormControlLabel value="Delivered" control={<Radio />} label="Delivered" />
                            <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
                            <FormControlLabel value="Cancelled" control={<Radio />} label="Cancelled" />
                        </RadioGroup>
            {/* </Box> */}
            {/* <Box>
                <Grid2 container spacing={3}>
                    {
                        orders.map((item) => {
                            return (
                                <Grid2 key={item.orderNo} item size={{
                                    lg: 3
                                }}>
                                    <Card>
                                        <CardContent>
                                   
                                            <Typography variant='h5'>{item.orderNo}</Typography>
                                            <Typography variant='h5'>{item.customerName}</Typography>
                                            <Typography variant='h5'>{item.date}</Typography>
                                            <Typography variant='h5'>{item.amount}</Typography>
                                            <Typography variant='h5'>{item.status}</Typography>
                                            </CardContent>
                                            </Card>
                                </Grid2>
                            )
                        })}
                </Grid2>
            </Box> */}
            {/* <Box> */}
                <Grid2 container spacing={3}>
                    {
                        filterData.map((item) => {
                            return (
                                <Grid2 key={item.orderNo} item size={{
                                    lg: 3
                                }}>
                                    <Card>
                                        <CardContent>
                                   
                                            <Typography variant='h5'>{item.orderNo}</Typography>
                                            <Typography variant='h5'>{item.customerName}</Typography>
                                            <Typography variant='h5'>{item.date}</Typography>
                                            <Typography variant='h5'>{item.amount}</Typography>
                                            <Typography variant='h5'>{item.status}</Typography>
                                            </CardContent>
                                            </Card>
                                </Grid2>
                            )
                        })}
                </Grid2>


                {/* <Grid2 container spacing={3}>
                    {
                        orderstatus.map((item) => {
                            return (
                                <Grid2 key={item.orderNo} item size={{
                                    lg: 3
                                }}>
                                    <Card>
                                        <CardContent>
                                   
                                            <Typography variant='h5'>{item.orderNo}</Typography>
                                            <Typography variant='h5'>{item.customerName}</Typography>
                                            <Typography variant='h5'>{item.date}</Typography>
                                            <Typography variant='h5'>{item.amount}</Typography>
                                            <Typography variant='h5'>{item.status}</Typography>
                                            </CardContent>
                                            </Card>
                                </Grid2>
                            )
                        })}
                </Grid2> */}
            </Box>
        </>
    )
}

export default Orders