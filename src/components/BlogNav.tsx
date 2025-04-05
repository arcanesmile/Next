'use client';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons';
import '@/styles/BlogNav.scss';

const BlogNav = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || '';
  
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const toggleSearch = () => setSearchVisible(!searchVisible);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    
    const params = new URLSearchParams(searchParams);
    if (category) params.set('category', category);
    else params.delete('category');
    if (searchQuery) params.set('search', searchQuery);
    router.push(`/blog?${params.toString()}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
    
    const params = new URLSearchParams(searchParams);
    if (newSearchQuery) params.set('search', newSearchQuery);
    else params.delete('search');
    if (selectedCategory) params.set('category', selectedCategory);
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <header className="blognav">
      <div className="navbar-dropdown">
        <button className="navbar-dropdown-btn">
          <FontAwesomeIcon icon={faEllipsisV} style={{ width: '30px', height: '50px' }} />
        </button>
        <div className="navbar-dropdown-menu">
          <ul>
            <li><button onClick={() => handleCategorySelect('graphics')} className="navbar-dropdown-link">Graphics</button></li>
            <li><button onClick={() => handleCategorySelect('software')} className="navbar-dropdown-link">Software</button></li>
            <li><button onClick={() => handleCategorySelect('uiux')} className="navbar-dropdown-link">UI/UX</button></li>
            <li><button onClick={() => handleCategorySelect('')} className="navbar-dropdown-link">All</button></li>
          </ul>
        </div>
      </div>

      <h1 className="navbar-title">Welcome to Our Blog</h1>

      <div className="navbar-search">
        {searchVisible && (
          <input
            type="text"
            placeholder="Search blog..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="navbar-search-input"
          />
        )}
        <button onClick={toggleSearch} className="navbar-search-btn">
          <FontAwesomeIcon icon={faSearch} className="navbar-search-icon" />
        </button>
      </div>
    </header>
  );
};

export default BlogNav;