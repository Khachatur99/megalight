import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <>
    <div className='top__'>
    <div className="numbers">
            <Navigation arr={[
              {

                },

              {

                },

              {
                 }
            ]}/>
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

    <button className='icon'> </button>

    <button type='button' className='product'>
     
      Product

    </button>
    </div>

    <input type='text' autoComplete='off' placeholder='Search'></input>
    <div className='liked__shop'>
    <button><span className='indicator'>0</span></button>
    <button><span className='indicator'>0</span></button>
    <button></button>
    </div>





  </div>

   
  </>


  );
}

export default App;
