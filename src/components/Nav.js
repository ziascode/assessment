import React, {useState, useEffect} from "react";

function Nav({tabTitle, id, setFilteredCases, activeTab, setActiveTab, cases}) {


  let selectCategory = () => {
      if(id == 'arts-culture'){
        setActiveTab('arts-culture');
      }else if(id == 'non-profits'){
        setActiveTab('non-profits')
      }else if(id == 'publishing-higher-education'){
        setActiveTab('publishing-higher-education')
      }else if(id == 'sports'){
        setActiveTab('sports')
      }else if(id == 'wellness'){
        setActiveTab('wellness')
      }return
  }

  useEffect(() => {
    const filter = cases.filter((item) => {
      return item.categories[0].slug.includes(activeTab);
    });
    setFilteredCases(filter);
  }, [activeTab])

console.log(activeTab);



  return (
    <div className="tabs rounded-lg md:rounded-none bg-emerald-500 hover:bg-[#181616]  md:bg-[#181818] text-emerald-900 hover:text-white md:text-white flex items-center transition transform duration-300 ease-out">
        <button onClick={selectCategory}className='px-5 py-1'>{tabTitle}</button>
    </div>
  )
}

export default Nav