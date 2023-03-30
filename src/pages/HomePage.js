import React, { useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo';
import axios from 'axios';
import Card from '../components/Card';

const HomePage = () => {
    // ces variables pourraient changer d'état
    let [countries, setCountries]=useState([]);
    let [searchInput, setSearchInput]=useState("");
    let [rangeInput, setRangeInput]=useState(12);
    const rangeValue = useRef();
    
    // get les countries ici
    // https://restcountries.com/v3.1/all
    
    const fetchCountries=()=>{
        axios
        .get("https://restcountries.com/v3.1/all")
        .then((response)=>setCountries(response.data));
    }
    // userEffect sera lancer à l'appel du composant
    // appel la fonction 
    useEffect(fetchCountries,[]);
    
    
    return (
        <div className="app">
            <header>
                <Logo/>
                <h2>Country App</h2>
                
                <input 
                    type="text" 
                    id="searchInput" 
                    onChange={(e)=>setSearchInput(e.target.value)}
                    placeholder="Tappez le nom du pays"
                />
                <span>Nombre de pays affichés : {rangeInput}</span>
                <input 
                    type="range" 
                    id="rangeInput" 
                    defaultValue={12} 
                    onChange={(e)=>setRangeInput(e.target.value)}
                    min="0" 
                    max="150" 
                />
                
            </header>
            <section className="flags-container">
                { countries
                    .slice(0,rangeInput)
                    .filter((country)=>
                        country.translations.fra.common
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                    )
                    .map((country,index)=>(
                        <Card key={index} c={country}/>
                    
                ))} 
                
                
                
            </section>
        </div>

    );
};

export default HomePage;