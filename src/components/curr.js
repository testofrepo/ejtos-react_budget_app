import React , {useContext}from 'react'
import {AppContext} from '../context/AppContext'
const Curr = () =>{
    const {dispatch} = useContext(AppContext);
    const changeCurr = (curr) =>{
        const currenc = {
            currency:curr,
        }
        dispatch({
            name:'CHG_CURRENCY',
            payload:currenc,
        });
    };
    return (
        <div className='alert alert-green' style={{backgroundColor:'green'}}>
            <span>Currency</span><select style={{backgroundColor:'green'}}  name="Location" id="Location" onChange={event=>changeCurr(event.target.value)}>
            <option value="₹">₹ Rupee</option>
              <option value="$">$ Dollar</option>
              <option value="£">£ Pound</option>
              <option value="€">€ Euro</option>
              
            </select>	
            </div>
    );
};
export default Curr;