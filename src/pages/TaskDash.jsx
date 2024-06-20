import React, { useEffect, useState } from 'react'
import Upportion from '../Componets/Upportion'
import Addtask from '../Componets/Addtask'
import { deleteTaskApi, gettaskApi } from '../services/Allapi'
import Edittask from '../Componets/Edittask'

function TaskDash() {

    const [getteask , settaskDetails]= useState("")
    
    const gettask = async()=>{
        const result = await gettaskApi()
        console.log(result.data);
        settaskDetails(result.data)
       } 

       useEffect(()=>{
        gettask()
       },[])

       
  const handleDelete = async (id)=>{
   
     const result = await deleteTaskApi (id)
     console.log(result);
     if(result.status === 200){
      gettask()
     }
     else{
      console.log(result.response.data);
     }
  }

    return (
        <>
            <Upportion />
            <div>
                <div className="container">
                    <div className="col-lg-12">
                        <h1 className='justify-content-center align-items-center mt-5'>Task Dashboard</h1>
                    </div>
                    {/* <div className="col-lg-6"></div> */}

                    <div className="">
                        <Addtask/>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-md shadow-md">
                                <thead className="bg-gray-200 sticky ">
                                    <tr>
                                        <th className="py-3 px-4 border-b border-gray-300">task</th>
                                        <th className="py-3 px-4 border-b border-gray-300">description</th>
                                        <th className="py-3 px-4 border-b border-gray-300">state</th>
                                      
                                       
                                    </tr>
                                </thead>
                               {getteask?.length>0?
                               getteask.map((item)=>(<tbody className="divide-y divide-gray-200">
                                <tr >
                            
                                    <td className="py-3 px-4 border whitespace-nowrap">
                                    {item.title}

                                    </td>
                        
                                    <td className="py-3 px-4 border whitespace-nowrap">
                                        {item.description}
                                    </td>
                                    <td className="py-3 px-4 border whitespace-nowrap">
                                        {item.state}

                                    </td>
                                    <td className="py-3 px-4 border whitespace-nowrap">
                                        <Edittask update={item}/>

                                    </td>
                                    <td className="py-3 px-4 border whitespace-nowrap">
                                    <button onClick={()=>handleDelete(item._id)} className='btn'>delete</button>
                                    </td>
                                </tr>

                            </tbody>)):<p>no data</p>}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskDash