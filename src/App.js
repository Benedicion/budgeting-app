import logo from './logo.svg';
import AddItem from './ccomponents/additem';
import './App.css'; 
import React,{useState} from 'react';

function App() {  

  const [transaction, setTransaction] = useState ([]) ;

  const addTransaction= (( amout, item , transactionType ) =>{


    setTransaction ( (item) => [ ...item, {
       amount:amout,
       item:item,
       transactionType:transactionType,

    }])
  })


  return (
    <div className="container">

      <AddItem  add = { addTransaction }      /> 
      
    </div>
  );
}

export default App;
