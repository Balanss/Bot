import React , {useEffect,useState} from 'react'
import { auth, fs,db } from '/src/Firebase.jsx'

export default function Functions({name,setName,setMiddle}) {

    const getMessage = async () => {
        try {
          const unsubscribe = fs
            .collection('TempName')
            .orderBy('timestamp', 'desc')
            .limit(1)
            .onSnapshot((querySnapshot) => {
              const messageArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
              }));
      
              setName(messageArray);
            });
      
          return unsubscribe;
        } catch (error) {
          console.error('Error fetching message data:', error);
        }
      };
      
      useEffect(() => {
        const unsubscribe = getMessage();
      
        // Cleanup the subscription
       
      }, []); 
      




      const getMiddle = async () => {
        try {
          const unsubscribe = fs
            .collection('Temp')
            .orderBy('timestamp', 'desc')
            .limit(1)
            .onSnapshot((querySnapshot) => {
              const messageArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
              }));
      
              setMiddle(messageArray);
            });
      
          return unsubscribe;
        } catch (error) {
          console.error('Error fetching message data:', error);
        }
      };
      
      useEffect(() => {
        const unsubscribe = getMiddle();
      
        // Cleanup the subscription
       
      }, []); 


      




}
