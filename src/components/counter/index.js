import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../redux/actions/cartActions";

const Counter = (props, { handleAddToCart }) => {
  const { item } = props;
  const dispatch = useDispatch();

  return (
    <div className="counter-action">
      <span className="btn_action" onClick={() => dispatch(addToCart(item))}>
        <AiOutlinePlus />
      </span>
      <span className="counter-num">{item.count}</span>
    </div>
  );
};
export default Counter;
