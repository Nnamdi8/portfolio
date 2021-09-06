import React from 'react'
import { useState } from 'react';
import Categories from '../Components/Categories';
import Title from '../Components/Title';
import MenuItems from '../Components/MenuItems';
import portfolios from '../Components/Allportfolios';
import Allportfolios from '../Components/Allportfolios';


const AllCategories = ['All',...new Set(portfolios.map(item=>item.category))];

function PortfoliosPage() {
    const [categories,setCategories] = useState(AllCategories);
    const [menuItems,setMenuItems] = useState(portfolios);
  

    const filter= (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData= portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }
    return (
        <div className="PortfolioPage">
           <div className="title">
               <Title title={'Portfolios'} span={'portfolios'} />
           </div>
           <div className="portfolios-data">
               <Categories filter={filter} categories={categories}/>
               <MenuItems menuItem={menuItems}/>
           </div>
        </div>
    )
}

export default PortfoliosPage;
