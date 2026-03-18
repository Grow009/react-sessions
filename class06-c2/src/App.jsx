import CardContainer from "./components/CardContainer";

function App() {
  const Data = [
    {
      productName: "Laptop",
      price: 55000,
      rate: 4.5
    },
    {
      productName: "Smartphone",
      price: 20000,
      rate: 4.2
    },
    {
      productName: "Headphones",
      price: 1500,
      rate: 4.0
    },
    {
      productName: "Smartwatch",
      price: 3000,
      rate: 3.8
    }
  ];

  // console.log(Data);
  return (
    <div>
      <CardContainer Data={Data}/>
    </div>
  )
}

export default App