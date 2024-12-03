export default function Task({todoName, todoDate}) {
  return (
    <div className="row my-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}
