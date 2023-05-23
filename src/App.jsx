import React from 'react'


import Abc from "./routes/Abc"
const App = () => {
  return (
    <div className="relative">
    <div className=" bg-scroll  overflow-auto bg-[url('./assets/demo2.png')] h-screen w-screen bg-no-repeat bg-cover">
    <div className="relative z-10">
    <Abc/>
    </div>
    </div>
    </div>
  )
}

export default App
