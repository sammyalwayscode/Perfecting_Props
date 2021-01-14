import React from 'react'
// import "../../mvp.css"

function PropsC(props) {
  // const [input, setInput] = useState("")
  // const [counting, setCounting] = useState(false)
  return (
    <div>
      {/* <section>
        <form>
          <input placeholder="Enter a value in sec" type="number" onChange={(e) => { setInput(e.target.value) }}
          />
          <button onClick={(e) => {
            e.preventDefault()
            // setCounting(true)
            console.log(input)
          }}>Start</button>
        </form>
      </section> */}

      <center>
        <div>Creating A button</div>
        <button style={{ width: "90px", height: "40px", backgroundColor: props.backgroundColor, color: props.color }}> {props.name} </button>

      </center>
    </div>
  )
}

export default PropsC
