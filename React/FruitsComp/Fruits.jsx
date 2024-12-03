import FruitItem from "./FruitItem"

export default function Fruits() {
  let list = ['Apple','Peach','WaterMalon', 'Cherry','Strawberry']
   
   let handleOnChange=()=>{
       console.log(event.target.value)
   }
   
  return (
    <>
      <h1 className="text-center">Fruit List</h1>
      <input type="text" className="w-50 mx-5 my-2" onChange={handleOnChange} />
      <ol className="list-group">
        {
          list.map((item)=>
          <FruitItem key="" Item={item} />
          )
        }

      </ol>
    </>
  )
}
