import './Row.css'
function Row({key,Name,email,phone,isTh}){

    return(
        
        <tr className='container_row'    key= {key}   >
            {isTh ? (<th> {Name}</th>) : (<td> {Name}</td>)}
            {isTh ? (<th> {phone}</th>) : (<td> {phone}</td>)}
            {isTh ? (<th> {email}</th>) : (<td> {email}</td>)}
                
            {/* <th className='row'>
                {phone}
                
            </th>
            <th className='row'>
                {email}

            </th> */}

        </tr>
        
    )
}

export default Row;