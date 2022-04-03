import { Card, CardContent, Divider, Grid } from '@material-ui/core';
import React,{useState} from 'react';
import { Headings } from '../Support/Headings/Headings';
import {lightBorder} from '../Theme/borders'
import { SimpleTextField } from '../Support/TextFields/TextFields';
import { SimpleLinks } from '../Support/Link/Links';
import { SimpleButton } from '../Support/Buttons/Buttons';

function SinInForm(props) {
    const [email,setEmail]=useState();
    const [password,setpassword]=useState();
    const handelSinInEvent = (event)=>{
        alert("Call the api for sining in to your account...")
    }
    return (
        <div>
                     {/* Title */}
                     <div style={{padding:'1rem'}}>
                                <Headings text={"Sin in"} fontSize={30} fontWeight={'bold'}/>
                            </div>
                            <Divider/>
                            <Grid container>
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
                                                value={password}
                                                setValue={setpassword}
                                                label="Password"
                                                fullWidth
                                                
                                            />
                                </Grid>
                                <Grid item xs={12} style={{textAlign:'center'}}>
                                           <SimpleButton
                                                name="Sin in"
                                                handelClick={(e)=>{
                                                    // setDoHaveAccount(!doHaveAccount)
                                                    handelSinInEvent(e);
                                                }}
                                           />
                                </Grid>
                                <Grid item xs={12} style={{textAlign:'center'}}>
                                          <SimpleLinks
                                            name={"Don't have account ?"}
                                            handelClick={()=>{
                                                props.setDoHaveAccount(!props.doHaveAccount)
                                            }}
                                          />
                                </Grid>
                            </Grid>
                           
        </div>
    );
}

export default SinInForm;