import "./WordCard.css"

const WordCard = (props) => {
  return (
    <div className = "container">
      <div>
        <span className = 'word'>{props.word}</span> -
        <span className = 'translation'> {props.translation}</span>
      </div>
      { props.extra 
        ? <div className = "extra">{props.extra}</div>
        : null
      }
    </div>
  )
}

export default WordCard