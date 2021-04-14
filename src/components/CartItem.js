import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

export const Item = styled.div`
  width: 100%;
  display: flex;
  background: white;
  border-radius: 2px;
  justify-content: space-between;
  align-items: center;
  background: whitesmoke;


  select {
    padding: 10px;
    height: 50px;
    min-width: 60px;
    max-width: 60px;
  }

  img {
    min-width: 80px;
    max-width: 80px;
  }

  a {
    color: black;
  }

`;

export const DeleteButton = styled.div`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;
  &:active {
    color: black;
    transform: scale(1.2);
  }
`;

export const Trashcan = styled(FaRegTrashAlt)`
  color: red;
  margin-right: 25px;
  font-size: 1.2em;
`;

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <Item>
      <img src={item.imageUrl} alt={item.name} />
      <Link to={`/shop/${item.product}`}>
        <p>{item.name}</p>
      </Link>
      <p>€ {item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {new Array(item.countInStock).fill(0).map((item, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <DeleteButton>
        <Trashcan onClick={() => removeHandler(item.product)}></Trashcan>
      </DeleteButton>
    </Item>
  );
};

export default CartItem;
