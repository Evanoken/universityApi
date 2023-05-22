import { useState, useEffect } from 'react';
import { FaSearchengin } from 'react-icons/fa';
import './Home.css';

function Home() {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        if (country && showList) {
          const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
          const data = await response.json();
          setUniversities(data);
        } else {
          setUniversities([]);
        }
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    fetchUniversities();
  }, [country, showList]);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSearch = () => {
    setShowList(true);
  };

  const handleClear = () => {
    setCountry('');
    setUniversities([]);
    setShowList(false);
  };

  return (
    <div className="background-video">
      <video autoPlay muted loop>
        <source src="path/to/video.mp4" type="video/mp4" />
        {/* Add additional <source> elements for different video formats if needed */}
      </video>
    <div className="container">
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <label htmlFor="search-input">Enter your country to see universities:</label> <br />
        <input type="text" id="search-input" placeholder="Search for universities" value={country} onChange={handleChange}/>
        <button type="button" onClick={handleSearch}><FaSearchengin /></button>
        <button type="button" onClick={handleClear} className='clear'>Clear</button>
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
        ) : (showList && universities.length === 0) && <p>No universities found.</p>}
      </div>
    </div>
    </div>
  );
}

export default Home;
