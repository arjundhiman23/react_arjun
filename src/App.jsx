import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="background-layer">
        <div className="overlay">
          <header className="app-header">
            <h1>Movie Booking</h1>
            <p>Book tickets for your favorite movies!</p>
          </header>

          <section className="movies-section">
            <h2>Now Showing</h2>
            <div className="movies-grid">
              <div className="movie-card">
                <img src="https://images-cdn.ubuy.co.in/6585bef7a2ae5d32f8760cfb-fight-club-movie-poster-1-wall-art.jpg" alt="Movie 1" />
                <h3>Fight Club</h3>
                <button className="book-button">Book Now</button>
              </div>
              <div className="movie-card">
                <img src="https://m.media-amazon.com/images/M/MV5BMmVhZjhlZDYtMDAwZi00MDcyLTgzOTItOWNiZjY0YmE0MGE0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" alt="Movie 2" />
                <h3>Ten Things I Hate About You</h3>
                <button className="book-button">Book Now</button>
              </div>
              <div className="movie-card">
                <img src="https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" alt="Movie 3" />
                <h3>Kabhi Khushi Kabhi Gham</h3>
                <button className="book-button">Book Now</button>
              </div>
            </div>
          </section>

          <footer className="app-footer">
            <p>© 2024 Movie Booking. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
