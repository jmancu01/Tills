import {getFireStore} from './index'

export const getCollection = (collectionName) =>{

    let data = []
    const db = getFireStore()
    const itemCollection = db.collection(collectionName)

    itemCollection
        .get()
        .then(
            (querySnapshot) => {
                
                data = querySnapshot.docs.map((doc) => doc.data())
               
                
            } 
        )
        .catch((e)=> console.error('firestone ', e))
    console.log(data)

    return data
       
}