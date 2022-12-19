import { useState } from 'react'
import './index.css'
function App()
{

  var [x,sdX] = useState(0);
  var [y,sdY] = useState(0);
  var [z,sdZ] = useState(0);

  var cx = (event)=>{
    sdX(event.target.value)
  }

  var cy = (event)=>{
    sdY(event.target.value)
  }

  var cz = ()=>{
    sdZ(parseInt(x) + parseInt(y))
  }
  return (
    <div 
      className='w-screen flex place-content-center h-screen place-items-center '>
        
      <div 
    className='w-2/4 bg-cyan-600 p-10 rounded shadow-lg border-4'>
      <h2 className='text-white font-bold text-center mb-5 text-2xl'>Pro Calculater</h2>
      <div
        className='w-full  flex place-content-center place-items-center mb-5'>
          <input
          type="number"
          value={x}
          className='px-5 text-white outline-none w-3/4 rounded h-10 focus:outline-sky-400 bg-gray-500/20 focus:bg-gray-600/70 duration-200'
          placeholder='tapez x' 
          onChange={cx}>
          </input>
      </div>

      <div
        className='w-full  flex place-content-center place-items-center mb-5'>
          <input
          type="number"
          value={y}
          className='px-5 text-white outline-none w-3/4 rounded h-10 focus:outline-sky-400 bg-gray-500/20 focus:bg-gray-600/70 duration-200'
          placeholder='tapez y'
          onChange={cy}>
          </input>
      </div>

      <div
        className='w-full  flex place-content-center place-items-center mb-5'>
          <input
          type="number"
          className='px-5 text-white outline-none w-3/4 rounded h-10 outline-sky-400 bg-gray-500/20 focus:bg-gray-600/70 duration-200'
          placeholder='Resultat'
          value={z}
          onlyread>
          </input>
      </div>

      <div 
        className='w-full flex place-content-center place-items-center order-none'>
          <button
            className='text-white w-3/4 py-5 bg-sky-600 rounded-lg shadow-lg hover:bg-sky-300 duration-200	active:bg-red-400'
            onClick={cz}>
              Calculer
          </button>
      </div>
    </div>
    </div>
  )
}
export default App