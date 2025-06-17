import { useEffect } from "react";
import { useState } from "react";
import Country2 from "./Country2/Country2";
import './country.css'

const Country = () => {
    // usestste kora hoyese
    const [country, setCountry] = useState([]);
    const [visitedCountrys, setVisitedCountrys] = useState([])
    const [visitedflags, setVisitedFlags] = useState([])

    // useeffect kora hoyese
    // useEffect(() => {
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then(res => res.json())
    //         .then(data => setCountry(data))
    // }, [])


// nicher moto kore usestt krle okhane kono eero asleo website a baki gula dkhabe 

  useEffect(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        setCountry(data);
      } else {
        console.error("Unexpected data:", data);
        setCountry([]);
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      setCountry([]); // যেন error আসলে empty array রাখে
    });
}, []);



    const hendlevisitedcountrys = country => {
        console.log('add to your visited country');
        const newVisitesCountry = [...visitedCountrys, country]
        setVisitedCountrys(newVisitesCountry);
    }
    const hendlevisitedFlags = flag => {
        console.log('flag adding');
        const newvisitedflags = [...visitedflags, flag]
        setVisitedFlags(newvisitedflags)
    }

    return (
        <div>
            <h2>All Country : {country.length}</h2>
            {/* visited countrys */}
            <div>
                <h4>visited countrys : {visitedCountrys.length}</h4>
                <ul>
                    {
                        visitedCountrys.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {/*  key={idx} aita dile worrny dei na r */}
                {
                    visitedflags.map((flag,idx)=><img key={idx} src={flag}></img>)
                }

            </div>
            {/* daynamic map kora hoyese */}
            {/* displays countrys */}
            <div className="container-country">
                {
                    country.map(country => <Country2
                        key={country.cca3}
                        hendlevisitedcountrys={hendlevisitedcountrys}
                        hendlevisitedFlags={hendlevisitedFlags}
                        data={country}></Country2>)
                }
            </div>
        </div>
    );
};

export default Country;