
import ProductList from "../components/ProductList";

const products=[
    { id: 1, name: 'Decorative lighting WL1 3W white', image: 'https://api.megalight.am/cache/medium/product/296/Wl1.jpg', price: 11000 },
    { id: 2, name: 'Decorative lighting WL2 6W white', image: 'https://api.megalight.am/cache/medium/product/297/Wl2 spitak.jpg', price: 14000 },
    { id: 3, name: 'Decorative lighting WL2 6W black', image: 'https://api.megalight.am/cache/medium/product/298/Wl2 sev.jpg', price: 11000
  },
  { id: 4, name: 'Decorative lighting WL1 3W white', image: 'https://api.megalight.am/cache/medium/product/302/Wl5.jpg', price: 11000 },
    { id: 5, name: 'Decorative lighting WL2 6W white', image: 'https://api.megalight.am/cache/medium/product/303/Wl6.jpg', price: 13000 },
    { id: 6, name: 'Decorative lighting WL2 6W black', image: 'https://api.megalight.am/cache/medium/product/301/Wl4.jpg', price: 11000
  },
  ]
  
  const sale_products=[
    
      { id: 1, name: 'Decorative lighting WL1 3W white', image: 'https://api.megalight.am/cache/medium/product/7/15w 2727.jpg', price: 1000 },
    { id: 2, name: 'Decorative lighting WL2 6W white', image: 'https://api.megalight.am/cache/medium/product/32/f-led 7w 2700.jpg', price: 950 },
    { id: 3, name: 'Decorative lighting WL2 6W black', image: 'https://api.megalight.am/cache/medium/product/50/9w 1427.jpg', price: 1550
  },
  { id: 4, name: 'Decorative lighting WL1 3W white', image: 'https://api.megalight.am/cache/medium/product/7/15w 2727.jpg', price: 1000 },
  { id: 5, name: 'Decorative lighting WL2 6W white', image: 'https://api.megalight.am/cache/medium/product/32/f-led 7w 2700.jpg', price: 950 },
  { id: 6, name: 'Decorative lighting WL2 6W black', image: 'https://api.megalight.am/cache/medium/product/50/9w 1427.jpg', price: 1550
},
    
  ]

  


function Homepage(){
   
    return(
       <>
   

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


  
  </>
    )
}
export default Homepage