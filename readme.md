# SMART HEALTHCARE ASSISTANT  

## Overview  
The *SMART HEALTHCARE ASSISTANT* is an advanced healthcare solution designed for emergency situations. It provides users with essential healthcare assistance, such as predicting diseases based on symptoms, recommending relevant tests, sharing detailed disease information, and offering precautions and treatment options. The system also helps locate nearby healthcare facilities based on the user's preferences and location, ensuring quick access to critical resources during emergencies.  

## Features  
1. *Disease Prediction*  
   - Analyze user-provided symptoms to predict possible diseases.  
   - Suggest relevant diagnostic tests for confirmation.  

2. *Detailed Disease Information*  
   - Provide a comprehensive overview of diseases, including symptoms, causes, and precautions.  
   - Offer treatment suggestions and recovery tips.  

3. *Nearby Healthcare Facilities*  
   - Locate hospitals, clinics, pharmacies, diagnostic centers, and more within an 8km radius.  
   - Categorize facilities and display essential information, such as name, address, ratings, and distance from the user's location.  
   - Implement a sort-by feature with options: Recommended, Popularity, Rating, and Nearby.  

4. *Emergency Situations*  
   - Designed to operate effectively in critical situations.  
   - Avoids unnecessary disclaimers to provide direct and actionable advice.  

5. *Dynamic Web Application*  
   - Responsive and interactive interface for ease of use.  
   - Integration with Google Maps API for accurate location-based results.  


## Project Structure

```
Smart-Healthcare-Assistant/
├── static/
│   ├── css/
│   │   ├── styles.css     #for index.html
│   │   ├── styles3.css    #for about_us.html
│   │   ├── styles4.css    #for nearby_facilities.html
│   │   └── styles22.css   #for chabot.html
│   ├── images/
│   │   └── ...            # Various images and GIFs
│   └── js/
│       └── chatbot.js     # Chatbot interactions
├── templates/
│   ├── index.html         # Landing page
│   ├── chatbot.html             #chatbot page
│   ├── nearby_facilities.html
│   └── about_us.html
├── .env                   # Environment variables
├── .gitignore
├── app.py                # Flask application
├── Procfile              
└── requirements.txt      # Dependencies
```


## Technology Stack  
- *Backend:* Flask (Python)  
- *Frontend:* HTML, CSS, Bootstrap, JavaScript  
- *APIs:* OpenAI API & Google Maps API  
- *Deployment:* Github repo and render.com  


## Installation and Setup

### Prerequisites
- Python 3.11
- pip (Python package manager)
- Git
- Virtual environment tool

### Setup Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/khanbasharat3a1/AI_SmarHealthCare_Assistant
   ```

2. **Create and Activate Virtual Environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```
   FLASK_APP=app.py
   FLASK_ENV=development
   MAPS_API_KEY=your_google_maps_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

5. **Run the Application:**
   ```bash
   flask run
   ```
   Access at `http://127.0.0.1:5000/`

## Application Workflow

### 1. Disease Prediction
- User inputs symptoms through chatbot interface
- AI processes symptoms using OpenAI API
- System provides:
  - Potential disease predictions
  - Recommended diagnostic tests
  - Initial precautions
  - Treatment guidance

### 2. Nearby Facilities Search
- Automatic user location detection
- Facility categorization and filtering
- Dynamic result updates based on sorting preferences
- Interactive map visualization
- Detailed facility information cards

### 3. Interactive Features
- Real-time chat responses
- Dynamic map updates
- Responsive UI elements
- Sorting and filtering options
- Navigation integration

## Recommendations Algorithm

The system uses a sophisticated ranking algorithm:
```
Recommended Score = (Rating × Number of Reviews) + Distance Factor
Where:
- Rating must be ≥ 4.0
- Distance Factor = 1/distance_in_km
```

## Contact

For queries, feel free to reach out:

Developer: Basharat Ahmad Khan

Email: khanbasharat3a1@gmail.com

Phone: (+91) 8899977743

