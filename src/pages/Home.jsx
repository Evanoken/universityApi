import { useState, useEffect } from 'react';
import { FaSearchengin } from 'react-icons/fa';
import './Home.css'

function Home() {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);
  const [showList, setShowList] = useState();

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
        const data = await response.json();
        setUniversities(data);
        setShowList(true);
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    if (country) {
      fetchUniversities();
    }
  }, [country]);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="card-container">
      <form>
        <label htmlFor="search-input">Enter your country to see universities:</label> <br />
        <input type="text" id="search-input" placeholder="Search for universities" value={country} onChange={handleChange}/>
        <button type="button" onClick={setUniversities}><FaSearchengin /></button>
      </form>
<br /><br />
<div className="container">
      {showList && universities.length > 0 ? (
        <ul>
          {universities.map((university) => (
            <li key={university.name}>
              {`Name: ${university.name}`}
              <br />
              {`Web Page: ${university.web_pages[0]}`}
              <br />
              {`Country: ${university.country}`}
              <br />
              {`Domain: ${university.domains[0]}`}
              <br />
              <br />
            </li>
          ))}
        </ul>
      ) : showList && <p>No universities found.</p>}
      </div>
    </div>
  );
}

export default Home;