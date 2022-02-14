import Card from "./components/Card";
import Nav from "./components/Nav";
import axios from 'axios'
import React, {useState, useEffect} from "react";
import asset1 from './assets/asset1.svg';
import asset2 from './assets/asset2.svg';
import asset3 from './assets/asset3.svg';
import {motion, AnimatePresence} from 'framer-motion';



function App() {

  // States & Data Storage
  const [cases, setCases] = useState([]);  //Stores data from case studies endpoint
  const [categories, setCategories] = useState([]); //Stores data from category endpoint  
  const [filteredCases, setFilteredCases] = useState([]); //Stores filtere cases 
  const [activeTab, setActiveTab] = useState([]);

  

  useEffect(() => {
    getDataFromApi();
  }, []);



  const getDataFromApi = async () => {
    // Case Studies data
    axios.get('https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies')
      .then(res => {
        setCases(res.data["case-studies"]);
        setFilteredCases(res.data["case-studies"]);
        console.log(res);
      }).catch(err => {
        console.log(`Error: ${err}`);
      })
      
    // Categories data
    axios.get('https://plankdesign.com/wp-json/plank/v1/fed-test/categories')
    .then(res => {
      console.log(res.data.categories);
      setCategories(res.data.categories);
    })
  }

  
  console.log(cases);
  console.log(categories);
  console.log(filteredCases);

  



  return (
    <div>
      
      {/* Top Background Asset*/}
      <div className="relative"><img className="absolute w-52 sm:w-72 md:w-auto -top-20 right-0" src={asset2} alt="" /></div>

      <div className="App max-w-[1280px] mx-auto px-8 sm:px-16 text-gray-100">
        <h1 className='text-5xl font-roboto font-bold tracking-widest mt-20 mb-10 '>WORK</h1>

        {/* Navigation Component*/}
        <div className="flex flex-wrap sm:flex-nowrap space-x-0 md:flex-row md:space-x-5 pb-4 mb-10 border-b-2 border-gray-100">
          <button className="tabs rounded-lg md:rounded-none bg-emerald-500 hover:bg-[#181616]  md:bg-[#181818] text-emerald-900 hover:text-white md:text-white px-5 py-1 flex items-center transition transform duration-200 ease-out" onClick={() => setFilteredCases(cases)}>All</button>
          {categories.map((item) => {
            return <Nav
                      key={item.slug}
                      id={item.slug}
                      tabTitle={item.title}
                      setCategories ={setCategories}
                      setFilteredCases={setFilteredCases}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                      cases={cases}/>
            })}
        </div>
          
          
          
        {/* Main body / Cards Component*/}
        <div className="min-h-[100vh]" id="main">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 ">
            <AnimatePresence>
            {filteredCases.map((item) => {
              return <Card
                        key={item.id}
                        title={item.title}
                        thumbnail={item.thumbnail? item.thumbnail :"https://res.cloudinary.com/dvhcociyf/image/upload/v1644711452/metas/plank1_s1ofon.jpg"}
                        link={item.link}
                        desc={item.excerpt? item.excerpt: "A Wellness Brand's Seamless Shopify Solution"}
                        category={item.categories[0].title}/>
              })} 
              </AnimatePresence>
          </motion.div>
       </div>
        
        
      </div>
      
      {/* Bottom Background Asset*/}
      <div className="relative"><img className="absolute w-52 top-12 sm:w-72 md:w-auto md:-top-24 left-0 -z-10" src={asset3} alt="" /></div>
      <div className="relative"><img className="absolute h-40 top-5 sm:h-56 md:h-72 md:-top-40 right-0 -z-10" src={asset1} alt="" /></div>

    </div>
    
  );
}

export default App;
