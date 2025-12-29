import "./App.css";
import { Card } from "./components/Card";
import ChaiCard from "./components/ChaiCard";
import { ChaiList } from "./components/ChaiList";
import { Counter } from "./components/Counter";
import { OrderForm } from "./components/Orderform";
import type { Chai } from "./types";

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 24 },
  { id: 2, name: "Ginger", price: 20 },
  { id: 3, name: "Lemon", price: 12 },
];

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name="Headphone" price={5000} />
        <ChaiCard name="iPhone" price={200000} />
      </div>

      <div>
        <Counter />
      </div>

      <div>
        <ChaiList items={menu} />
      </div>

      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed :", order.name, order.cups);
          }}
        />
      </div>

      <div>
        <Card title="Chai aur TypeScript" footer={<button>Order Now</button>} />
      </div>
    </>
  );
}

export default App;
