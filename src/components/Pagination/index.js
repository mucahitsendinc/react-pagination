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

  return (
    <div className="buttons">
      {data!=[]  ? 
      data.slice(0,data.length/pagelimit).map((item,index) => {
        if(index == 0){
          return (
            <React.Fragment key={index}>
              <button  onClick={() => changePage('back')}> {'<'} </button>
              <button className={active==index ? 'active' : ''}  onClick={() => setPage([index*pagelimit,pagelimit])}>{index+1}</button>
            </React.Fragment>
          )
        }else if(index==data.length/pagelimit-1){ 
          return (
            <React.Fragment key={index}>
              <button className={active==index ? 'active' : ''} onClick={() => setPage([data.length-pagelimit,data.length],index)}>{index+1}</button>
              <button onClick={() => changePage('next')}>{'>'}</button>
            </React.Fragment>
          )
        }
        return (
          <button key={index} className={active==index ? 'active' : ''} onClick={() => setPage([index*pagelimit,(index+1)*pagelimit],index)}>{index+1}</button>
        )
      })
      : <></>}
    </div>
  )
}
