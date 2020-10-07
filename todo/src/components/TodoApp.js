import React, { useState, useEffect } from "react"
// import { useExample } from '../hooks'
import { useList } from "../hooks"

export default () => {
  const { list, setText, removeItem, toggleItem } = useList()
  const [inputText, setInputText] = useState("")
  // const [activeItem, setActiveItem] = useState(true)
  // const { example, setExample, exampleAsync, list } = useExample()

  function handleActiveToggle(item) {
    // console.log(list.map().filter())
    console.log(item)
    toggleItem(item.id)
    // e.preventDefault()
    // return setActiveItem(!activeItem)
  }

  // useEffect = () => {
  //   console.log(activeItem)
  // }
  // console.log(list.map(item => item.content),)

  const unchecked = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMWM2LjA2NSAwIDExIDQuOTM1IDExIDExcy00LjkzNSAxMS0xMSAxMS0xMS00LjkzNS0xMS0xMSA0LjkzNS0xMSAxMS0xMXptMC0xYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
  const checked = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAwYzYuNjIzIDAgMTIgNS4zNzcgMTIgMTJzLTUuMzc3IDEyLTEyIDEyLTEyLTUuMzc3LTEyLTEyIDUuMzc3LTEyIDEyLTEyem0wIDFjNi4wNzEgMCAxMSA0LjkyOSAxMSAxMXMtNC45MjkgMTEtMTEgMTEtMTEtNC45MjktMTEtMTEgNC45MjktMTEgMTEtMTF6bTcgNy40NTdsLTkuMDA1IDkuNTY1LTQuOTk1LTUuODY1Ljc2MS0uNjQ5IDQuMjcxIDUuMDE2IDguMjQtOC43NTIuNzI4LjY4NXoiLz48L3N2Zz4="

  function handleSubmit(e) {
    e.preventDefault()
    setText(inputText)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInputText(e.target.value)} />
      </form>
      <div id="listContainer">
        {list.map((item) => (
          <div className="listItem" 
          // onClick={() => handleActiveToggle(item)}
          >
            {/* {item.active ? <img
              onClick={() => handleActiveToggle(item)}
              src={unchecked}
            ></img> : <img
            onClick={() => handleActiveToggle(item)}
            src={checked}
          ></img>} */}
            <img
              onClick={() => handleActiveToggle(item)}
              className={"svg "  + (item.active ? "" : "hidden")}
              src={unchecked}
            ></img>
            <img
              onClick={() => handleActiveToggle(item)}
              className={"svg " + (item.active ? "hidden" : "")}
              src={checked}
            ></img>
            <span className={item.active ? "" : "disabled"}>{item.content}</span>
            <img
              className="svg"
              onClick={() => removeItem(item.id)}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuMTk3IDIuODM3bC44NjcuODY3LTguMjEgOC4yOTEgOC4zMDggOC4yMDItLjg2Ni44NjctOC4yOTItOC4yMS04LjIzIDguMzExLS44NC0uODQgOC4yMTMtOC4zMi04LjMxMi04LjIzMS44NC0uODQgOC4zMTkgOC4yMTIgOC4yMDMtOC4zMDl6bS0uMDA5LTIuODM3bC04LjIxMiA4LjMxOC04LjMxLTguMjA0LTMuNjY2IDMuNjY3IDguMzIxIDguMjQtOC4yMDcgOC4zMTMgMy42NjcgMy42NjYgOC4yMzctOC4zMTggOC4yODUgOC4yMDQgMy42OTctMy42OTgtOC4zMTUtOC4yMDkgOC4yMDEtOC4yODItMy42OTgtMy42OTd6Ii8+PC9zdmc+"
            ></img>
          </div>
        ))}
      </div>
    </div>
  )
  // return (
  //   <div>
  //     <h2>{example}</h2>
  //     <button onClick={() => setExample('foo')}>Example sync</button>
  //     <button onClick={exampleAsync}>Example async</button>
  //     <ul>
  //       {list.map((item) => (
  //         <li>{item}</li>
  //       ))}
  //     </ul>
  //   </div>
  // )
}
