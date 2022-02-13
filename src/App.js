import Card from "./components/Card";
import Nav from "./components/Nav";
import axios from 'axios'
import React, {useState, useEffect} from "react";



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
    <div className="App">
      <h1 className='text-5xl'>Work</h1>

      {/* Navigation tabs*/}
      {categories.map((item) => {
        return <Nav
                  key={item.slug}
                  tabTitle={item.title}/>
      })}
      
      
      
      {/* Main body*/}
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
  );
}

export default App;
