import { useState, useEffect } from "react"

export const useStorage = (name, initialValue) => {

  const init = () => {
    const storage = localStorage.getItem(name);
    if(storage) {
      return JSON.parse(storage)
    }
    return initialValue
  }

  const [data, setData] = useState(init)
  useEffect( () => {
    localStorage.setItem(name , JSON.stringify(data))
  }, [data])

  return [data, setData]
}