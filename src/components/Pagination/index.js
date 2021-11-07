import React,{useEffect,useState} from 'react'

export default function Pagination({setter,data,pagelimit,slice,render}) {

  const [active,setActive]=useState(0)

  console.log(render)

  useEffect(() => {
    if(data.length > pagelimit){
      setter([0,pagelimit])
    }
  }, [data])

  const setPage=(el=[],active=0)=>{
    setter([el[0],el[1]])
    setActive(active)
  }

  const changePage=(e)=>{
    if(e=='next'){
      if(slice[1]<data.length){
        setPage([slice[0]+pagelimit,slice[1]+pagelimit],active+1)
      }else{
        setPage([0,pagelimit],0)
      }
    }else{
      if(slice[0]>0){
        setPage([slice[0]-pagelimit,slice[1]-pagelimit],active-1)
      }else{
        setPage([data.length-pagelimit,data.length+pagelimit],(data.length/pagelimit)-1)
      }
    }
  }
  const post={id:1,title:'asd',body:'asdsgf'}
  return (
    {
      render
    }
  )
}
