import React from 'react'
import Card from '../Card'
import rank from './Svg/Rank1.svg'


const Rank = () => {
  return (
    <div >
     <img src={rank}/>
    <div className='bg-mycolor '> 

     <div class="container  ">
                <div class="text-center ">     
                    <h1 class="sm:text-3xl text-5xl font-black title-font text-gray-900 mb-4">CREATORS OF THE WEEK</h1>
                    <div class="flex mt-6 justify-center">
                        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                </div>
                <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
    <div class="p-4 md:w-1/3">
        <Card/>
        </div>
        <div class="p-4 md:w-1/3">
        <Card/>
        </div>
        <div class="p-4 md:w-1/3">
        <Card/>
        </div>
  
    </div>
</div>
</section>
      
      </div>
    </div>
  )
}

export default Rank
