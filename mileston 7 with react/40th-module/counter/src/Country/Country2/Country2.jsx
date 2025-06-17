import { useState } from 'react';
import './country2.css'
const Country2 = ({ data, hendlevisitedcountrys, hendlevisitedFlags }) => {
    // destracture kora hoyese
    const { name, flags, region, capital, cca3 } = data
    console.log(data);

    // btn set korar jonno
    const [visited, setvisited] = useState(false)
    const handlevisited = () => {
        setvisited(!visited)
    }

    return (
        // btn a click krle bg change hbe class nameer vitor a ja ja ase segula
        <div className={`border ${visited && 'visited'}`}>
            {/* conditionalcss use h2 er modhe  */}
            <h2 style={{ color: visited ? 'purple' : 'white' }}>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <h1>region : {region}</h1>
            <h2>capital : {capital}</h2>
            <p><small>code : {cca3}</small></p>
            <button onClick={() => hendlevisitedcountrys(data)}>Mark visited</button><br />
            <button onClick={()=>hendlevisitedFlags(data.flags.png)}>add flags</button><br />
            <button onClick={handlevisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? ' i have visited this country' : "i want to visit this country"}

        </div>
    );
};

export default Country2;


