import React from 'react'
import ho from './Svg/How3.svg'
import rfi from './Svg/rf.svg'
import co from './Svg/con.svg'
import aa from './Svg/aap.svg'
import coo from './Svg/conn.svg'

const How3 = () => {
    return (
        <div>

            <div class="container px-5  mx-auto">
                <div class="text-center mb-20">
                <h1 class="sm:text-3xl text-5xl font-black title-font text-gray-900 mb-4">HOW IT WORKS</h1>

                    {/* <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4 ">HOW IT WORKS</h1> */}
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Its easier than you think. Just follow the steps given below</p>
                    <div class="flex mt-6 justify-center">
                        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>


    

<div class="flex flex-wrap py-3 text-center justify-evenly ">
<div class=" py-4 mx-6 md:w-1/6 sm:w-1/2 w-full shadow-xl rounded-2xl hover:scale-105">
                           
                           <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                           <h2 class="title-font font-medium text-3xl text-gray-900">
                             <img class="p-5" src={coo} />
                            </h2> 
                           </div>
                           <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Connect</h2>  
                           
                       </div>

                        <div class=" py-4 mx-6 md:w-1/6 sm:w-1/2 w-full shadow-xl rounded-2xl hover:scale-105">
                           
                            <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <h2 class="title-font font-medium text-3xl text-gray-900">
                            <img class="p-8" src={aa} />
                                </h2> 
                            </div>
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">analyse and push content</h2>  
                            
                        </div>

                        <div class=" py-4 mx-6 md:w-1/6 sm:w-1/2 w-full shadow-xl rounded-2xl hover:scale-105">
                           
                            <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <h2 class="title-font font-medium text-3xl text-gray-900">
                            <img class="p-5" src={co} />
                                </h2> 
                            </div>
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">engage</h2>  
                            
                        </div>

                        
                        <div class="mx-6 py-4 md:w-1/6 sm:w-1/2 w-full shadow-xl rounded-2xl hover:scale-105">
                            <div class="w-40 h-40 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <h2 class="title-font font-medium text-3xl text-gray-900">
                            <img class="p-5" src={rfi} />
                                </h2>      
                            </div>
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">raise fund</h2>
                        </div>

                        
                        


                        
                    </div>
            </div>
            <img class=" -my-10 " src={ho} />
        </div>
    )
}

export default How3
