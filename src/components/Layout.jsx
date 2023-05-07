import { Link, Outlet } from "react-router-dom"
import { useState } from "react";

  


function LayOut(){
    const [isOpen, setIsOpen] = useState(false);
    const Menu = () => {
      setIsOpen(!isOpen); 
    }
    return(
       <>
    <div className='top__'>
    <div className="numbers">
        
      <a href='tel:+374399-10-93'> +374 93 99-10-93</a>
      <a href='tel:+3741035-11-00'>+374 10 35-11-00</a>
    </div>
    <div className="language">
      <select >
        <option value="en">English</option>
      </select>
    </div>
  </div >
   
  <header>
    <Link to="/">
   <div ></div>
   </Link>
  

   <ul>
    <Link to='Brands_'>Brands</Link>
    <Link to='Obout_'>Obout Us</Link>
    <Link to='Blog_'>Blog</Link>
    <select >
     <option>Help</option>
       </select>
    


   </ul>

  </header>

  
  <div className='Menu__'>

    <div className='left__side__product'>

    <button className='icon' onClick={Menu}>
    <ul className={`drop__down ${isOpen ? 'show' : ''} `}>
      <li><a href='t'>Extension cords and accessories</a></li>
      <li><a href='t'>Adhesive & Plumbing ribbons</a></li>

      <li><a href='t'>Modular equipment</a></li>

      <li><a href='t'>Sockets, switches</a></li>
      <li><a href='t'>Lighting sources</a></li>


      <li><a href='t'>Batteries</a></li>

      <li><a href='t'>Cabels</a></li>
      
      <li><a href='t'>Tools</a></li>
      <li><a href='t'>Glue</a></li>
    </ul>
      
       </button>

    <button type='button' className='product__button'>
      Product
    </button>
    </div>

    <input type='search' autoComplete='off' placeholder='   Search'></input>
    <div className='liked__shop'>

    <button className='heart_' ><span className='indicator'>0</span></button>

    <button className='cart_'><span className='indicator'>0</span></button>

    <button className='profile_'></button>
    </div>

  </div>
    <Outlet/>


    <footer className='footer__'>
    <div className='footer__img_email'>
        <Link to="/">
      <div alt="" className='footer__img'  >
      </div>
      </Link>
      <ul>
        <li><pre>E-mail address: marketing@megalight.am</pre></li>
        <li> <pre>Tel. 094 094 094</pre></li>
        <li><pre>Address: Yerevan, Armenia</pre></li>
      </ul>

    </div>
    <div className='footer__input_button'>
      <input placeholder='E-mail address'></input>
      <button> Subscribe</button>

    </div>

  </footer>
   
  </>
    )
}
export default LayOut