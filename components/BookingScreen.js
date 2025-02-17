import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for the back button and icons

const BookingScreen = ({ route, navigation }) => {
  const { restaurant } = route.params; // Get the restaurant details from navigation params

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Navigate to the previous screen
      >
        <Ionicons name="arrow-back" size={24} color="#ffffff" />
      </TouchableOpacity>

      <Image source={restaurant.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        
        {/* Location with Icon */}
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} color="#007BFF" />
          <Text style={styles.location}>Location: {restaurant.location}</Text>
        </View>

        {/* Cuisine with Icon */}
        <View style={styles.infoRow}>
          <Ionicons name="restaurant-outline" size={20} color="#007BFF" />
          <Text style={styles.cuisine}>Cuisine: {restaurant.cuisine}</Text>
        </View>

        {/* Available Slots with Icon */}
        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={20} color="#007BFF" />
          <Text style={styles.slots}>Available Slots: {restaurant.slots.join(', ')}</Text>
        </View>

        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => {
            // Your booking logic goes here
          }}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 15,
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 50,
    zIndex: 10, // Ensure it's above other elements
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginTop: 40, // To make space for the back button
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#34495e',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    fontSize: 18,
    color: '#7f8c8d',
    marginLeft: 10,
  },
  cuisine: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginLeft: 10,
  },
  slots: {
    fontSize: 16,
    color: '#2c3e50',
    marginLeft: 10,
  },
  bookButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  bookButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default BookingScreen;
