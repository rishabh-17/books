import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white flex justify-center">
        <nav className="flex max-w-6xl p-4 mx-auto">
          <a href="#" className="p-3">
            Home
          </a>
          <a href="#about" className="p-3">
            About
          </a>
          <a href="#reviews" className="p-3">
            Reviews
          </a>
          <a href="#contact" className="p-3">
            Contact
          </a>
        </nav>
      </header>

      <section className="flex items-center justify-center" id="hero">
        <div className="flex flex-col items-start max-w-2xl mx-auto space-y-4 p-8">
          <h1 className="text-4xl font-bold">Books for everyone</h1>
          <p className="text-xl">
            Discover new books, read reviews, and share your thoughts.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 rounded">
            Get started
          </button>
        </div>
      </section>

      <section className="flex items-center justify-center" id="about">
        <div className="flex flex-col items-start max-w-2xl mx-auto space-y-4 p-8">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-xl">
            We are a community of book lovers who believe that anyone can find
            their next favorite book.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center" id="reviews">
        <div className="flex flex-col items-start max-w-2xl mx-auto space-y-4 p-8">
          <h2 className="text-3xl font-bold">Reviews</h2>
          <p className="text-xl">
            Check out what other readers have to say about their favorite books.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center" id="contact">
        <div className="flex flex-col items-start max-w-2xl mx-auto space-y-4 p-8">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-xl">Got a question or feedback? Let us know.</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white p-4 flex justify-center">
        <p className="text-center">&copy; 2023 Books</p>
      </footer>
    </div>
  );
}
