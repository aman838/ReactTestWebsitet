import { withStyles,ThemeProvider} from "@mui/styles";
import React ,{useState} from "react"
import {Box,
    Typography,
    Button,
    Card,
    Grid
} from "@mui/material"
import CreateTodoModal from "./CreateTodoModal";
import { useSelector } from "react-redux/es/exports";
import moment from "moment";
const TodoHome=( {classes})=>{  

  const todos = useSelector(state => state.TodoList.todos)
const [open,setOpen] =useState(false)

const handleClose=()=>{
setOpen(false)
}

    return (
       <> 

          <Box className={classes.BoxDesign}>
            <Typography
            variant="title"
            className={classes.TextCss}
            style={{textAlign:'center'}}
            >Let's  Make  a Todo  List for Today</Typography>
          </Box>
           
           <Box className={classes.BoxDesignForButton} >
           <Button 
            variant="contained"
            type='button'
            className={classes.AddItemButton}
            style={{padding:'8px 23px',
            textTransform:'none',
            color:'#fff',
            fontFamily:'Arima',
            fontWeight:500,
            fontSize:16}}
            onClick={()=>setOpen(true)}
            >
             Add  To Do Item
           </Button>
           </Box>

           <Box style={{margin:'3% 5%'}}>
           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
              todos.map((task)=>{
                return (
                  <Grid item xs={12} md={6} xl={4}  key={task}>
                  <Card 
                   style={{
                    height:'210px',
                    width:'300px',position:'relative'}}>
                   <Box style={{padding:'10px 20px'}}>
                     <Typography style={{
                      fontFamily:"Arima",
                      fontSize:'16px',
                      fontColor:'#f0f0f0'
                     }}>{task.text}</Typography>
                   </Box>
                   <Box style={{ position:'absolute',
                    bottom:'20px',
                    left:'20px',}}>
                   <Typography style={{
                    fontFamily:"Arima",
                      fontSize:'13px',
                      fontColor:'#f0f0f0'
                      }}>{moment(task.time).fromNow()}</Typography>
                      </Box>
                  </Card>
                  </Grid>
                )
              })
            }
           </Grid>
           </Box>
         
         <CreateTodoModal 
          open={open}
          handleClose={handleClose}
         />
       </>
     )
}
const styles=()=>({
    BoxDesign:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display:'flex',
        padding:20,
        borderRadius: 12,
        margin:'4% 20% 2%',
        justifyContent:'center',
    },
    AddItemButton:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
    },
    BoxDesignForButton: {
        display:'flex',
        justifyContent:'center',
    },
    TextCss:{
        color:'#fff',
        fontFamily:'Arima',
        fontWeight:500,
        fontSize:24
    },
   ".MuiButton-root .css-sghohy-MuiButtonBase-root-MuiButton-root":{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
    padding:'8px 23px',
    color:'#fff',
    fontFamily:'Arima',
    fontWeight:500,
    fontSize:16
   }
});
export default withStyles(styles)(TodoHome);