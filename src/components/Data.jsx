import React,{useState} from 'react';

export const Data = () => {
    const [data,setData]=useState(0)
    const [devc,setDevc]= us
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <label htmlFor=""> HR Count</label>
                        <input type="text" onChange={e=> setData(e.target.value)} />
                        </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">Dev Count</label>
                        <input type="text" />
                    </td>
                    
                    
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">Total Count</label>
                        <p>{data}</p>
                    </td>
                      
            
                </tr>
            </table>
        </div>
    );
};

