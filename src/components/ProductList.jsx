import  "./product.css"
// function Navigation({ arr }) {
//     return (
//         <ul className="UL__">
//             {arr.map((item) => (
//           <li>
//             <a href   = {Math.random}> {item.name} </a>
//           </li>
//             ))}
//         </ul>
//     );
// }

function ProductList({items}) {
  return (
    <div className="product">
      {items.map(item => (
        <div className="each_product" key={item.id}>
           <img className="img__" src={item.image} alt={item.name} style={{ width: '190px', height: '210' }} />
          <h2>{item.name}</h2>
         
          <p className="price__">{item.price} Դ</p>
        </div>
      ))}
    </div>
  );
      }


      

export default ProductList