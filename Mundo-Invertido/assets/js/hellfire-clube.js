import app from "./app.js"
import {getFirestore,collection,addDoc} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export function subscribetohellfireclub (subscription) {
   const db =  getFirestore (app)
   const hellfireClubCollection = (db,'hellfire-club')
   const docref = await addDoc(hellfireClubCollection, subscription)
   return docref.id
   
}