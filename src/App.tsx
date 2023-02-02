import { useEffect, useState } from "react"

export function App() {


  const [list, setList] = useState<any[]>([])



  useEffect(() => {
    let list:any = localStorage.getItem("list")
    console.log("CAIU AQUII")
    if(list != null){
      let convert = JSON.parse(list)
      console.log(convert)
      convert.map((item: any) => setList((state:any) => [...state, item]))
    }else{
      localStorage.setItem("list", JSON.stringify(list))
      console.log("CAIU AQUI")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  },[list])
  
  let index = 1

  function addToList(){
    setList((state:any) => [...state, "Novo Item"])
  }

  function removeToList(){
    list.pop()
    setList((state:any) => [...state])
    console.log(list)
  }


  return (
    <div>
      <ul>
        {list.map(item => <li>{item} {index++}</li>)}
      </ul>
      <button onClick={addToList}>Add to list</button>
      <button onClick={removeToList}>Remove</button>
    </div>
  )
}


