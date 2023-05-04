
import './App.css';
import { useState } from 'react';
import ProductList from './components/ProductList';


const products=[
  { id: 1, name: 'Decorative lighting WL1 3W white', image: 'https://api.megalight.am/cache/medium/product/296/Wl1.jpg', price: 11000 },
  { id: 2, name: 'Decorative lighting WL2 6W white', image: 'https://api.megalight.am/cache/medium/product/297/Wl2 spitak.jpg', price: 14000 },
  { id: 3, name: 'Decorative lighting WL2 6W black', image: 'https://api.megalight.am/cache/medium/product/298/Wl2 sev.jpg', price: 16000
},
]

const sale_products=[
  
    { id: 1, name: 'Decorative lighting WL1 3W white', image: 'https://api.megalight.am/cache/medium/product/7/15w 2727.jpg', price: 1000 },
  { id: 2, name: 'Decorative lighting WL2 6W white', image: 'https://api.megalight.am/cache/medium/product/32/f-led 7w 2700.jpg', price: 950 },
  { id: 3, name: 'Decorative lighting WL2 6W black', image: 'https://api.megalight.am/cache/medium/product/50/9w 1427.jpg', price: 1550
},
  
]

 

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const Menu = () => {
    setIsOpen(!isOpen); 
  }
  return (
   < >
    <div className='top__'>
    <div className="numbers">
        
      <a href='tel:'> 094 094 094</a>
      <a href='tel:'> 094 094 094</a>
    </div>
    <div className="language">
      <select >
        <option value="en">English</option>
      </select>
    </div>
  </div >
   
  <header>
   <image  alt='' ></image>
  

   <ul>
    <a href='t'>Brands</a>
    <a href='t'>Obout Us</a>
    <a href='t'>Blog</a>
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

    <input type='text' autoComplete='off' placeholder='   Search'></input>
    <div className='liked__shop'>

    <button className='heart_' ><span className='indicator'>0</span></button>

    <button className='cart_'><span className='indicator'>0</span></button>

    <button className='profile_'></button>
    </div>

  </div>
  <div className='background__'>
  </div>

  <div className='container__'>
  <div className='h2__title'>
    <h2> ՆՈՐ ՏԵՍԱԿԱՆԻ </h2>
  </div>
  <ProductList items={products}  />

  
  </div>

  <div className='container__'>
  <div className='h2__title'>
    <h2> ԶԵՂՉՎԱԾ ՏԵՍԱԿԱՆԻ </h2>
  </div>
  <ProductList items={sale_products}  />
  </div>

  <footer className='footer__'>
    <div className='footer__img_email'>
      <image className='footer__img' >
      </image>
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


  );
}

export default App;
