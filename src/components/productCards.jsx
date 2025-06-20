function ProductCards(props){
    console.log(props)
return(
  <div className="bg-white rounded-xl overflow-hidden shadow-md w-55 ">
    <div className="relative">
      <img src={props.img} alt="Food" class="w-full h-40 object-cover"/>
      <div className="absolute bottom-0 left- bg-yellow-400 text-white px-2 py-1 rounded-tr-lg text-2xl font-bold w-22 h-11">
        {props.offer}% <span className="text-xs font-normal">Off</span>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold text-gray-800">{props.title}</h3>
      <p className="text-orange-600 font-semibold bg-orange-100 inline-block mt-2 px-2 py-1 rounded text-xs">
       {props.days}
      </p>
    </div>
  </div>
    


)


}
export default ProductCards