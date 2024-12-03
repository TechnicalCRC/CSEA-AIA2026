export default function FoodPanner2() {
  let fp = [
    ["fiSun1Breakfast", "fiSun2Lunch", "fiSun3ETea", "fiSun4Dinner"],
    ["fiMon1Breakfast", "fiMon2Lunch", "fiMon3ETea", "fiMon4Dinner"],
    ["Milk/Tea, Aloo Paratha", "fiTue2Lunch", "f4Tue3ETea", "fiTue4Dinner"],
    ["fiWed1Breakfast", "fiWed2Lunch", "fiWed3ETea", "fiWed4Dinner"],
    ["fiThurs1Breakfast", "fiThurs2Lunch", "fiThurs3ETea", "fiThurs4Dinner"],
    [
      "fiFri1Breakfast - Milk/Tea, Pav Bhaji",
      "fiFri2Lunch - Dal Makhni, Naan, Salad",
      "fiFri3ETea - Tea Sandwich",
      "fiFri4Dinner - Kadhi Rice",
    ],
    ["fiSat1Breakfast", "fiSat2Lunch", "fiSat3ETea", "fiSat4Dinner"],
  ];

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

  return (
    <>
      <div className="bg-primary text-center text-white p-5 fs-1">Food Panner</div>
      <p>Today's Date is <span className="bg-dark fs-2 text-light"> '{curDate}' </span></p>
      <div>
        Today is
        <b style={{ color: "orange", fontSize: "29px" }}>{week[curDay]}</b>,
        Today i will eat these:
      </div>
      <ol className="bg-warning">
        {fp[curDay].map((item) => (
          <li key={item} className="bg-danger mt-2 text-light">{item}</li>
        ))}
      </ol>
    </>
  );
}
