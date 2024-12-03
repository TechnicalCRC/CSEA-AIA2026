export default function Events() {

  let handleOnClick=(name)=>{
    alert("Hello Here Mr. " + name)
  }
  return (
    <>
      <h1>Events</h1>
      <button className="w-25" onClick={()=>handleOnClick("Aditya")}> Click Here</button>
    </>
  );
}
