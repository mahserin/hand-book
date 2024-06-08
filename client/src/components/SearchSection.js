import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import './SearchSection.css'
import { RiArrowDropDownLine } from 'react-icons/ri'
export default function Searchbar() {
const url = new URL(window.location.href)
let sort = url.searchParams.get('sort')
const [from , setFrom] = useState(url.searchParams.get('from') || '')
const [to , setTo] = useState(url.searchParams.get('to') || '')
const searchHandler = e => {
  url.searchParams.set('search' , document.getElementById('searchInput').value )
window.location.assign(url.toString())

    
  }
  const sortHandler = pose => {
    if(url.searchParams.get('sort')?.startsWith(pose)){
      url.searchParams.delete('sort')
      return window.location.assign(url.toString())
    }
    url.searchParams.set('sort' , pose)
    window.location.assign(url.toString())
  }

  const swapHandler = pose => {
if(url.searchParams.get('sort') == `${pose}-D`){
  url.searchParams.set('sort' , pose)
      return window.location.assign(url.toString())
}
if(url.searchParams.get('sort') == pose){
  url.searchParams.set('sort' , `${pose}-D`)
      return window.location.assign(url.toString())
}
url.searchParams.set('sort' , pose)
return window.location.assign(url.toString())
  }

  const fromHandler = e => {
if(/^[0-9\.]*$/g.test(e.target.value)){
  setFrom(e.target.value)
}
  }
  const toHandler = e => {
    if(/^[0-9\.]*$/g.test(e.target.value)){
      setTo(e.target.value)
    }

  }
    const submitRangeHandler = e => {
if(from) url.searchParams.set('from' , from)
if(to) url.searchParams.set('to' , to)
window.location.assign(url.toString())
    }
  return (
    <div className='SearchSection' > 
            <div className="price-range">
        <p>price range:</p>
        <input onChange={fromHandler} className='input' value={from} id='toInput' placeholder='from:' />
        <input  onChange={toHandler}className='input'value={to} placeholder='to:' id='fromInput' />
        <button className='submit-button' onClick={submitRangeHandler}>submit</button>
        </div>
        <div className='searchBar'>
            <input type="text" placeholder='search books or authors... ' id='searchInput'/>
      <FaMagnifyingGlass onClick={searchHandler} />

        </div>
        <div className="sort">
          <p>sort by : </p>
          <div className={sort?.startsWith('alphabet') && 'bold'}>
            <p onClick={() => sortHandler('alphabet')}>alphabet</p>
<RiArrowDropDownLine onClick={() => swapHandler('alphabet')} className={sort == 'alphabet-D' && 'rotate'}/>
            
          </div>
          <div className={sort?.startsWith('price') && 'bold'} >
            <p onClick={() => sortHandler('price')}>price</p>
            <RiArrowDropDownLine onClick={() => swapHandler('price')}  className={sort == 'price-D' && 'rotate'}/>

          </div>
        </div>

    </div>
  )
}
