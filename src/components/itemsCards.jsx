function ItemsCards(props){
    console.log(props)
return(
  <div className="bg-white rounded-xl overflow-hidden shadow-md w-37  ">
    <div className="relative">
      <img src={props.image} alt="Food" class="w-full h-40 object-cover"/>
    </div>
    <div className="p-1 ">
      <h3 className="text-sm font-semibold text-gray-800">{props.title}</h3>
      <div className="flex flex-row items-center text-xs ">

       <span className="text-orange-600 font-semibold text-xs">{props.para}</span>
       <span><img className="w-2" src="lLocation.png" alt="" />
        </span>
           
      </div>
      <p className="text-xs">${props.price}</p>
      <button className="flex flex-row  items-center justify-center rounded-sm text-xs w-full h-8 bg-orange-500 font-bold">Oder Now</button>
    </div>
  </div>
    


)


}
export default ItemsCards