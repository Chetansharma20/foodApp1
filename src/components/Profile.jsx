import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut, RegisterForm } from '../reduxwork/RegisterSlice'
import { Box, Button, Typography } from '@mui/material'
const Profile = () => {
    let dispatcher = useDispatch()
let {userData} = useSelector((state)=>state.Register)

  return (
    <>
    <Box>
             <Box sx={{ display: 'flex', gap: 3 }}>
                 <Typography>Name:{userData.userName}</Typography>
                 <Typography>Password:{userData.userPassword}</Typography>
                 <Typography>Email:{userData.userEmail}</Typography>
                 <Typography>Phone:{userData.userMobile}</Typography>
                 <Button
                     onClick={() => {
                         dispatcher(LogOut())
                     }}
                     variant='contained' color='secondary'>Logout</Button>
            </Box>

        </Box>

    </>
  )
}

export default Profile






// import { Box, Button, Typography } from '@mui/material'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { logout } from '../reduxwork/UserSlice'

// const Userprofile = () => {
//     let dispatcher = useDispatch()
//     let { userdata } = useSelector((state) => state.user)
//     return (
//         <Box>
//             <Box sx={{ display: 'flex', gap: 3 }}>
//                 <Typography>Name:{userdata.userName}</Typography>
//                 <Typography>Password:{userdata.userPassword}</Typography>
//                 <Typography>Email:{userdata.userEmail}</Typography>
//                 <Typography>Email:{userdata.UserPhoneno}</Typography>
//                 <Button
//                     onClick={() => {
//                         dispatcher(logout())
//                     }}
//                     variant='contained' color='secondary'>Logout</Button>
//             </Box>

//         </Box>

//     )
// }

// export default Userprofile