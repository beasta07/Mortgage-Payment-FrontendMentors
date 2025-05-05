import React, { useContext } from 'react'
import { MortgageContext } from '../context/Context';

const Results = () => {
  const {
    monthlyMortgage ,totalMortgage
  } = useContext(MortgageContext)
  console.log(monthlyMortgage,totalMortgage)
  return (
    <div className='bg-[#12303F] flex flex-col md:w-1/2   font-jakarta justify-center items-center text-white  p-10 md:rounded-r-lg md:rounded-bl-4xl'>
      {monthlyMortgage == 0 ? <>        <img src="/assets/images/illustration-empty.svg" alt="" />
        <h2 className='text-xl font-medium text-center'>Results shown here</h2>
          <p className='text-gray-400 text-xs mt-2 text-center'>Complete the form and click "calculate repayments" to see what your monthly repayments would be</p></>
        : 
        <div>
          <h1 className='font-semibold text-lg'> Your results </h1>
          <p className='mt-4 text-gray-400 text-xs '>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again. Your monthly repayments Total you'll repay over the term
          </p>
          <div className='border-t  p-4 mt-10 border-amber-300'>
            <h2 className=''>Your monthly repayments</h2>
            <h1 className=' mt-4 text-primary text-4xl'>Rs {monthlyMortgage.toFixed(2)}</h1>

            <hr className='my-4 text-gray-300' />
            <div>
              <h2 className='text-gray-200 text-sm mb-2'>Total you'll repay over the term</h2>
              <h2 className='text-white font-semibold'>Rs {totalMortgage.toFixed(2)}</h2>

            </div>

          </div>
          <p></p>
        </div>  
        }

    </div>
  )
}

export default Results
