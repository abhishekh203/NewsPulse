import React from 'react';
import { Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

const Navbar = ({ setSearchQuery, setCategory }) => {
  const theme = useTheme();

  return (
    <nav className="bg-gradient-to-r from-black via-gray-800 to-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-extrabold cursor-pointer transition-transform transform hover:scale-105 hover:text-yellow-300">
          NewsPulse
        </div>
        <div className="flex gap-4 items-center">
          {/* Topic Buttons */}
          <Button 
            variant="contained" 
            sx={{ 
              mr: 2, 
              backgroundColor: '#1E90FF', // Blue color for buttons
              '&:hover': {
                backgroundColor: '#1C86EE', // Darker blue on hover
                transform: 'scale(1.05)', // Slightly enlarge on hover
              }
            }}
            onClick={() => setCategory('technology')}
          >
            Technology
          </Button>
          <Button 
            variant="contained" 
            sx={{ 
              mr: 2, 
              backgroundColor: '#32CD32', // Lime green color for buttons
              '&:hover': {
                backgroundColor: '#228B22', // Darker green on hover
                transform: 'scale(1.05)', // Slightly enlarge on hover
              }
            }}
            onClick={() => setCategory('health')}
          >
            Health
          </Button>
          <Button 
            variant="contained" 
            sx={{ 
              mr: 2, 
              backgroundColor: '#FFD700', // Gold color for buttons
              '&:hover': {
                backgroundColor: '#FFA500', // Darker gold on hover
                transform: 'scale(1.05)', // Slightly enlarge on hover
              }
            }}
            onClick={() => setCategory('science')}
          >
            Science
          </Button>
          <Button 
            variant="contained" 
            sx={{ 
              mr: 2, 
              backgroundColor: '#FF4500', // Orange red color for buttons
              '&:hover': {
                backgroundColor: '#FF6347', // Darker orange red on hover
                transform: 'scale(1.05)', // Slightly enlarge on hover
              }
            }}
            onClick={() => setCategory('sports')}
          >
            Sports
          </Button>
          <Button 
            variant="contained" 
            sx={{ 
              mr: 2, 
              backgroundColor: '#BA55D3', // Medium purple color for buttons
              '&:hover': {
                backgroundColor: '#8A2BE2', // Darker purple on hover
                transform: 'scale(1.05)', // Slightly enlarge on hover
              }
            }}
            onClick={() => setCategory('entertainment')}
          >
            Entertainment
          </Button>

          {/* Enhanced Search Bar */}
          <TextField
            id="search"
            label=""
            variant="outlined"
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on change
            sx={{
              backgroundColor: 'white',
              borderRadius: '30px', // Rounded corners
              width: '300px', // Fixed width for search bar
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
              '& .MuiOutlinedInput-root': {
                borderRadius: '30px', // Rounded corners
              },
              '& .MuiInputLabel-outlined': {
                transform: 'translate(14px, 14px) scale(1)', // Label positioning
              },
              '&:hover': {
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', // Enhanced shadow on hover
              },
            }}
            placeholder="Search news..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
