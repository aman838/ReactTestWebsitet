import React,{useState} from "react"
import {Modal,Box,Typography,Button,Snackbar} from "@mui/material"
import InputEmoji from 'react-input-emoji'
import { withStyles,ThemeProvider} from "@mui/styles";
import moment from "moment"
import { useDispatch,useSelector } from "react-redux"; 
import { AddTodoItem } from "../ReudxStorage/actions/TodoActio";

const CreateTodoModal=({open,handleClose})=>{
    const [ text, setText ] = useState('')
    const [openToast,setToast] =useState(false)
    const dispatch = useDispatch()
    function handleOnEnter (text) {
        console.log('enter', text)
      }

 return (
    <>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }}
>
  <Box 
  className="CreateModalBox" 
  style={{position:'relative'}}
    >
      <Typography style={{
        textAlign:'center',
        fontFamily:'Arima',
        fontSize:'22px',
        padding:'5px'
      }}>create a To do Task</Typography>  

     <InputEmoji
          value={text}
          onChange={(e)=>{
            setText(e)
          }}
          fontFamily='Arima'
          borderRadius="13px"
          height="300px"
          placeholder="Type a message"
        />
        <Button 
        variant="contained"
        type="button"
        onClick={()=> {
          dispatch(AddTodoItem({
          text, 
          time:moment()}
          ))

          handleClose()
          setToast(true)
         
        }
        }
        style={{
          position:'absolute',
          fontFamily:"Arima",
          padding:'10px 24px',
          left:'24px',bottom:'20px'
        }}>Send</Button>
  </Box>
 

</Modal>

<Snackbar
  open={openToast}
  autoHideDuration={3000}
  onClose={()=>setToast(false)}
  message="Added Successfully"
/>
    </>
 )
}
const styles=()=>{

}

export default withStyles(styles)(CreateTodoModal);