# Picture Gallery Application Report

## How to Run
### Clone the repo:
```
git clone https://github.com/vin51435/Image-Gallery-Assignment.git
```

### Navigate to the project:
```
cd Image-Gallery-Assignment
```

### Install dependencies:
```
npm install
```

### Start the app:
```
npm run dev
```

### Open http://localhost:3000 in your browser.

## Approach
I built the picture gallery using React and Vite. The app lets users search for images from Unsplash based on category input, displaying results in a responsive grid. Each image shows the author, description, and a link to Unsplash.

### Issues
Occasionally, the Unsplash API returns a rate limit error. This can happen inconsistently depending on the search term, like "cat" working but "dog" failing. This issue is due to API limits and is beyond my control.

Feel free to reach out if you have any questions.