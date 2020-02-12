import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm=({onInputChange,onSubmit})=>{
    return(
        <div>
           <p className=' white f3'>{'This magic brain will detect faces in your pictures. Give it a try!'}</p>
           <div className='center'>
               <div className='pa4 br3 shadow-5 center form'>
                  <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                  <button className='w-30 grow link f4 ph3 pv2 dib white bg-blue' onClick={onSubmit}>Detect</button>
               </div>
           </div>
        </div>
    )
}

export default ImageLinkForm;