import React from 'react';
import './App.css';
import { Blog, Features,Footer, Header,Possibility, WhatGPT3} from './containers';
import { Brand, CTA, Feature, Navbar} from './components';
import {BrowserRouter,
        Routes,
        Route}
        from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
       <Routes>
      
        <Route path='/' element={<Navbar/>}/>
        <Route path='/wgpt3' element ={<WhatGPT3 />}/>
        <Route path='/possibility' element={<Possibility />}/>
        <Route path='/feature' element={<Feature />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
      </BrowserRouter>
      <Header />
      
      <Brand />
      <Features/>
      {/* <WhatGPT3/> */}
      
      <Footer />
      
    </div>
  );
}

export default App;



// import './App.css';
// import { Blog, Features,Footer, Header,Possibility, WhatGPT3} from './containers';
// import { Brand, CTA, Navbar} from './components';
// import {BrowserRouter,
//         Routes,
//         Route}
//         from 'react-router-dom';


// function App() {
//   return (
//     <div className='App'>
//       <div className='gradient__bg'>
//         <Navbar />
//         <Header />
//       </div> 
//       <Brand />
//       <WhatGPT3 />
//       <Features />
//       <Possibility />
 
//       <Blog />
//       <Footer />
//     </div>
//   );
// }

// export default App;
