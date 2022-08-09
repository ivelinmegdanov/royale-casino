const depositNow = async (ammount, uid) => {
  try {
    if (!ammount || ammount < 10 || ammount > 5000) {
      return;
    }

    let data;

    await fetch(
      `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`
    )
      .then((response) => response.json())
      .then((x) => (data = x));

    Object.values(data)[0].balance =
      Number(Object.values(data)[0].balance) + Number(ammount);

      if(Object.values(data)[0].firstTimeDeposit){
        Object.values(data)[0].balance += Number(ammount);
        Object.values(data)[0].firstTimeDeposit = false;
        alert("You got 100% Deposit Bonus");
      }
      Object.values(data)[0].balance = Object.values(data)[0].balance.toFixed(2);
    await fetch(
      `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
  } catch (err) {}
};

const log = async (ammount, uid) => {
  try {
    if (!ammount || ammount < 10 || ammount > 5000) {
      return;
    }

    let tempData;

    await fetch(
      `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`
    )
      .then((response) => response.json())
      .then((x) => (tempData = x));

      let bonus = false;

      if(Object.values(tempData)[0].firstTimeDeposit){
        bonus = true;
      }


    var today = new Date();
    var date =
    today.getDate() +
    "-" +
    (today.getMonth() + 1) +
      "-" +
      today.getFullYear()
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;

    console.log(dateTime);

    const data = {
      purchaseDate: dateTime,
      ammount: ammount,
      bonus: bonus
    };

       await fetch(
         `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/purchaseHistory/${uid}.json`,
         {
           method: "POST",
           body: JSON.stringify(data),
         }
       );
  } catch (err) {}
};

export { depositNow, log };
