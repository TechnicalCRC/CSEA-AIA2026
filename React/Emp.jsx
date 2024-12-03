const Emp = () => {
  let arr = [1, 2, 3, 4, 5];
  let empdata = ["Bhavya", "Aditya", "Aakash", "Divyansh", "Bhavesh"];

  let count = 0;
  return (
    <>
      <div>Emp</div>
      {arr[3]}
      <br />
      {arr[2]}

      <h3>Employee elements </h3>
      <ul style={{ listStyleType: "none" }}>
        {empdata.map((data) => (
          <li
            key={data}
            style={{
              display: "inline",
              margin: "6px",
              border: "2px solid blue",
              backgroundColor: "Yellow",
            }}
          >
            {data}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Emp;
