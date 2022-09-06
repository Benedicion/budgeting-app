import "../css/add.css"


function AddItem() {
    return(


        <div>
            
            <input  placeholder="Enter Item"></input> <br></br>
            <input  placeholder="Enter Amount"></input> <br></br>
        
        <select>
        <option value="income">Income</option> 
        <option value="expenses">Expenses</option>

        </select>

        <button  id="btn">add</button>

        
        </div>
    )
    
}

export default AddItem;