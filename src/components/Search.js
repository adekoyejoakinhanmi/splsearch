import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Search = props => {
  const [searchText, setSearchText] = useState('');
  const {
    searchImages
  } = props;
  const handleChange = (e) => setSearchText(e.target.value);
  const clearSearch = () => setSearchText('');
  const handleSubmit = (e) => {
    e.preventDefault();
    searchImages(searchText.trim())
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="input-container"
    >
      <span className="search-icon svg-icon">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{enableDackground: 'new 0 0 56.966 56.966'}} xmlSpace="preserve" fill="currentColor">
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
        </svg>
      </span>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
      />
      <button onClick={clearSearch} type="button" className="icon-btn">
        <span className="svg-icon">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 51.976 51.976" style={{ enableBackground: 'new 0 0 51.976 51.976' }} xmlSpace="preserve" fill="currentColor">
            <path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"/>
          </svg>
        </span>
      </button>
    </form>
  )
}

Search.propTypes = {
  searchImages: PropTypes.func.isRequired,
}

export default Search
