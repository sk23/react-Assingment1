function WorkCards(props){
    console.log(props)
return(
  <div className="w-55 ">
    <div className=" flex flex-row  justify-center">
      <img src={props.img} alt="Food" class=" h-30 object-cover"/>
    </div>
    <div className=" flex flex-row  justify-center">
      <h3 className="text-sm font-semibold text-gray-800">{props.title}</h3>
          </div>
          <p className=" font-semibold inline-block mt-2 rounded text-xs text-center ">
       {props.para}
      </p>

  </div>
    


)


}
export default WorkCards