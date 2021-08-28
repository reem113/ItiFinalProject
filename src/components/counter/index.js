import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
class Counter extends React.Component {
  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    const { product, cartItemId, changeProductQuantity } = this.props;

    return (
      <section className="section">
        <span className="container">
          <span>
            <span
              className="btn_action"
              onClick={() => changeProductQuantity(cartItemId, 1)}
            >
              <AiOutlinePlus />
            </span>

            <span className="p-3">{product.quantity}</span>

            <span
              className="btn_action"
              onClick={() => changeProductQuantity(cartItemId, -1)}
            >
              <AiOutlineMinus />
            </span>
          </span>
        </span>
      </section>
    );
  }
}
export default Counter;
