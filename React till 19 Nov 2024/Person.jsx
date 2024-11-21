// props practice code

export default function Person({branch, course, name}) {

//  let {branch, course, name} = props; /// destructuring

  return (
    <>
      <h1>Person Details</h1>
      <p>Hello Mr. <b>{name}</b></p>
      <p>You are in <strong>{course}</strong></p>
      <p>Your branch is <b>{branch}</b></p>
    </>
  )
}
