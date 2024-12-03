export default function InputTodo() {
  return (
    <div className="row my-row">
      <div className="col-6">
        <input type="text" placeholder="Enter Todo Here"></input>
      </div>
      <div className="col-4">
        <input type="date"></input>
      </div>
      <div className="col-2">
        <button className="btn btn-success">Add</button>
      </div>
    </div>
  );
}
