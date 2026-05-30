// Local Database Simulation
const StorageSystem = {
    // Save current player credentials to the browser cache
    saveProfile: function(username, password) {
        localStorage.setItem("dot_username", username);
        localStorage.setItem("dot_password", password);
        localStorage.setItem("dot_network", "Home_WiFi_LAN"); // Simulates current Wi-Fi connection
    },

    // Check if player profile exists
    getProfile: function() {
        return {
            username: localStorage.getItem("dot_username"),
            network: localStorage.getItem("dot_network")
        };
    },

    // Mock global player database (Simulating who is on the internet/local network)
    globalNetworkPlayers: [
        { name: "duh575", online: true, network: "Home_WiFi_LAN", img: "../../IMG_1797.png" },
        { name: "9uh", online: true, network: "Home_WiFi_LAN", img: "../../IMG_1797.png" },
        { name: "0z", online: false, network: "Starbucks_WiFi", img: "../../IMG_1797.png" },
        { name: "001", online: true, network: "Home_WiFi_LAN", img: "../../IMG_1797.png" },
        { name: "1000", online: true, network: "Other_Network", img: "../../IMG_1797.png" }
    ]
};
