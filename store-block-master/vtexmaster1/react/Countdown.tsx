import React from 'react'
interface CountdownProps { 
  productType: string
}
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ productType }) => {
  let breadcrumb = document.getElementsByClassName("vtex-breadcrumb-1-x-link").length - 1
  let getClass = "vtex-breadcrumb-1-x-link--"+breadcrumb
  let requiredHref = document.getElementsByClassName(getClass)[0].getAttribute("href")
  console.log("abcd==================",productType, breadcrumb, requiredHref?.split("/"))
   let requiredArray = requiredHref?.split("/")
   if(requiredArray){
    if(requiredArray.indexOf("Shoes")> -1 || requiredArray.indexOf("shoes") > -1){
      return <div> 
        <img src="https://d29za44huniau5.cloudfront.net/uploads/2018/5/small-size-chart.jpg" style={{width:'250px'}}></img>
      </div>
     }
    if(requiredArray.indexOf("Bags")> -1 || requiredArray.indexOf("bags") > -1){
      return <div>
         <img src="https://www.toinoabel.com/s/Size-Chart-CM-wor5.jpg" style={{width:'500px'}}></img>
      </div>
    }
  }
  return <div></div>
}
Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    productType:{
      title: "Category",
      description: "Type of the product",
      type: "string",
      default: null
    }
  },
}
export default Countdown