import Planet from 'Planet'

const GradientsList = ({list}) => {
 
    return (
      <ul className="row list-unstyled">
      
        {list.map((el) => {
          return (
            <Gradient
              key={el.name}
              colorStart={el.start}
              colorEnd={el.end}
              name={el.name}
              tags={el.tags}
            />
          )
        })}
      </ul>
    )
  }
  
  export default GradientsList