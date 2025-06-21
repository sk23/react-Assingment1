
import './App.css'
import ProductCards from './components/productCards'
import WorkCards from './components/workCards'
import ItemsCards from './components/itemsCards'
import FeaturedCards from './components/FeaturedCards'
import ByfoodCards from './components/ByfoodCards'
import { useState } from 'react'
function App() {
 const[isHidden, setIsHidden] = useState(true)
 const[seleted, setSeleted] = useState("delivery")



 
 function toggleInput(){
  setIsHidden(!isHidden)
 }


  const Itams = [
    {
      id: 1,
      title: "Cheese Burger",
      para: "Burger Arena",
      price: 3.88,
      image: "Cheese Burger 40.png"
    },
    {
      id: 2,
      title: "Toffe's Cake",
      para: "Top Stick",
      ptice: 4.00,
      image: "Toff's Cake 40.png",
    },
    {
      id: 3,
      title: "Dancake",
      para: "Cake World",
      price: 1.99,
      image: "Dancake 40.png",
    },
    {
      id: 4,
      title: "Crispy Sandwitch",
      para: "Fastfood Dine",
      price: 3.00,
      image: "Crispy Sandwitch 40.png",
    },
    {
      id: 5,
      title: "Thai Soup",
      para: "Foody man",
      price: 2.79,
      image: "Thai Soup 40.png",
    },
  ]
  const Featured = [
    {
      id: 1,
      title: "Foodworld",
      rating: 46,
      para: "Opans tomorrow",
      image1: "FoodworldImg.png",
      image2: "FImage.png",
      offer: 20,
    },
    {
      id: 2,
      title: "Pizzahub",
      rating: 40,
      para: "Opans tomorrow",
      image1: "Image (5).png",
      image2: "Restaruant Logo2.png",
      offer: 15,
    },
    {
      id: 3,
      title: "Donuts hut",
      rating: 20,
      para: "Opans Now",
      image1: "Image (4).png",
      image2: "Restaruant Logo3.png",
      offer: 10,
    },
    {
      id: 4,
      title: "Donuts hut",
      rating: 50,
      para: "Opans Now",
      image1: "Image (6).png",
      image2: "Restaruant Logo4.png",
      offer: 15,
    },
    {
      id: 5,
      title: "Foodworld",
      rating: 46,
      para: "Opans tomorrow",
    
      image2: "Logo5.png",
      offer: 10,
    },
    {
      id: 6,
      title: "Kuakata Fried Chicken",
      rating: 53,
      para: "Opans Now",
      image1: "Image (8).png",
      image2: "Logo6.png",
      offer: 25,
    },
    {
      id: 7,
      title: "Red Square",
      rating: 45,
      para: "Opans Now",
      image1: "Image (9).png",
      image2: "Logo7.png",
      offer: 10,
    },
    {
      id: 8,
      title: "Foodworld",
      rating: 35,
      para: "Opans Now",
      image1: "Image (10).png",
      image2: "Logo8.png",
      offer: 10,
    },
  ]
  const Byfood = [
    {
      id: 1,
      title: "Pizza",
      image: "Image (11).png",
    },
    {
      id: 2,
      title: "Burger",
      image: "Image (12).png",
    },
    {
      id: 3,
      title: "Noodles",
      image: "Image (13).png",
    },
    {
      id: 4,
      title: "Sub-Sandiwch",
      image: "Image (14).png",
    },
    {
      id: 5,
      title: "Chowmein",
      image: "Image (15).png",
    },
    {
      id: 6,
      title: "Steak",
      image: "Image (16).png",
    },
  ]

  return (
    <>
      <header className='bg-red- h-15 flex flex-row  items-center' >
        <div className='container mx-auto flex flex-row justify-between items-center px-30 realative'>
          <a className='flex flex-row items-center' href="https://react-assingment1-smdz-rbosdej8j-saraths-projects-7989288e.vercel.app/">
            < img className='pr-2 w-6' src="Mask Group.png" alt="" />
            <span className='text-red-500 font-black'>food</span>
            <span className='text-yellow-500 font-black'>WaGon</span>
          </a>
          <span className='flex flex-row items-center text-xs gap-1 '>
            <span className=' font-bold ' >
              Deliver to:
            </span>
            <a href="#">
              <img className='w-2' src="lLocation.png" alt="" />
            </a>
            <span>
              Current Location <span className='font-bold'> Mohammadpur Bus Stand, Dhaka</span>
            </span>
          </span>
          <span className=' flex flex-row items-center gap-2 realative'>
            <span onClick={toggleInput} className='cursor-pointer' ><img className='w-3' src="Search.png" alt="" /></span>
            <span className='absolute left-275'>
            <input type="text" className={isHidden ? "hidden" : ""} placeholder='search' />

            </span>
            <span className='text-xs font-bold'>Search Food</span>
            <button className='bg-white shadow-[0_4px_5px_0_yellow] flex flex-row items-center justify-center w-20 h-8 text-xs gap-2 rounded-sm'>
              <span><img className='w-3' src="login.png" alt="" /></span>Login
            </button>
          </span>

        </div>
      </header>
      <main className='realative'>
        <div className='relative flex flex-row justify-between items-center  '>
          <img src="backgroundYellow.png" alt="" />
          <div className='absolute top-21 px-30 '>
            <h1 class="text-5xl font-bold mb-2 text-white">Are you starving?!</h1>
            <p>Within a few clicks, find meals that are accessible near you</p>
            <div>
              <section className='w-125 h-12 bg-white flex flex-row items-center px-4 rounded-sm ' >
                <button onClick={() =>setSeleted("delivery")} className={`flex flex-row items-center justify-center rounded-sm text-xs w-25 h-8 gap-2 ${seleted ==="delivery" ? "bg-red-100":""}`}>
                  <img src="IconBick.png" alt="" />Delivery</button>
                <button onClick={() =>setSeleted("pickup")} className={`flex flex-row items-center justify-center rounded-sm text-xs w-25 h-8 gap-2 ${seleted === "pickup" ? "bg-red-100" : ""}`}>
                  <img src="IconPickup (1).png" alt="" />Pickup</button>
              </section>
              <section className='w-125 h-15 bg-white flex flex-row items-center px-4 gap-2 rounded-sm border-t-1 ' >
                <img className='w-4 absolute ps-2' src="LocationIconRed (2).png" alt="" /><input className='bg-red-100 w-90 ps-6' type="text" placeholder='Enter Your Address' />
                <button className='flex flex-row  items-center justify-center rounded-sm text-xs w-25 h-8 gap-2 bg-orange-500 font-bold ' ><img className='w-3' src="IconSearch wait.png" alt="" />Find Food</button>

              </section>


            </div>

          </div>
        </div>
        <div className='absolute top-41  right-30 mt-8 lg:mt-0 lg:ml-10 '>
          <img className='w-full hidden lg:block' src="ImageFood (1).png" alt="" />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-6 px-70 ">

          < ProductCards title="Greys Vage" offer="15" days="6 Days Remaining" img="foodImg1.png" />
          < ProductCards title="Greys Vage" offer="10" days="6 Days Remaining" img="foodImg2 (1).png" />
          < ProductCards title="Greys Vage" offer="25" days="7 Days Remaining" img="foodimg3.png" />
          < ProductCards title="Greys Vage" offer="20" days="8 Days Remaining" img="foodimg4.png" />

        </div>
        <div className="bg-yellow-50">
          <h1 className='flex justify-center items-center text-2xl font-bold text-orange-500'>How does it work</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-6 px-70 ">

            < WorkCards title="Select location" para="Choose the location where your food will be delivered." img="Map Marker.png" />
            < WorkCards title="Choose order" para="Check over hundreds of menus to pick your favorite food" img="menu 2.png" />
            < WorkCards title="Pay advanced" para="It's quick, safe, and simple. Select several methods of payment" img="Invoice.png" />
            < WorkCards title="Enjoy meals" para="Food is made and delivered directly to your home." img="Icons.png" />


          </div>
        </div>
        <div>
          <h1 className='flex justify-center items-center font-bold text-2xl '>Popular items</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 p-6 px-45 ">
            <div className=' flex items-center justify-center'>
        <button className='bg-yellow-500 flex items-center justify-center w-12 h-12 text-xs gap-2 rounded-3xl ' >< img className='h-5' src="LeftIcon.png" alt="" /></button>

            </div>
            {
              Itams.map((Itams) => (
                <ItemsCards
                  key={Itams.id}
                  title={Itams.title}
                  price={Itams.price}
                  image={Itams.image}
                  para={Itams.para} />

              ))
            }

            <div className=' flex items-center justify-center'>
              <button className='bg-yellow-500 flex items-center justify-center w-12 h-12 text-xs gap-2 rounded-3xl ' >< img className='h-5' src="RightIcon .png" alt="" /></button>

            </div>

          </div>
        </div>
        <h1 className='flex justify-center items-center text-2xl font-bold mb-2'>Featured Restaurants</h1>
        <div className="grid grid-cols-4  grid-rows-2 gap-x-1 gap-y-9 p-6 px-80">

          {
            Featured.map((Featured) => (
              < FeaturedCards
                key={Featured.id}
                title={Featured.title}
                rating={Featured.rating}
                para={Featured.para}
                image1={Featured.image1}
                image2={Featured.image2}
                offer={Featured.offer}


              />

            ))
          }
        </div>
        <div className=' flex items-center justify-center'>
          <button className='bg-yellow-500 flex items-center justify-center w-30 h-9 text-xs gap-2 rounded-2xl font-bold ' >View All< img className='h-3' src="RightIcon .png" alt="" /></button>

        </div>
        <div className="bg-yellow-50">
          <div className='flex flex-row justify-between px-70 py-10 '>
            <section className='py-2'>
              <h1 className=' text-2xl font-bold'>Search by Food</h1>
            </section>
            <section className='flex flex-row justify-between gap-3'>
              <span className='py-5 text-yellow-500 text-xs'>View All &gt; </span>
              <div className=' flex items-center justify-center'>
                <button className='bg-yellow-500 flex items-center justify-center w-10 h-10 text-xs gap-2 rounded-3xl ' >< img className='h-4' src="LeftIcon.png" alt="" /></button>
              </div>
              <div className=' flex items-center justify-center'>
                <button className='bg-yellow-500 flex items-center justify-center w-10 h-10 text-xs gap-2 rounded-3xl ' >< img className='h-4' src="RightIcon .png" alt="" /></button>

              </div>
            </section>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 p-6 px-70 ">

            {
              Byfood.map((Byfood) => (
                <ByfoodCards

                  key={Byfood.id}
                  title={Byfood.title}
                  image={Byfood.image}


                />
              ))
            }

          </div>
        </div>
        <div className='bg-yellow-100 px-100 h-150  py-15 relative '>
          <div class="  bg-white rounded-4xl shadow-md w-[800px] p-15 h-50 ">
            <div class="flex justify-between">
              <span className=' flex items-center space-x-3 border-r border-black pr-3 '>
                <img className='h-20' src="Icon (7).png" alt="" />
                <span className='text-red-700 text-2xl  font-semibold '>Daily <br /> Discounts</span>

              </span>
              <span className=' flex items-center space-x-2 border-r border-black pr-3 ' >
                <img className='h-20' src="Icon (8).png" alt="" />
                <span className='text-red-700 text-2xl  font-semibold '> Live  <br /> Tracing</span>


              </span>
              <span className=' flex items-center space-x-2'>
                < img className='h-20' src="Icon (9).png" alt="" />
                <span className='text-red-700 text-2xl  font-semibold '>Quick <br /> Delivery</span>

              </span>
            </div>
          </div>
          <div className='realative absolute bottom-0 left-0 right-0 bg-orange-500 h-10'> </div>


          <section className='flex justify-between'>
            <div className="w-[200px] h-[340px] overflow-hidden py-25 realative ">
              <div className='w-[200px] h-[250px] overflow-hidden absolute right-253 bottom-0'>
                <img className='rounded-t-lg' src="Order Screen.png " class="w-full" />

              </div>

              <div className='w-[200px] h-[301px] overflow-hidden absolute right-208 bottom-0'>
                <img className='rounded-t-lg w-50 ' src="iPhone.png" class="w-full" />
              </div>
            </div>
          </section>
          <div className=' absolute right-80 top-80'>
            <section>
              <h1 className='text-5xl'>Install the app</h1>

            </section>
            <section>
              <section>
                <p className='text-sm ' >It's never been easier to order food. <br /> Look for the finest discounts and you'll be lost in a world of <br /> delectable food.</p>

              </section>

              <section className='flex justify-between px-5 pl-1'>
                <img className='w-50 ' src="Google Play Download.png" alt="" />
                <img className='w-50 ' src="App Store Download Button.png" alt="" />
              </section>
            </section>



          </div>




        </div>

        <div className="grid  gap-15 py-15 p-6 px-70 ">

          <div className="bg-white rounded-3xl overflow-hidden shadow-md w-250 h-[300px] overflow-hidden flex justify-between">

            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Best deals <span class="text-[#FFAE00]">Crispy <br /> Sandwiches</span>
              </h2>
              <p className="text-gray-600 mt-4">
                Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.
              </p>
              <button className="mt-6 bg-[#FFAE00] hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
                PROCEED TO ORDER
              </button>
            </div>
            <div className='w-2/3 '>
              <img src="Image (17).png" alt="Food" class="w-full object-cover" />
            </div>



          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-md w-250 h-[300px] overflow-hidden flex justify-between">

            <div className='w-2/3 '>
              <img src="Right.png" alt="Food" class="w-full object-cover" />
            </div>

            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Celebrate  parties with  <span class="text-[#FFAE00]">Fried Chickens</span>
              </h2>
              <p className="text-gray-600 mt-4">
                Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out
                best deals for fried chicken.
              </p>
              <button className="mt-6 bg-[#FFAE00] hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
                PROCEED TO ORDER
              </button>
            </div>




          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-md w-250 h-[300px] overflow-hidden flex justify-between">

            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Wanna eat hot & spicy <span class="text-[#FFAE00]">Crispy <br /> Pizza?</span>
              </h2>
              <p className="text-gray-600 mt-4">
                Pair up with a friend and enjoy the
                hot and crispy pizza pops. Try it
                with the best deals.
              </p>
              <button className="mt-6 bg-[#FFAE00] hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
                PROCEED TO ORDER
              </button>
            </div>
            <div className='w-2/3 '>
              <img src="Image (18).png" alt="Food" class="w-full object-cover" />
            </div>



          </div>
        </div>

        <div className='relative  '>
          <img src="Image (19).png" alt="" />
          <div className='absolute right-170 top-15 space-x-2  '>
            <h1 className='text-center text-3xl font-extrabold'>Are you ready to order with <br /> the best deals?</h1>

          </div>
          <div className='absolute right-195 top-45'>
            <button className="mt-6 bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
              PROCEED TO ORDER &gt;
            </button>
          </div>

        </div>




      </main>
     <footer className="bg-black text-white py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-lg mb-6">Our top cities</h3>
    <div className="grid grid-cols-5 text-xs gap-y-3">
      {[
        "San Francisco", "Los Angeles", "New York City", "Chicago", "Miami",
        "Orange County", "New Mexico", "San Diego", "Seattle", "Las Vegas",
        "Albuquerque", "East Bay", "Portland", "Charlotte", "Sacramento",
        "Sacramento", "Long Beach", "Nashville", "Oklahoma City", "New Orleans"
      ].map(city => (
        <a href="#" key={city}>{city}</a>
      ))}
    </div>
  </div>
         <div className="border-t border-gray-700 my-10" />
  <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between gap-10">
    <div className="grid grid-cols-3 gap-12 text-sm">
      <div>
        <h3 className="font-semibold mb-3">Company</h3>
        <ul className="space-y-2 text-xs">
          <li><a href="#">About us</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Contact</h3>
        <ul className="space-y-2 text-xs">
          <li><a href="#">Help & Support</a></li>
          <li><a href="#">Partner with us</a></li>
          <li><a href="#">Ride with us</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Legal</h3>
        <ul className="space-y-2 text-xs">
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Refund & Cancellation</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col gap-4 text-sm">
      <h3 className="font-bold">FOLLOW US</h3>
      <div className="flex gap-4">
        <img src="1.png" alt="Icon1" className="w-5" />
        <img src="2.png" alt="Icon2" className="w-5" />
        <img src="3.png" alt="Icon3" className="w-5" />
      </div>

      <p className="text-xs mt-4">Receive exclusive offers in your mailbox</p>
      <div className="relative">
        <input type="email" placeholder="Enter your email"
          className="w-full bg-gray-600 placeholder-white text-sm py-2 px-4 rounded" />
        <img src="envelope.png" alt="" className="w-4 absolute top-2.5 right-3" />
      </div>

      <button className="mt-4 bg-yellow-500 text-white font-semibold py-2 rounded">
        Subscribe
      </button>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-10 pt-6 px-4 flex flex-col md:flex-row justify-between max-w-6xl mx-auto text-xs">
    <div className="flex items-center gap-2">
      <p>All rights reserved</p>
      <img src="Symbol.png" alt="©" className="w-4 h-4" />
      <p>Your Company, 2021</p>
    </div>
    <div className="flex items-center gap-2 mt-3 md:mt-0">
      <p>Made with 💛</p>
      <p>by Themewagon</p>
    </div>
  </div>











      </footer>

    </>
  )
}

export default App
