import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import SearchResultsCard from "../SearchResultsCard/SearchResultsCard";

const SearchPage = () => {
  const placeholderArray = [
    "Search Ironman",
    "Search Captain America",
    "Search Superman",
    "Search It",
    "Search Black Adam",
    "Search Thunderbolts",
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resultText, setResultText] = useState(null);
  const [placeholderText, setPlaceholderText] = useState(placeholderArray[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const changePlaceholder = () => {
      setPlaceholderText(placeholderArray[currentIndex]);
      currentIndex = (currentIndex + 1) % placeholderArray.length;
    };
    const timer = setInterval(changePlaceholder, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      e.target.blur();
      setCurrentPage(2);
      handleSearch(1);
    }
  };

  const handleSearch = async (page = currentPage) => {
    setError(null);
    setResultText(null);
    setLoading(true);
    try {
      const response = await fetch(
        "https://movize-backend2.vercel.app/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ searchQuery, page }),
        }
      );
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        setError("Movie not found");
        setMovies([]);
        setResultText(null);
        setTotalPages(0);
      } else {
        setMovies(data.results);
        setResultText(`Results for ${searchQuery}`);
        setTotalPages(data.totalPages || 1);
        setCurrentPage(data.currentPage || page);
      }
    } catch (err) {
      setError("An Unknown error occured");
      setResultText(null);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      handleSearch(newPage);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(1);
        }}
      >
        <div className="searchbar-cont">
          <div className="searchbar" tabIndex="0">
            <div className="searchbar-icon">
              <span>
                <i className="fa fa-magnifying-glass"></i>
              </span>
            </div>
            <input
              type="text"
              placeholder={placeholderText}
              required
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onKeyPress={handleKeyPress}
            />
            <div className="searchbar-btn">
              <button type="submit">
                <span>
                  <i className="fa fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="mv-res-title">
        <h4>{resultText}</h4>
      </div>

      {loading ? (
        <div className="loader"></div>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <>
          <div className="mv-res-cards">
            {movies.map((movie) => (
              <SearchResultsCard key={movie.id} movie={movie} />
            ))}
          </div>

          {totalPages > 1 && (
            <>
              <p className="page-info">
                Page {currentPage} of {totalPages}
              </p>
              <div className="pagination">
                <button
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &laquo; prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`pagination-btn ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next &raquo;
                </button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SearchPage;
