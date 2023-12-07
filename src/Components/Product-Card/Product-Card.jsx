import './Product-Card.css';
const Product = (props) => {
    const {list} = props;
    return(
         <div className="Product-Box">
         <h3>{list.value}</h3>
         <h1>{list.price}</h1>
         <hr></hr>
         <h4>{list.user}</h4>
         <h4>{list.storage}</h4>
         <h4>{list.public_projects}</h4>
         <h4>{list.access}</h4>
         <h4>{list.private_projects}</h4>
         <h4>{list.support}</h4>
         <h4>{list.domain}</h4>
         <h4>{list.report}</h4>
         <button>BUTTON</button>
         </div>
    );
};

export default Product;