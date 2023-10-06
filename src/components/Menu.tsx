import { I_pizza } from "../App";
import Pizza from "./Pizza";

interface I_props {
    pizzaData: I_pizza[];
}
function Menu({ pizzaData }: I_props) {
    const numPizzaData = pizzaData.length;
    return (
        <main className="menu">
            <h2>Our menu</h2>

            {numPizzaData > 0 ? (
                <>
                    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all dilicious.</p>
                    <ul className="pizzas">
                        {pizzaData.map((pizza) => {
                            return <Pizza pizza={pizza} key={pizza.name} />;
                        })}
                    </ul>
                </>
            ) : (
                <p>We're still working on our menu. Please come back later :)</p>
            )}
        </main>
    );
}
export default Menu;
