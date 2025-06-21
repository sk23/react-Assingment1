function FeaturedCards(props){
    console.log(props)
    const isOpen = props.para === "Opans Now";
return(
  <div className="bg-white rounded-xl overflow-hidden shadow-md w-55 h-67 ">
    <div className="relative">
      <img src={props.image1?props.image1:"https://www.clipartmax.com/png/middle/213-2131416_restaurant-lamb-clipart-placeholder-image-for-restaurant.png"} alt="Food" class="w-full h-40 object-cover"/>
      <span className="absolute realative bottom-28 left-30  bg-yellow-400 text-white  rounded-lg font-bold text-center py-1.5 text-xs w-20 h-7 " >
        <img className="w-3 absolute bottom-2 left-3" src="ClockIcon.png" alt="" />
        Fast</span>
      <div className="absolute realative bottom-28 left-1 bg-orange-400 text-white text-xs py-1.5 text-center rounded-lg text-xm font-bold w-25 h-7">
        <img className="w-2.5 absolute bottom-2 left-4 " src="TagIcon (6).png" alt="" />
        {props.offer}% <span className="text-xs font-normal">Off</span>
      </div>
        
    </div>
    <div className="py-2 flex items-center space-x-3">
        <img className="w-10" src={props.image2} alt="" />
        <div className="flex flex-col ">
      <h3 className="text-sm font-semibold text-gray-800">{props.title}</h3>
      <span className="text-yellow-400"> &#9733;{props.rating}</span>

        </div>
    </div >
    
      <p className={` px-6 py-1 h-8 w-40   text-sm rounded-lg ${isOpen ? "bg-green-200" : "bg-red-200"} `}>
       {isOpen ? "Opans Now" : "Opans tomorrow" }
      </p>
  </div>
    


)


}
export default FeaturedCards