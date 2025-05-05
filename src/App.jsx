
import './App.css'
import Calculator from './components/Calculator'
import Results from './components/Results'
import MortgageProvider from './context/Context'

function App() {

  return (
    <MortgageProvider>
    <div className='bg-[#E2F4FD] h-screen'>
      <div className='md:flex  h-full justify-center  md:mx-72 items-center'>
        <div className='md:flex h-fit items-stretch'>

        <Calculator/>
        <Results/>
        </div>

      </div>

    </div>
    </MortgageProvider>
  )
}

export default App
