import useCart from "./hooks/useCart";

function App() {
  const { data, error, isLoading, handleUpdateItemQty } = useCart();

  return <div className="bg-red-200">
    Cart items should go here
  </div>;
}

export default App;
