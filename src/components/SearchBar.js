import { useState, useEffect, useRef } from "react";
import { products } from "../JSON-data/Json";
import './searchbar.css'

const SearchBar = () => {
    const [value, setValue] = useState("");
    const [showdropdownSuggestions, setShowdropdownSuggestions] = useState(false);
    const suggestions = products.filter(option => option.toLowerCase().includes(value.toLowerCase()))
    
    const searchbarRef = useRef();

    useEffect(() => {
        const handleClick = (event) => {
            if (searchbarRef.current && !searchbarRef.current.contains(event.target)) {
                setShowdropdownSuggestions(false)
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSuggestionClick = (suggetion) => {
        setValue(suggetion);
        setShowdropdownSuggestions(false);
    }

    return (
           <div className="autocomplete" ref={searchbarRef}>
            <input style={{width:'20rem',height:'2rem',marginLeft:'2.5rem'}}
                value={value}
                onChange={handleChange}
                placeholder="Search"
                onFocus={() => setShowdropdownSuggestions(true)}
            />
            {showdropdownSuggestions && (
                <ul className="suggestions">
                    {suggestions.map(suggestion => (
                        <li onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
};

export default SearchBar;