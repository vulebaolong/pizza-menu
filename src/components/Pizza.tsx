import { I_pizza } from "../App";

interface I_props {
    pizza: I_pizza;
}

function Pizza({ pizza }: I_props) {
    return (
        <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
            </div>
        </li>
    );
}
export default Pizza;
