import { Container, Grid, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './registration.css'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'



    const Registration = () =>{
        
      const Schema = yup.object().shape({

        fname: yup.string().required('First Name is required'),

        mname: yup.string().required('Middle Name is required'),

        lname: yup.string().required('LastName is required'),

          email: yup.string().required('Email is required').email('Email is invalid'),

          mNumber : yup.string().required('Mobile Number is required')
          .min(10,'Mobile Number must be at least 10 characters'),

          city: yup.string().required('city is required'),
      
          address: yup.string().required('Address is required'),
        
          password: yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
       
          cPassword: yup.string()
          .required('Confirm Password is required')
          .oneOf([yup.ref('password'), null], 'Confirm Password does not match'),

        });

          const  {register ,handleSubmit,formState: {errors},reset} = useForm ({
        
            mode: "onChange",
 
           resolver: yupResolver(Schema),
    
     });
 
     const onSubmit = (data) => {
 
         console.log({data});
 
         reset();
     };
      
        

        return(
        <div id='m-container'>
        <center>
       <form id='f-form' onSubmit={handleSubmit(onSubmit)}>
        <Container >

        <h2>Register here</h2>
        <Box sx={{ width: '100%'}} >

        <Grid container spacing={1} justifyContent="center" >
        
         <Grid item  xs={8} md={4} >  
         <TextField  multiline rows={1} fullWidth 
         label="First Name" id='fname'  
         margin = "normal" type="text" name='fname' variant="outlined"  
         {...register('fname')} error={errors.fname ? true : false}/>
        
        <p>{errors.fname?.message}</p>
        
         </Grid> 


         <Grid item xs={8} md={4}>  
        <TextField  multiline rows={1} fullWidth 
        label="Middle Name" id='mname'  
        margin = "normal" type="text" name='mname' variant="outlined" 
        {...register('mname')} error={errors.mname ? true : false}/>
        
        <p>{errors.mname?.message}</p>
        
        </Grid>
        

        <Grid item xs={8} md={4}>  
         <TextField  multiline rows={1} fullWidth 
         label="Last Name" id='lname'
          margin = "normal" type='text'  name='lname'  variant="outlined"  
          {...register('lname')} error={errors.lname ? true : false}/>
        
        <p>{errors.lname?.message}</p>

        
        </Grid>

        
        <Grid item xs={8} md={4}>  
        <TextField multiline rows={1} fullWidth 
        label="Email" id='email'
         margin ="normal" type='email' name='email' variant="outlined" 
         {...register('email')} error={errors.email ? true : false}/>
       
       <p>{errors.email?.message}</p>
       
        </Grid>


        <Grid item xs={8} md={4}>  
        <TextField  multiline rows={1} fullWidth 
        label="Mobile Number"  id='mNumber'
         margin="normal" type='text' name='mNumber' variant='outlined' 
         {...register('mNumber')} error={errors.mNumber ? true : false} />
        
       <p>{errors.mNumber?.message}</p>
        
        </Grid>


        <Grid item xs={8} md={4}>  
        <TextField multiline rows={1} fullWidth 
        label="City" id='city' 
        margin="normal" type='text' name='city' variant='outlined' 
        {...register('city')} error={errors.city ? true : false}/>
       
       <p>{errors.city?.message}</p>
       
       </Grid>       

       <Grid item xs={8} md={4}>  

        <TextField  multiline rows={1} fullWidth 
        label="Address"  id='address' 
         margin="normal" type='text' name='address' variant='outlined' 
         {...register('address')} error={errors.address ? true : false}/>
        
       <p>{errors.address?.message}</p>
        
        </Grid>


       <Grid item xs={8} md={4}>  
         <TextField  multiline rows={1} fullWidth 
         label="Password"  id='password' margin="normal"
         type='password' name='password' variant='outlined' 
         {...register('password')}  error={errors.password ? true : false}/>
       
       <p>{errors.password?.message}</p>
       
       </Grid>


       <Grid item xs={8} md={4}>  
        <TextField multiline rows={1} fullWidth 
        label="Confirm Password" id='cPassword'  margin="normal"
        type='password' name='cPassword' variant='outlined' 
        {...register('cPassword')} error={errors.cPassword ? true : false }/>
        
        <p>{errors.cPassword?.message}</p>
        
        </Grid>


        </Grid>
        </Box>

       <div>
       <Box mt={4}>

        {/* style={{maxWidth: '35%', maxHeight: '50%', minWidth: '35%', minHeight: '50%'}} */}

        <Button variant="contained" color='primary'
         type='submit' margin="normal" size="large"  style={{ margin: "1rem" }} sx={{fontSize : "20px"}}>SUBMIT</Button>

      
      <Button type="button" onClick={()=> reset()} variant="contained" 
      color="secondary" style={{ margin: "1rem" }} sx={{fontSize : "20px"}} >Reset</Button>

        </Box>

        
       </div> 
       
       </Container>
        </form>
        </center>
        </div>
       
    )
}

export default Registration