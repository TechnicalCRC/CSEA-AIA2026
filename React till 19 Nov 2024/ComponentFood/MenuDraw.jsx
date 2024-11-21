import ItemData from "./ItemData"

export default function MenuDraw({weekData, currentDay, foodMenu}) {

  return (
        <>
              <div>
        Today is
        <b style={{ color: "orange", fontSize: "29px" }}>{weekData[currentDay]}</b>,
        Today i will eat these:
      </div>
      <ol className="bg-warning">
        {foodMenu[currentDay].map((item) => (
          <ItemData key={item} Item={item}/>
        ))}
      </ol>
        </>
  )
}
