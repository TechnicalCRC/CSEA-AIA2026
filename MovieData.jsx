let masterData = [
    {
    MovieId:"M101",
    MovieName:"Animal",
    MovieDesc:"A, IMDB Rating. ",
    Price:"130",
    Director:"Sandeep"
    },
    {
        MovieId:"M102",
        MovieName:"Sam Bahadur",
        MovieDesc:"UA, IMDB Rating. ",
        Price:"120",
        Director:"Vishal"
    },    
    {
            MovieId:"M103",
            MovieName:"Gadar - 2",
            MovieDesc:"UA, IMDB Rating. ",
            Price:"120",
            Director:"Ramesh"
            },            
    {
        MovieId:"M104",
        MovieName:"Salaar",
        MovieDesc:"UA, IMDB Rating. ",
        Price:"140",
        Director:"Prashant"
    },    
    {
        MovieId:"M105",
        MovieName:"Bahubali",
        MovieDesc:"UA, IMDB Rating. ",
        Price:"160",
        Director:"Ram"
    }   
    ];

    export default function MovieData(){
        return masterData.map((Mobj) =>{
            return(
                <div className="col-3" style={{
                       display:"inline-block",
                        margin:"20px",
                        padding:"5px 10px",
                        float:"left",
                        backgroundColor:"yellow",
                        border:"2px double red",
                        width:"200px"}}>
                      <div className="card">
                         <div className="card-body text-center" style={{
                            textAlign:"center"
                         }}>
                            <h1 className="card-title">{Mobj.MovieName}</h1>
                            <h4 className="card-title">Id: {Mobj.MovieId}</h4>
                            <p className="card-title"><b>Desc:</b> {Mobj.MovieDesc}</p>
                            <h1 className="card-title">Price: {Mobj.Price}</h1>
                            <p className="card-title">Director Name: {Mobj.Director}</p>
                         </div>
                      </div>
                </div>
            );
        }
        );
    }
