import React , {useState} from 'react';
import './navbar.css';
import { RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import {Link } from 'react-router-dom';
const Menu = () =>(
  <>
  <p><Link to='/'>Home</Link></p>
  <p><Link to='/wgpt3'>What is GPT3</Link></p>
  <p><Link to='/possibility'>Open Ai</Link></p>
  <p><Link to='/features'>Case Study</Link></p>
  <p><Link to='/blog'>Library</Link></p>
  </>
)
const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className='gradient__bg'>
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src= {logo} alt="logo"></img>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
          <p>SignIn</p>
          <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
          {toggleMenu 
            ? <RiCloseLine  color="#fff" size={27} onClick={() =>setToggleMenu(false)} />
            : <RiMenu3Line  color="#fff" size={27} onClick={() =>setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3`__navbar-menu_container-links'>
              <Menu/>
                <div className='gpt3__navbar-menu_container-links-sign'>
                  <p>SignIn</p>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
    </div>
  )
}

export default Navbar;

// import React , {useState} from 'react';
// import './navbar.css';
// import { RiMenu3Line,RiCloseLine} from 'react-icons/ri';
// import logo from '../../assets/logo.svg';
// const Menu = () =>(
//   <>
//     <p><a href='#home'>Home</a></p>
//     <p><a href='#wgpt3'>What is GPT3</a></p>
//     <p><a href='#possibility'>Open Ai</a></p>
//     <p><a href='#features'>Case Study</a></p>
//     <p><a href='#blog'>Library</a></p>
//   </>
// )
// const Navbar = () => {
//   const [toggleMenu,setToggleMenu] = useState(false);
//   return (
//     <div className='gpt3__navbar'>
//       <div className='gpt3__navbar-links'>
//         <div className='gpt3__navbar-links_logo'>
//           <img src= {logo} alt="logo"></img>
//         </div>
//         <div className='gpt3__navbar-links_container'>
//           <Menu />
//         </div>
//       </div>
//       <div className='gpt3__navbar-sign'>
//           <p>SignIn</p>
//           <button type='button'>Sign Up</button>
//       </div>
//       <div className='gpt3__navbar-menu'>
//           {toggleMenu 
//             ? <RiCloseLine  color="#fff" size={27} onClick={() =>setToggleMenu(false)} />
//             : <RiMenu3Line  color="#fff" size={27} onClick={() =>setToggleMenu(true)} />
//           }
//           {toggleMenu && (
//             <div className='gpt3__navbar-menu_container scale-up-center'>
//               <div className='gpt3`__navbar-menu_container-links'>
//                 <Menu />
//                 <div className='gpt3__navbar-menu_container-links-sign'>
//                   <p>SignIn</p>
//                   <button type='button'>Sign Up</button>
//                 </div>
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   )
// }

// export default Navbar; 