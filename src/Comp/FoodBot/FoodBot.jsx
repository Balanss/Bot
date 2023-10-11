import React from 'react'
import { useState , useEffect } from 'react'
import '../../App.css'



export default function FoodBot() {


  const [okay,setOkay]= useState('')

  useEffect(() => {
   setOkay( localStorage.getItem('password'))
  })

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
        script.type = 'text/javascript';
        script.async = true;
        script.onload = () => {
          window.voiceflow.chat.load({
            verify: { projectID: import.meta.env.VITE_FOOD },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
          });
          // Introduce a small delay to ensure the widget is fully initialized
          setTimeout(() => {
            window.voiceflow.chat.open();
          }, 2000); // Adjust the delay as needed
      
        };
        document.body.appendChild(script);
      
        return () => {
          // Cleanup if necessary
          document.body.removeChild(script);
        };
      }, []);



  return (<>
{okay === import.meta.env.VITE_FOOD &&  
   <div className='bot text-center'>

</div>}
 </> )
}
