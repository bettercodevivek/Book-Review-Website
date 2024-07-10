import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50">
      <section className="bg-cover bg-center" style={{ backgroundImage: 'url(https://i.postimg.cc/gkfp0y7f/thought-catalog-o0-Qqw21-0-NI-unsplash.webp)' }}>
        <div className="bg-black bg-opacity-50 py-24">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-4xl font-bold" data-aos="fade-down">Welcome to Reader's Realm</h2>
            <p className="mt-4" data-aos="fade-up">Your one-stop solution for managing and reviewing books.</p>
            <div className="mt-8" data-aos="zoom-in">
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8" data-aos="fade-up">Features</h2>
        <div className="flex flex-wrap -mx-6">
          <div className="w-full md:w-1/3 px-6 mb-12" data-aos="fade-right">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg p-6 text-white">
              <div className="text-white">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0110 10v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8A10 10 0 0112 2zm0 4a2 2 0 00-2 2v6a2 2 0 004 0V8a2 2 0 00-2-2zm0 10a2 2 0 10-2-2 2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Personalized Book Recommendations</h3>
              <p className="mt-2">Discover books tailored to your taste. Our algorithm suggests books based on your reading history and preferences.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-6 mb-12" data-aos="fade-up">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg p-6 text-white">
              <div className="text-white">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2zM9 18H7v-2h2v2zm0-4H7v-4h2v4zm4 4h-2v-6h2v6zm4 0h-2v-8h2v8z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">In-Depth Book Reviews</h3>
              <p className="mt-2">Read comprehensive reviews from fellow book enthusiasts. Share your thoughts and engage with a community of readers.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-6 mb-12" data-aos="fade-left">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg p-6 text-white">
              <div className="text-white">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0110 10v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8A10 10 0 0112 2zm0 4a2 2 0 00-2 2v6a2 2 0 004 0V8a2 2 0 00-2-2zm0 10a2 2 0 10-2-2 2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Organize Your Library</h3>
              <p className="mt-2">Keep track of your reading list with our easy-to-use library management system. Never lose track of a book again.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cover relative z-0 bg-center text-white" style={{ backgroundImage: 'url(https://i.postimg.cc/Xvt1fxfb/freddie-marriage-w8-Ji-SVyjy-8-unsplash.webp)' }}>
        <div className="bg-black bg-opacity-50 py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold" data-aos="fade-up">Join Reader's Realm Today</h2>
            <p className="mt-4" data-aos="fade-up">Sign up now and start managing your book reviews effortlessly.</p>
          </div>
          <div className='mt-4 flex flex-row items-center justify-center'>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</Link>
        </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
