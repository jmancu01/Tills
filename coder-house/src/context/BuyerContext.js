import  React, {useState, createContext} from 'react';

export const BuyerContext = createContext([]);


export const BuyerProvider = ({children}) => {

    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [rEmail, setREmail] = useState()
    const [phone, setPhone] = useState()
    const [adress, setAdress] = useState()
    const [orderId, setOrderId] = useState()
    
    const setBuyer = (name, surname, email, rEmail, phone, adress, orderId) =>{
        setName(name)
        setSurname(surname)
        setEmail(email)
        setREmail(rEmail)
        setPhone(phone)
        setAdress(adress)
        setOrderId(orderId)

    }

    return(
        <BuyerContext.Provider value = {
            {
            name, 
            surname,
            email,
            rEmail,
            phone,
            adress,
            orderId,
            setBuyer
            }
        }>
            {children}
        </BuyerContext.Provider>
        
    );
}

export default BuyerProvider;