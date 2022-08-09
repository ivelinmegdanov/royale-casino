export const DepositHistory = (props) => {
  const history = props.history;
  const user = props.user;
  console.log(history)

  return (
    <>
        {Object.values(history).reverse().map((history) => (
      <tr>
        <td className="product-item cat-product">
          <div className="p-thumb">
            <a>
              <img src={user.photoURL} alt="product" />
            </a>
          </div>
          <div className="p-content">
            <a>{user.email}</a>
          </div>
        </td>
        <td className="cat-price">{history.ammount}$</td>
        <td className="cat-quantity">
          <div className="cart-plus-minus">
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              defaultValue={1}
              disabled
            />
          </div>
        </td>
        <td className="cat-toprice">{history.purchaseDate}</td>
        <td className="cat-edit">{history.bonus ? "100% Bonus" : "No Bonus"}</td>
      </tr>
        ))}
    </>
  );
};
