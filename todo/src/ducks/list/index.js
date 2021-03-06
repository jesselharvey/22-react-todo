import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

const ADD_LIST_ITEM = "list/ADD_LIST_ITEM"
const REMOVE_LIST_ITEM = "list/REMOVE_LIST_ITEM"
const TOGGLE_LIST_ITEM = "list/TOGGLE_LIST_ITEM"

const initialState = {
  list: [],
}

function generateId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default (state = initialState, action) => {
  // const [activeItem, setActiveItem] = useState(false)
  // console.log(state)
  // console.log(action.payload)
  switch (action.type) {
    case ADD_LIST_ITEM:
      return {
        ...state,
        list: [
          ...state.list,
          { id: generateId(), content: action.payload, active: true },
        ],
      }
    case TOGGLE_LIST_ITEM:
      return {
        ...state,
        list: state.list.map((item) => {
          console.log(state)
          console.log(item.id == action.payload)
          return item.id == action.payload ? {...item, active: !item.active} : item
        }),
      }
    case REMOVE_LIST_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      }
    default:
      return state
  }
}

function addListItem(item) {
  return {
    type: ADD_LIST_ITEM,
    payload: item,
  }
}
function toggleListItem(item) {
  return {
    type: TOGGLE_LIST_ITEM,
    payload: item,
  }
}
function removeListItem(item) {
  return {
    type: REMOVE_LIST_ITEM,
    payload: item,
  }
}

export function useList() {
  const dispatch = useDispatch()
  const list = useSelector((app) => app.listState.list)
  const setText = (item) => dispatch(addListItem(item))
  const toggleItem = (item) => dispatch(toggleListItem(item))
  // const remove = useSelector((app) => app.listState.remove)
  const removeItem = (item) => dispatch(removeListItem(item))

  return {
    list,
    setText,
    // remove,
    removeItem,
    toggleItem,
  }
}
