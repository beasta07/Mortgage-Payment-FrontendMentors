import React, { useContext } from 'react';
import { CiCalculator1 } from 'react-icons/ci';
import { MortgageContext } from '../context/Context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Calculator = () => {
  const {
    mortgageAmount,
    setMortgageAmount,
    mortgageYears,
    setMortgageYears,
    interestRate,
    setInterestRate,
    calculateMortgage
  } = useContext(MortgageContext);

  const validationSchema = Yup.object().shape({
    mortgageAmount: Yup.number()
      .required('Mortgage amount is required')
      .min(1, 'Must be greater than 0'),
    mortgageYears: Yup.number()
      .required('Mortgage term is required')
      .min(1, 'Must be greater than 0'),
    interestRate: Yup.number()
      .required('Interest rate is required')
      .min(0.1, 'Must be at least 0.1'),
    mortgageType: Yup.string().required('Select a mortgage type'),
  });

  const handleClear = (resetForm) => {
    resetForm();
    setMortgageAmount('');
    setMortgageYears('');
    setInterestRate('');
  };

  return (
    <div className="bg-white md:w-1/2 font-jakarta h-full md:rounded-l-lg p-10 shadow-md">
      <div className="relative">
        <h1 className="font-semibold text-lg">Mortgage Calculator</h1>
        <Formik
          initialValues={{
            mortgageAmount: '',
            mortgageYears: '',
            interestRate: '',
            mortgageType: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setMortgageAmount(values.mortgageAmount);
            setMortgageYears(values.mortgageYears);
            setInterestRate(values.interestRate);
            calculateMortgage(
              values.mortgageAmount,
              values.mortgageYears,
              values.interestRate
            );
          }}
          
          
        >
          {({ errors, touched, resetForm }) => (
            <Form className="mt-5">
              <button
                type="button"
                onClick={() => handleClear(resetForm)}
                className="underline absolute top-0 right-5 underline-offset-2 cursor-pointer text-gray-500 text-xs mb-4"
              >
                Clear All
              </button>

              {/* Mortgage Amount */}
              <label className="text-gray-500 text-xs block">Mortgage Amount</label>
              <div className={`flex md:rounded-md border mt-2 overflow-hidden ${errors.mortgageAmount && touched.mortgageAmount ? 'border-red-500' : 'border-blue-200'}`}>
                <span className={`inline-flex font-semibold items-center px-3 text-sm ${errors.mortgageAmount && touched.mortgageAmount ? 'bg-red-100' : 'bg-primary text-gray-600'}`}>
                  £
                </span>
                <Field
                  type="number"
                  name="mortgageAmount"
                  className="block w-full px-3 py-2 focus:outline-none text-sm"
                  placeholder="Enter amount"
                />
              </div>
              <ErrorMessage name="mortgageAmount" component="div" className="text-xs text-red-500 mt-1" />

              <div className="flex mt-4 gap-4">
                {/* Mortgage Term */}
                <div className="w-1/2">
                  <label className="text-gray-500 text-xs block">Mortgage Term</label>
                  <div className={`flex md:rounded-md border mt-2 overflow-hidden ${errors.mortgageYears && touched.mortgageYears ? 'border-red-500' : 'border-blue-200'}`}>
                    <Field
                      type="number"
                      name="mortgageYears"
                      className="block w-full px-3 py-2 text-sm"
                      placeholder="Enter years"
                    />
                    <span className={`inline-flex items-center px-3 text-sm ${errors.mortgageYears && touched.mortgageYears ? 'bg-red-100' : 'bg-primary text-blue-900'}`}>
                      years
                    </span>
                  </div>
                  <ErrorMessage name="mortgageYears" component="div" className="text-xs text-red-500 mt-1" />
                </div>

                {/* Interest Rate */}
                <div className="w-1/2">
                  <label className="text-gray-500 text-xs block">Interest Rate</label>
                  <div className={`flex md:rounded-md border mt-2 overflow-hidden ${errors.interestRate && touched.interestRate ? 'border-red-500' : 'border-blue-200'}`}>
                    <Field
                      type="number"
                      name="interestRate"
                      className="block w-full px-3 py-2 focus:outline-none text-sm"
                      placeholder="Enter %"
                    />
                    <span className={`inline-flex items-center px-3 text-sm ${errors.interestRate && touched.interestRate ? 'bg-red-100' : 'bg-primary text-blue-900'}`}>
                      %
                    </span>
                  </div>
                  <ErrorMessage name="interestRate" component="div" className="text-xs text-red-500 mt-1" />
                </div>
              </div>

              {/* Mortgage Type */}
              <div className="mt-5">
                <label className="text-gray-500 text-xs block">Mortgage Type</label>

                <label className={`border mt-2 bg-white border-gray-300 flex items-center gap-5 p-2 cursor-pointer `}>
                  <Field type="radio" name="mortgageType" value="repayment" />
                  <span className="font-medium text-sm text-blue-900">Repayment</span>
                </label>

                <label className={`border bg-white border-gray-300 mt-2 flex items-center gap-5 p-2 cursor-pointer`}>
                  <Field type="radio" name="mortgageType" value="interest" />
                  <span className="font-medium text-sm text-blue-900">Interest Only</span>
                </label>
                <ErrorMessage name="mortgageType" component="div" className="text-xs text-red-500 mt-1" />
              </div>

              <button
                type="submit"
                className={`md:rounded-full mt-5 w-[55%] cursor-pointer flex items-center gap-2 px-4 py-2  bg-primary`}
              >
                <CiCalculator1 />
                <span className="font-medium text-sm text-blue-900">Calculate Repayments</span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Calculator;
