
const Planet = ( {key, name, population, climate} ) => {
    
    return (

        <div key={key} className="card bg-dark text-white text-center" style={{width: '18rem'}}>
        <img className="card-img-top mh-20 mw-20" src={`https://i.pinimg.com/originals/9b/56/27/9b5627242de1ada6f66b21549cbd7cb7.jpg`} alt=''/>
        <div className="card-body">
          <h5 className="card-title text-primary">{name}</h5>
          <p className="card-text">Population : {population}</p>
          <p className="card-text">Climat : {climate}</p>
          <a target='_blank ' href={`https://starwars.fandom.com/fr/wiki/${name}`} className="btn btn-primary">More Info</a>
        </div>
        
        </div>
    )
}

export default Planet
