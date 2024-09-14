import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const NewsItem = ({ title, description, src, url, content, publishedAt }) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString(); // Format the date to a readable format

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 'auto',
        mb: 3,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={src || '../th.jpeg'}
        alt={title || 'News image'}
        loading="lazy"
        sx={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          objectFit: 'cover', // Ensure the image covers the area nicely
        }}
      />
      <CardContent
        sx={{
          backgroundColor: '#fff',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          padding: 2,
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: '#222',
            mb: 1,
            lineHeight: 1.4, // Improve readability
          }}
        >
          {title.length > 50 ? `${title.slice(0, 80)}...` : title}
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            color: '#555',
            mb: 2,
            lineHeight: 1.8, // Improve readability
            fontSize: '0.875rem',
          }}
        >
          {description ? (description.length > 90 ? `${description.slice(0, 200)}...` : description) : 'No description available.'}
        </Typography>
        {/* Display the content above the published date */}
        <Typography
          variant="body2"
          sx={{
            color: '#333',
            mb: 2,
            fontStyle: '',
            lineHeight: 1.5,
          }}
        >
          {content ? (content.length > 100 ? `${content.slice(0, 100)}...` : content) : 'No content available.'}
        </Typography>
        {/* Display the published date */}
        <Typography
          variant="body2"
          sx={{
            color: '#888',
            mb: 2,
            fontSize: '0.75rem',
            lineHeight: 1.5,
          }}
        >
          Published on: {formattedDate}
        </Typography>
        <Button
          size="small"
          color="primary"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#007bff',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
            borderRadius: '20px',
            textTransform: 'none',
            padding: '6px 16px',
            fontSize: '0.875rem',
          }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsItem;
