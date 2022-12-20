import useCart from "./hooks/useCart";

function App() {
  const { data, error, isLoading, handleUpdateItemQty } = useCart();

  return <div className="bg-red-200"></div>;
}

export default App;
