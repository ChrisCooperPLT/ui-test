import "./App.css";
import useCart from "./hooks/useCart";

function App() {
  const { data, error, isLoading, handleUpdateItemQty } = useCart();

  return <div className="App"></div>;
}

export default App;
