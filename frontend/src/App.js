
import './App.css';
import Header from './components/Header/Header';
import MiddleContact from './components/MiddleContact/MiddleContact';
import Product from './components/Product/Product';
function App() {
  return (
    <div className='home'>
      <Header/>
      <MiddleContact/>

       <div>
          <p className='text-sm mt-[120px] text-center text-[var(--Highlight-text-color)]'>Product</p>
          <h2 className='text-[25px] text-center font-bold'>Most Popular Items</h2>
          
          <Product/>
       </div>


       <div>
          <p className='text-sm mt-[120px] text-center text-[var(--Highlight-text-color)]'>Services</p>
          <h2 className='text-[25px] text-center font-bold'>Why Choose Our Favorite Food</h2>
          
          
       </div>
    
    </div>
  );
}

export default App;
