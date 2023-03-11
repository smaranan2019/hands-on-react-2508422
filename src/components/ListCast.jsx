export default ( {cast, onChoice} ) => {
  
  return(
    <div style = {{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
      gap: `1rem`,
      marginBottom: `1rem`
    }}>
      {
        cast.map(member => (
          //data-tooltip is a feature from pico.css, allows name to be shown upon hover
          //when you clikc on the cast, the onchoice function (custom) is called
          <a onClick={ ()  => {onChoice(member)}} key={member.id} data-tooltip={member.name}>
            <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
          </a>
        ))
      }
    </div>
  )
}