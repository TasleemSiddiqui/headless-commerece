import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';


const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2 shadow-md">
      {/* Search Input */}
      <div className="flex items-center w-full">
        <Search className="text-gray-500 ml-2" />
        <Input 
          type="text" 
          placeholder="Search" 
          className="border-none focus:ring-0 outline-none px-2 shadow-none" 
        />
      </div>

      {/* Category Select Dropdown */}
      <Select >
        <SelectTrigger className="mx-4 w-36 border-none shadow-none">
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
      <Button className="bg-primary-theme hover:bg-primary-theme/40 text-white px-4 py-2 rounded-lg">
        SEARCH
      </Button>
    </div>
  );
};

export default SearchBar;
