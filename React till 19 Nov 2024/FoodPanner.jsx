export default function FoodPanner() {
  let fpSun = ["fiSun1Breakfast", "fiSun2Lunch", "fiSun3ETea", "fiSun4Dinner"];
  let fpMon = ["fiMon1Breakfast", "fiMon2Lunch", "fiMon3ETea", "fiMon4Dinner"];
  let fpTue = [
    "Milk/Tea, Aloo Paratha",
    "fiTue2Lunch",
    "f4Tue3ETea",
    "fiTue4Dinner",
  ];
  let fpWed = ["fiWed1Breakfast", "fiWed2Lunch", "fiWed3ETea", "fiWed4Dinner"];
  let fpThurs = [
    "fiThurs1Breakfast",
    "fiThurs2Lunch",
    "fiThurs3ETea",
    "fiThurs4Dinner",
  ];
  let fpFri = [
    "fiFri1Breakfast - Milk/Tea, Pav Bhaji",
    "fiFri2Lunch - Dal Makhni, Naan, Salad",
    "fiFri3ETea - Tea Sandwich",
    "fiFri4Dinner - Kadhi Rice",
  ];
  let fpSat = ["fiSat1Breakfast", "fiSat2Lunch", "fiSat3ETea", "fiSat4Dinner"];

  let curDate =
    new Date().getDate() +
    " - " +
    (new Date().getMonth() + 1) +
    " - " +
    new Date().getFullYear();

    let curDay = new Date().getDay();

  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (curDay == 0)
    return (
      <>
        <h2>Food Panner</h2>
        <div>
          {" "}
          Today is <b>{week[curDay]}</b>, Today i will eat these: {curDay}
        </div>
        <ul>
          {fpSun.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );

  if (curDay == 1)
    return (
      <>
        <h2>Food Panner</h2>
        <div>
          {" "}
          Today is <b>{week[curDay]}</b>, Today i will eat these:{curDay}
        </div>
        <ol>
          {fpMon.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </>
    );

  if (curDay == 2)
    return (
      <>
        <h2>Food Panner</h2>
        <div>
          {" "}
          Today is <b>{week[curDay]}</b>, Today i will eat these:{curDay}
        </div>
        <ul>
          {fpTue.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );

  if (curDay == 3)
    return (
      <>
        <h2>Food Panner</h2>
        <div>
          {" "}
          Today is <b>{week[curDay]}</b>, Today i will eat these:{curDay}
        </div>
        <ol>
          {fpWed.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </>
    );

  if (curDay == 4)
    return (
      <>
        <h2>Food Panner</h2>
        <div>
          {" "}
          Today is <b>{week[curDay]}</b>, Today i will eat these:
        </div>
        <ol>
          {fpThurs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </>
    );

  if (curDay == 5)
    return (
      <>
        <h2>Food Panner</h2>
        <p>Today's Date is '{curDate}'</p>
        <div>
          {" "}
          Today is{" "}
          <b style={{ color: "orange", fontSize: "29px" }}>{week[curDay]}</b>,
          Today i will eat these:
        </div>
        <ol>
          {fpFri.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </>
    );

  if (curDay == 6)
    return (
      <>
        <h2>Food Panner</h2>
        <div>
          {" "}
          Today is <b>{week[curDay]}</b>, Today i will eat these:
        </div>
        <ol>
          {fpSat.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </>
    );
}
