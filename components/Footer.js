import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons"; // ✅ Removed FontAwesome5 (no longer needed)

const Footer = () => {
  const navigation = useNavigation(); 
  const [activeTab, setActiveTab] = useState("Home"); // ✅ Set default active tab as "Home"
  const [showLoginModal, setShowLoginModal] = useState(false); 

  const menuItems = [
    { label: "Home", icon: "home", route: "Home", lib: FontAwesome },
    { label: "Cuisine", icon: "cutlery", route: "Cuisine", lib: FontAwesome },
    { label: "Reservations", icon: "bowl", route: "Reservations", lib: Entypo },
    { label: "Settings", icon: "settings-outline", route: "Settings", lib: Ionicons }, 
  ];

  const handlePress = (item) => {
    setActiveTab(item.route); // Set active tab on click
    if (item.label === "Login") {
      setShowLoginModal(true); 
    } else {
      navigation.navigate(item.route);
    }
  };

  return (
    <View style={styles.footer}>
      {menuItems.map((item, index) => {
        const IconComponent = item.lib;
        const isActive = activeTab === item.route;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.menuItem, isActive && styles.activeMenuItem]}
            onPress={() => handlePress(item)}
          >
            <IconComponent
              name={item.icon}
              size={28}
              color={isActive ? "#007BFF" : "#B0B0B0"}
            />
            <Text style={[styles.menuText, isActive && styles.activeMenuText]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#1e272e",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    transition: "all 0.3s ease-in-out", // Smooth transition effect when tapping
  },
  activeMenuItem: {
    borderBottomWidth: 3,
    borderBottomColor: "#007BFF", // Blue accent for active tab
    transform: [{ scale: 1.1 }], // Slightly enlarge active tab for a modern look
  },
  menuText: {
    marginTop: 5,
    fontSize: 12,
    color: "#B0B0B0",
    fontFamily: "Roboto-Regular",
  },
  activeMenuText: {
    color: "#007BFF",
    fontWeight: "bold", // Make text bold for active tab
    fontSize: 14, // Increase font size for active tab
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  closeButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    margin: 20,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Footer;

