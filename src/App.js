import Card from "./components/Card";
import Nav from "./components/Nav";
import axios from 'axios'
import React, {useState, useEffect} from "react";
import asset1 from './assets/asset1.svg';
import asset2 from './assets/asset2.svg';
import asset3 from './assets/asset3.svg';



function App() {

  useEffect(() => {
    getDataFromApi();
  }, []);

  const [cases, setCases] = useState([]);  //Stores data from case studies endpoint
  const [categories, setCategories] = useState([]); //Stores data from category endpoint  


  const getDataFromApi = () => {
    // Case Studies data
    axios.get('https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies')
      .then(res => {
        setCases(res.data["case-studies"]);
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

  return (
    <div>

      <div className="relative"><img className="absolute w-52 sm:w-72 md:w-auto -top-20 right-0" src={asset2} alt="" /></div>

      <div className="App max-w-[1280px] mx-auto px-8 sm:px-16 text-gray-100">
        <h1 className='text-5xl font-roboto font-bold tracking-widest mt-20 mb-10 '>WORK</h1>

        {/* Navigation Component*/}
        <div className="flex flex-col space-x-0 md:flex-row md:space-x-11 pb-4 mb-10 border-b-2 border-gray-100">
          {categories.map((item) => {
            return <Nav
                      key={item.slug}
                      tabTitle={item.title}/>
            })}
        </div>
          
          
          
        {/* Main body Component*/}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {cases.map((item) => {
            return <Card
                      key={item.id}
                      title={item.title}
                      thumbnail={item.thumbnail? item.thumbnail :"https://res.cloudinary.com/dvhcociyf/image/upload/v1644711452/metas/plank1_s1ofon.jpg"}
                      link={item.link}
                      desc={item.excerpt? item.excerpt: "A Wellness Brand's Seamless Shopify Solution"}
                      category={item.categories[0].title}/>
            })}
       </div>
        
      </div>

      <div className="relative"><img className="absolute w-52 top-12 sm:w-72 md:w-auto md:-top-24 left-0 -z-10" src={asset3} alt="" /></div>
      <div className="relative"><img className="absolute h-40 top-5 sm:h-56 md:h-72 md:-top-40 right-0 -z-10" src={asset1} alt="" /></div>

    </div>
    
  );
}

export default App;
