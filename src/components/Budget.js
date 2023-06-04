import React,{ useContext } from "react";
import { AppContext } from '../context/AppContext'

const Budget = () =>{
    const {budget,dispatch,currency} = useContext(AppContext)
    const increaseAllocation = (val)=>{
        const expense ={
           
            budget:val,
        };
        dispatch({
            type:'SET_BUDGET',
            payload:expense
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input  type="number" value={budget} onChange={increaseAllocation}></input></span>
        </div>
    );
};
export default Budget;