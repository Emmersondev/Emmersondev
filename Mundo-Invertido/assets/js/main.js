
import { subscribetohellfireclub } from "./hellfire-clube.js"

console.log(app)
const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async()=>{
    const subscription={
        name:txtName.value,
        email:txtEmail.value,
        level:txtLevel.value,
        character:txtCharacter.value
    }

        
    const subscriptionid = await subscribetohellfireclub (subscription)
    console.log('Inscrito com sucesso: ${subscriptionid}')
})