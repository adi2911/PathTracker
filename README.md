# PathTracker

PathTracker is a React Native application designed to track and log the path taken during a journey by the user. The app allows users to sign in, record their travel path, and view the tracked path on a map. It uses geolocation to track the user's location and displays the path using a map interface.

## Table of Contents

- [About the Application](#about-the-application)
- [Tech Stack](#tech-stack)
  
## About the Application

PathTracker provides a user-friendly interface for tracking journeys. Users can:
- **Sign In**: Authenticate using JWT tokens and AsyncStorage.
- **Track Path**: Record their path using geo-location.
- **View Path**: See the recorded path displayed on a map.
- **Save and View Tracks**: Save their journey and view the saved tracks on the map.

For demonstration purposes, a mock location feature is included to simulate location tracking.

## Tech Stack

**Frontend:**
- **Framework**: React Native - Provides the mobile application framework.
- **UI Library**: React Native Elements - Offers styled and customizable UI elements.
- **Maps**: react-native-maps - Displays the map and the tracked path.
- **Location Tracking**: expo-location - Tracks user location, mainly in the foreground.
- **Authentication**: JWT tokens and AsyncStorage - Manages user authentication and session.

**Backend:**
- **Server**: Express - Handles API requests and interactions with the MongoDB database.
- **Database**: MongoDB - Stores user data and tracked journeys.
- **Tunnel**: ngrok - Exposes the Express server port for local development.



