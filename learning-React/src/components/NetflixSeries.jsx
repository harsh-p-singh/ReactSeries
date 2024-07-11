import curElem from "../api/seriesData.json"
    const NetflixSeries = () => {
    // const name = "Queen Of Tears";
    // const rating = "8.2";
    // const summary = "Hae-in and her family go into hiding in Hyun-woo's hometown to figure out their next move. Eun-sung discovers the truth about Hae-in's health.";
  
    // const age = 16;
    // let canWatch = "Not Available";
    // if(age >= 18) canWatch = "Watch Now";
  
    // const returnGenre = () =>{
    //   const genre = "RomCom";
    //   return genre;
    // };
    return (
        
        <ul>
            <h1><center>Top Series with highest rating</center></h1>
            {curElem.map((curElem) => {
                return (
                <li key={curElem.id}>
                    <div>
                        <img
                        src={curElem.img_url} 
                        alt={curElem.name}
                        width = "40%" 
                        height = "40%"
                        />
                    </div>
                    
                    <h2>Name: {curElem.name}</h2> 
                    <h3>Ratings: {curElem.rating}</h3>
                    <p>Sumamry: {curElem.description}</p>
                    <p>Genre: {curElem.genre}</p>
                    <p>Cast: {curElem.cast}</p>
                    <a href={curElem.watch_url} target = "_blank">
                        <button>Watch Now</button>
                    </a>
                    {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}
                    </button> */}
                    {/* <button>{canWatch}</button> */}
                </li>
                );
            })}
        
        </ul>
    );
  };

export default NetflixSeries;    


 