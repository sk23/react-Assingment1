function ByfoodCards(props){
    console.log(props)
return(
  <div className="w-30  ">
    <div className=" flex flex-row  justify-center ">
      <img className="w-30 h-30 rounded-full object-cover" src={props.image} alt="Food"/>
    </div>
    <div className=" flex flex-row  justify-center">
      <h3 className="text-sm font-semibold text-gray-800 pt-2 pr-1">{props.title} </h3>
          </div>

  </div>
    


)


}
export default ByfoodCards