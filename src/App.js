import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Curr from './components/curr';
// Add code to import the other components here under
import AllocationForm from './components/AllocationForm'

import ExpenseList from './components/ExpenseList'
import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}        
                    <div className='col-sm'>
                        <Budget />
                    </div>
                        {/* Add Remaining component here under */}        
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                        {/* Add ExpenseTotal component here under */}        
                       <div className='col-sm'>
                        <ExpenseTotal />
                       </div>
                       <div className='col-sm'>
                           <Curr />
                       </div>
                       </div>
                       <h3 className='mt-3'>Allocation</h3>
                        {/* Add ExpenseList component here under */}         
                    <div className='row'>
                        <div className='col-sm'>
                    <ExpenseList />
                    </div>
                    </div>
                        {/* Add ExpenseItem component here under */}        
                  <h3 className='mt-3'>Change Allocation</h3>
                    <div className='row mt-3'>

                    
                        {/* Add AllocationForm component here under */}        
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                    </div>
                </div>
           
        </AppProvider>
    );
};
export default App;
