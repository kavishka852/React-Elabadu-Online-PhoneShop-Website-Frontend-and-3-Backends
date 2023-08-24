import React, { useEffect, useState } from "react";

import OrderService from '../services/OrderService'



const ListOrderedProduct = () => {

const[orders,setOrders]=useState([])
useEffect(()=>{
    getAllOrders();


},[])
const getAllOrders = () => {
    OrderService.getAllOrder().then((response)  =>  {
        setOrders(response.data)
        console.log(response.data);
        }).catch(error =>{
        
        console.log(error);
        })

}

const  deleteOrder = (oId) => {
    OrderService.deleteOrder(oId).then((response) =>{
        getAllOrders();

    }).catch(error =>{
        console.log(error);
    })
     
 }
  return (
    <div className='container'>

        <h2 className='text-center'>List Orders</h2>
        <table className='table table-striped table-bordered'>
                              <thead>
                        
                                     <th> Oder Id</th>
                                    <th>Item_Code</th>
                                    <th> Price</th>
                                    <th> Qty</th>
                                    
                                    <th> Action</th>
                                   
                                    
                               
                            </thead>
                <tbody>{
                              orders.map(
                                 Order =>
                                             <tr key={Order.id}>
                                          <td> {Order.id} </td>   
                                           <td> {Order.itemCode} </td>   
                                             <td> {Order.price}</td>
                                             <td> {Order.qty}</td>
                                           
                                          
                                             <td>
                               
                                  
                                    <button className = "btn btn-danger" onClick = {() => deleteOrder(Order.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>


                       </tr>

                    )
                    
                    
                    }

                </tbody>


        </table>
    </div>
  )
}

export default ListOrderedProduct