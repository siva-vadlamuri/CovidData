import React ,{useState} from 'react';
//useState doesn't automatically merge and update  the Object
function UseState() {
    //In useState we can pass numbers , arrays , Objects
    //Difference between useState and setState is --> by using useState it will not merge the object
    //Using spreed Operator it will merge the object
    const [name,setName] = useState({firstName : '',lastName : ''})
    return (
        <div>
        <h1>Using useState draw back</h1>
        <h3>useState doesn't automatically merge and update the object so we will use spreed operator</h3>
        <form  method="post">
            <input type="text"  value={name.firstName} onChange={(e)=>setName({firsrName :e.target.value})} placeholder="Enter your first name" />
            <input type="text" value={name.lastName} onChange={(e)=>setName({lastName : e.target.value})} placeholder="Enter your last name" />
        </form>
            
            <div>
            <h3>Your firsrName is - {name.firsrName}</h3>
            <h3>Your lastName is - {name.lastName}</h3>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}

export default UseState
