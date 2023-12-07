import './Home-Page.css';
import Product from '../Product-Card/Product-Card';
const Home = (props) => {
   const lists = props;
   console.log("props:",lists);
     return(
        <div className="Home-Page">
         <br />
         <h1 className='title'>PRICE LIST</h1>
         <div className='Product-Cart-Box-Order'>
         {props.lists.map((list, index) => (
                <Product list={list} key={index}/>
               ))};
         </div>
        </div>
     );
};

export default Home;