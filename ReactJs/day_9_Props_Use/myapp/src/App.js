
import Products from "./Products";
import  {data} from  "./data"

const App = () => {
  return (
    <>
      {
        data.map((val)=>{
          return(
              <Products
                img={val.img}
                name={val.name}
                category={val.category}
                price={val.price}
                btn={val.btn}
              />
          )
        })
      }

    </>
  );
};

export default App;
