const ItemMovie = (props) => {
  let {Item} = props
  return (
    <div
    className="col-3"
    style={{
      display: "inline",
      margin: "20px",
      padding: "5px 10px",
      float: "left",
      backgroundColor: "yellow",
      border: "2px double red",
      width: "300px",
    }}
  >
    <div className="card">
      <div
        className="card-body text-center"
        style={{
          textAlign: "center",
        }}
      >
        <h1 className="card-title">{Item.MovieName}</h1>
        <h4 className="card-title">Id: {Item.MovieId}</h4>
        <p className="card-title">
          <b>Desc:</b> {Item.MovieDesc}
        </p>
        <h1 className="card-title">Price: {Item.Price}</h1>
        <p className="card-title">Director Name: {Item.Director}</p>
      </div>
    </div>
  </div>
  )
}

export default ItemMovie