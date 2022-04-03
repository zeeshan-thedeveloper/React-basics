import { Card, CardContent, colors, Divider, Grid } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { Headings } from '../Support/Headings/Headings';
import { lightBorder } from '../Theme/borders';
import { SimpleTextField } from '../Support/TextFields/TextFields';
import { SimpleLinks } from '../Support/Link/Links';
import { SimpleButton } from '../Support/Buttons/Buttons';

function SinUpForm(props) {
    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();
    const [email,setEmail]=useState();
    const [mobile,setMobile]=useState();
    const [password,setpassword]=useState();
    
    const handelCreaAccount=(event)=>{
       alert("Call the create account api..")
    }
    return (
        <div>
            {/* Title */}
            <div style={{padding:'1rem'}}>
                                <Headings text={"Sin up"} fontSize={30} fontWeight={'bold'}/>
                            </div>
                            <Divider/>
                                    <Grid container style={{padding:'1rem'}}>
                                        <Grid item xs={6} style={{padding:'1rem'}}>
                                            <SimpleTextField 
                                                value={firstName}
                                                setValue={setFirstName}
                                                label="First Name"
                                            />
                                        </Grid>
                                        <Grid item xs={6} style={{padding:'1rem'}}>
                                            <SimpleTextField 
                                                value={lastName}
                                                setValue={setLastName}
                                                label="Last Name"
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                                            <SimpleTextField 
                                                value={email}
                                                setValue={setEmail}
                                                label="Email"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                                            <SimpleTextField 
                                                value={mobile}
                                                setValue={setMobile}
                                                label="Mobile"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{padding:'1rem',backgroundColor:''}}>
                                            <SimpleTextField 
                                                value={password}
                                                setValue={setpassword}
                                                label="Password"
                                                fullWidth
                                                
                                            />
                                        </Grid>
                                        <Grid item xs={12} style={{textAlign:'center'}}>
                                           <SimpleButton
                                                name="Creat Account"
                                                handelClick={(e)=>{
                                                    handelCreaAccount(e);
                                                }}
                                           />
                                        </Grid>
                                        <Grid item xs={12} style={{textAlign:'center'}}>
                                          <SimpleLinks
                                            name={"Have account.. Login"}
                                            handelClick={()=>{
                                                props.setDoHaveAccount(!props.doHaveAccount)
                                            }}
                                          />
                                        </Grid>
                                        
                                    </Grid>
                            
        </div>
    );
}

export default SinUpForm;