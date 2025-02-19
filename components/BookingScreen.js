import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

const BookingScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(restaurant.slots[0]);

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShow(Platform.OS === "ios");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#ffffff" />
      </TouchableOpacity>

      <Image source={restaurant.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>

        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} color="#007BFF" />
          <Text style={styles.location}>Location: {restaurant.location}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="restaurant-outline" size={20} color="#007BFF" />
          <Text style={styles.cuisine}>Cuisine: {restaurant.cuisine}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={20} color="#007BFF" />
          <Text style={styles.slots}>Select Available Slot:</Text>
        </View>

        <Picker
          selectedValue={selectedSlot}
          onValueChange={(itemValue) => setSelectedSlot(itemValue)}
          style={styles.picker}
        >
          {restaurant.slots.map((slot, index) => (
            <Picker.Item key={index} label={slot} value={slot} />
          ))}
        </Picker>

        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShow(true)}
        >
          <Ionicons name="calendar-outline" size={20} color="#ffffff" />
          <Text style={styles.datePickerText}>{date.toDateString()}</Text>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}

        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => {
            navigation.navigate("Confirm-Booking", {
              restaurant, 
              selectedSlot, 
              date, 
            });
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
    backgroundColor: "#ffffff",
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 15,
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 50,
    zIndex: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 15,
    marginTop: 40,
    shadowColor: "#000",
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
    fontWeight: "700",
    color: "#34495e",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  location: {
    fontSize: 18,
    color: "#7f8c8d",
    marginLeft: 10,
  },
  cuisine: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
    marginLeft: 10,
  },
  slots: {
    fontSize: 16,
    color: "#2c3e50",
    marginLeft: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 10,
  },
  datePickerButton: {
    flexDirection: "row",
    backgroundColor: "rgb(146, 204, 255)",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  datePickerText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
  },
  bookButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  bookButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default BookingScreen;
