import React from "react"
import {useSelector, useDispatch} from 'react-redux'
import { saveAs } from 'file-saver'
import {Increment,Decrement} from "../ReudxStorage/actions/InDe-crementAction"
const Home=()=> {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter.number)
    console.log(counter)
    const downloadResume =async()=>{
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'https://linkedinlikeapp-39389-ruby.b39389.dev.eastus.az.svc.builder.cafe/bx_block_cvresumecandidatemanagement/resume/personal?account_id=129',
          headers: { 
            'token': 'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTI5LCJleHAiOjE2NTg5MDI2NDksInRva2VuX3R5cGUiOiJsb2dpbiJ9.70TCdDpQyHBnaBSuN1o2UeCIm5nyrJSB-ZQcl6Ce_q57xQmS660OzSuyL1u5m2szr9qChN5QFxwPtXOFlQkf4A'
          },
          responseType: "blob",
        };
        
       const response=await  axios(config)
        const file = new Blob([response.data], {
            
            type: "application/pdf",
          });
      
          const fileURL = URL.createObjectURL(file);
          saveByteArray("Resume",fileURL)
//         .then((response) =>  {     
//             console.log(response)
//             const file = new Blob(
//               [response.data], 
//               {type: 'application/pdf'})
//               console.log(file)
//               const fileURL = URL.createObjectURL(file);
//               console.log(fileURL)
//   //Open the URL on new Window
//             })
//         .catch(function (error) {
//           console.log(error);
//         });
        
    }
    //  function b64DecodeUnicode(str) {
    //     // Going backwards: from bytestream, to percent-encoding, to original string.
    //     return decodeURIComponent(atob(str).split('').map(function(c) {
    //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    //     }).join(''));
    // }

    function utf8_to_b64( str ) {
         let unescape = window.unescape || window.decodeURI;
        return window.btoa(unescape(encodeURIComponent( str )));
    }
    
    function b64_to_utf8( str ) {
        let escape = window.escape || window.decodeURI;
        return decodeURIComponent(escape(window.atob( str )));
    }

    function base64ToArrayBuffer(base64) {
        var encode = utf8_to_b64(base64)
        var binaryString =b64_to_utf8(encode) ;
        console.log(binaryString)
        var binaryLen = binaryString.length;
        // debugger
        var bytes = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
           var ascii = binaryString.charCodeAt(i);
           bytes[i] = ascii;
        }
        console.log(bytes)
        debugger
        return bytes;
     }
     function saveByteArray(reportName, byte) {
       console.log(byte)
       debugger
        var blob = new Blob([byte], {type: "application/pdf"});
        var link = document.createElement('a');
        link.href = byte;
        console.log(link)
        var fileName = reportName;
        link.download = fileName;
        link.click();
    };
    return (
        <>
            <h1>
                Welcome To Home Page
            </h1>

            <h1>Counter: {counter}</h1>

      <button onClick={()=>downloadResume()}>Download Resume</button>
      <button onClick={() => dispatch(Increment())}>Increase Counter</button>
      <button onClick={() => dispatch(Decrement())}>Decrease Counter</button>
    
        </>
    )
}
export default Home