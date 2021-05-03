import React ,{useState} from 'react';

function SpreedOperatorUseState() {
   
    const [name,setName] = useState({firstName : '',lastName : ''})
    return (
        <div>
       <h1>Using spread Operator and useState</h1>
        <form  method="post">
            <input type="text"  value={name.firstName} onChange={(e)=>setName({...name,firstName :e.target.value})} placeholder="Enter your first name" />
            <input type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName : e.target.value})} placeholder="Enter your last name" />
        </form>
            
            <div>
            <h3>Your firsrName is - {name.firsrName}</h3>
            <h3>Your lastName is - {name.lastName}</h3>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}

export default SpreedOperatorUseState;
