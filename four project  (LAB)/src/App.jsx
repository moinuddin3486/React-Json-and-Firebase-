import React from 'react'

const Data=React.lazy(()=>import("./ApiGet"))

import Apiexample from './Apiexample'

function App() {
  

  return (
    <React.Suspense fallback={<div><h1>Loading...</h1></div>}> 
      <Data />
      <Apiexample />
    </React.Suspense>
    
  )
}

export default App

