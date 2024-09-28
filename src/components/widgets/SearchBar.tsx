'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search as SearchIcon } from 'lucide-react';

const SearchBar: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // State to manage search query and category, defaulting to "all" for category
  const [searchQuery, setSearchQuery] = useState(searchParams?.get('q') || '');
  const [category, setCategory] = useState(searchParams?.get('category') || 'all');

  // Function to handle form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams: { q?: string; category?: string } = {};

    if (searchQuery.trim()) {
      queryParams.q = searchQuery;
    }
    if (category.trim() && category !== 'all') {
      queryParams.category = category;
    }

    // Build the query string based on selected parameters
    const queryString = new URLSearchParams(queryParams).toString();
    router.push(`/search?${queryString}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-lg p-2 shadow-md">
      {/* Search Input */}
      <div className="flex items-center w-full gap-2">
        <SearchIcon className="hidden md:block text-gray-500 " />
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="border-none focus:ring-0 outline-none px-2 shadow-none w-full"
        />
      </div>

      {/* Category Select Dropdown */}
      <Select
        value={category}
        onValueChange={(value) => setCategory(value)} // Update state when category is selected
      >
        <SelectTrigger className="hidden md:flex mx-4 w-36 border-none shadow-none">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="electronics">Electronics</SelectItem>
          <SelectItem value="fashion">Fashion</SelectItem>
          <SelectItem value="books">Books</SelectItem>
          {/* Add more categories as needed */}
        </SelectContent>
      </Select>

      {/* Search Button */}
      <Button
        type="submit"
        className="hidden md:block bg-primary-theme hover:bg-primary-theme/40 text-white px-4 py-2 rounded-lg"
      >
        Search
      </Button>
      <Button
        type="submit"
        className="block ml-2 md:hidden bg-primary-theme hover:bg-primary-theme/40 text-white px-4 py-2 rounded-lg"
      >
        <SearchIcon size={10} />
      </Button>
    </form>
  );
};

export default SearchBar;
