import React from 'react'
import Menu from './menuComponent/Menu'
import Product from './productComponent/Product'
import MasterService from './services/MasterService'
import * as actions from './appredux/actions/MasterAction'
import Store from './appredux/store'
class App extends React.Component
{
  componentDidMount()
  {
    MasterService.getCategories()
    .then(response=>response.json())
    .then(data=>
      {
        //console.log(data)
        Store.dispatch({...actions.ACTION_LOAD_CATEGORIES,payload:{
                    categories : data
        }})

        MasterService.getBrands()
        .then(response=>response.json())
        .then(data=>{
            //console.log(data)
             Store.dispatch({...actions.ACTION_LOAD_BRANDS,payload:{
                        brands : data
                    }})
                    MasterService.getProducts()
                    .then(response=>response.json())
                    .then(data=>{
                        //console.log(data)
                        Store.dispatch({...actions.ACTION_LOAD_PRODUCTS,payload:{
                                    products : data
                                }})
                    })
        })
    }) 
  }
  render(){
    return <>
        <Menu/>
        <Product/>
    </>
  }
}

export default App