import { Adminpanel } from "../pages/Adminpanel";
import { useFetch } from "../customhooks/useFetch";

export const Depositlist = () => {
  const {
    data: history,
    isPending,
    error,
  } = useFetch(
    "https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/purchaseHistory.json"
  );
  if (history) {
    console.log(Object.values(history));
  }
  return (
    <>
      <Adminpanel />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {history &&
        Object.values(history)
          .reverse()
          .map((history) => (
            <tr>
              <td className="product-item cat-product">
                <div className="p-thumb">
                  <a>
                    <img src="photo" alt="product" />
                  </a>
                </div>
                <div className="p-content">
                  <a>user</a>
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
              <td className="cat-edit">
                {history.bonus ? "100% Bonus" : "No Bonus"}
              </td>
            </tr>
          ))}
    </>
  );
};
