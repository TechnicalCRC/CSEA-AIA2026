import Hello from "./Hello.jsx";
import Greet from "./Greet.jsx";
import Image from "./Image.jsx";
import { StuName, dispaly } from "./Greet.jsx";
import Image1 from "./Image1.jsx";
import Image2 from "./Image2.jsx";

import * as bundle from './Greet.jsx';

import Emp from './Emp.jsx';

//import FoodPanner from './FoodPanner.jsx';
import FoodPanner1 from "./FoodPanner1.jsx";
import BootStrap1 from './BootStrap1.jsx'
import FoodPanner2 from "./FoodPanner2.jsx";
import Person from "./Person.jsx";
import FoodPanner from "./ComponentFood/FoodPanner.jsx";
import MovieData from "./MovieData.jsx";
import DataMovie from "./DataMovie.js";
import Todo from "./Todo.jsx";

function App(){
  let nameData="Aditya";
  let branchData ="B.Tech";
  let courseData = "AI-A";


  return <>
   <Todo></Todo>

   {/* <MovieData mData={DataMovie} ></MovieData> */}

  {/* <FoodPanner></FoodPanner>  */}
  {/* <Person name={nameData} course={courseData} branch={branchData}></Person> */}
  </>
}














// function App() {
//   let x = 10;
//   let show = function(){
//     return <h1>Show Function</h1>
//   }

//   return (
//     <>
//     <FoodPanner2></FoodPanner2>
//     {/* <Emp></Emp> */}
//     {/* <FoodPanner1></FoodPanner1> */}
// {/* <BootStrap1></BootStrap1> */}
//       {/* {x}
//       <br />
//       {show()}
//       <br />
//       <Greet></Greet>
//       <br />
//       <Image></Image>
//       <br />
//       <Image1></Image1>
//       <br />
//       <Image2></Image2>
//       <br />
//       {bundle.StuName}
//       <br />
//       {bundle.dispaly()}
//       <br />
//       {bundle.default()}
//       <br></br>
//       <bundle.default></bundle.default>
//       <br />
//       <bundle.dispaly></bundle.dispaly> */}
//     </>
//   );
// }

export default App;
