import './App.css';
import Box from'@material-ui/core/Box';
import { Avatar } from '@material-ui/core';
import sro from '../src/images/2.png';
import srp from '../src/images/3.jpg';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

function App() {
  return (
   <>
    
   <Box>
   <Box  mt={1} ml={5} fontWeight="fontWeightBold" fontSize={30} style={{color:"black"}}>ROI Calculator</Box>
 <Box ml={160} mt={-5} mb={-14}> <img src={sro}  height="40rem" width="40rem"className="img-fluid animated" alt="img"/> <Box textAlign="right" mt ={1} mr={27} ml={-150} mb={-6} fontWeight="fontWeightBold"  fontSize={30} >Cake</Box> <Box mt={1.5} ml={-12} mr={15} mb={-8}><Switch/> </Box>
 <Box  mt={4} ml={-5} mr={15} mb={10} fontWeight="fontWeightBold" >USD</Box></Box>
</Box>
<Box ml={128} mt={-1}><Avatar>
<img src={srp}  height="35rem" width="35rem"className="img-fluid animated" alt="img"/></Avatar>
</Box>
<Box  ml={5} mr={5} fontWeight="fontWeightBold">
<Button varient="outlined"  style={{border:"0.10rem solid grey",borderRadius:"1rem", backgroundColor:"lightgrey"}}  fullWidth="bool" size="large" >0.000 USD</Button>
<Box>
<Box mt={1} ml={0} ><Button varient="outlined" style={{border:"0.10rem solid grey",width:"150px",height:"45px", borderRadius:"1rem", backgroundColor:"lightgrey", }}  halfWidth="bool" size="large" > $1000</Button>       <Button varient="outlined"  fontWeight="fontWeightBold" fontSize={100}  style={{border:"0.10rem solid grey",width:"150px",height:"45px", borderRadius:"1rem", backgroundColor:"lightgrey", }}  halfWidth="bool" size="large" >$100</Button> <Box textAlign="right" mt={-2}> ~CAKE 0.000</Box></Box>
</Box>
<Box  mt={1} ml={0} fontWeight="fontWeightBold" fontSize={30} style={{color:"black"}}>Timeframe</Box>

<Box mt={1} ml={0} ><Button varient="outlined"  style={{border:"0.10rem solid grey",borderRadius:"2rem",width:"250px",height:"45px", backgroundColor:"yellow"}}  halfWidth="bool" size="large" >  1 Day</Button> <Button varient="outlined" p={10} style={{border:"0.10rem solid grey", width:"250px",height:"45px", borderRadius:"1rem", backgroundColor:"lightgrey"}}  halfWidth="bool" size="large" >   7 Day</Button> <Button varient="outlined"  style={{border:"0.10rem solid grey", width:"250px",height:"45px", borderRadius:"1rem", backgroundColor:"lightgrey"}}  halfWidth="bool" size="large" > 30 Days</Button> <Button varient="outlined"  style={{border:"0.10rem solid grey", width:"250px",height:"45px", borderRadius:"1rem", backgroundColor:"lightgrey"}}  halfWidth="bool" size="large" > 1 Year</Button> <Button varient="outlined"  style={{border:"0.10rem solid grey", width:"250px",height:"45px", borderRadius:"1rem", backgroundColor:"lightgrey"}}  halfWidth="bool" size="large" > 5 Year</Button>
</Box>

<Box  mt={1} fontWeight="fontWeightBold" fontSize={30} style={{color:"black"}}>Enable Accelerared APY <Box mt={-5} ml={150} mr={15} ><Switch/> </Box> </Box>
</Box>

<Box  mt={1} ml={5} fontSize={20} style={{color:"black"}}> Select Tier </Box>
<Box mt={1} ml={5}>
<Button varient="outlined" style={{border:"0.10rem solid grey",width:"250px",height:"45px", borderRadius:"1rem", backgroundColor:"yellow", }}  halfWidth="bool" size="large" > Tier 1</Button> <Button varient="outlined" style={{border:"0.10rem solid grey",width:"250px",height:"45px", borderRadius:"1rem", backgroundColor:"lightgrey", }}  halfWidth="bool" size="large" > Tier 2</Button> <Button varient="outlined" style={{border:"0.10rem solid grey",width:"250px",height:"45px", borderRadius:"1rem", backgroundColor:"lightgrey", }}  halfWidth="bool" size="large" > Tier 3</Button> <Button varient="outlined" style={{border:"0.10rem solid grey",width:"250px",height:"45px", borderRadius:"1rem", backgroundColor:"lightgrey", }}  halfWidth="bool" size="large" > Tier 4</Button> <Button varient="outlined" style={{border:"0.10rem solid grey",width:"250px",height:"45px", borderRadius:"1rem", backgroundColor:"lightgrey", }}  halfWidth="bool" size="large" > Tier 5</Button> 
</Box>
<Box mt={2} mr={2}  fontWeight="fontWeightBold">
<Box textAlign="right" > ROI at Current Rates</Box>
</Box>

<Box mt={1} ml={5} mr={5} fontWeight="fontWeightBold">
<Button varient="outlined"  style={{border:"0.10rem solid grey",borderRadius:"1rem", backgroundColor:"lightgrey"}}  fullWidth="bool" size="large" >0.000 USD</Button>
</Box>
<Box mt={1} mr={2}  fontWeight="fontWeightBold">
<Box textAlign="right" > ~ 0.000CAKE + 0.000000 DON</Box>
</Box>
<Box  ml={82} mr={40} mt={2} fontWeight="fontWeightBold"> Hide Details ^</Box>
<Box mt={1} ml={5} mr={5} fontWeight="fontWeightBold">
<Box textAlign="left" > API <Box textAlign="right"  mt={-2}> 9%</Box></Box>
</Box>
<Box mt={1} ml={5} fontWeight="fontWeightBold">
<Box textAlign="left" > <ul> * Calculated based on current rates</ul></Box>
<Box textAlign="left" > <ul> * All figures are estimates provided for your convenience only , and by no means represent guaranted returns.</ul></Box>
</Box>
   </>
  );
}

export default App;
