// Check if the device is active on a Wi-Fi or LAN network
if (wifi.isConnected() === true || network.isLAN() === true) {
    print("LOCAL NETWORK DETECTED: JOINING LAN GAME...");
    
    MULTIPLAYER.LAN_CONNECT = true;
    MULTIPLAYER.MODE = "LAN";
    LOAD.NETWORK.SAVE = MULTIPLAYER;
} else {
    print("CONNECTION FAILED: NO LOCAL NETWORK DETECTED.");
    
    MULTIPLAYER.LAN_CONNECT = false;
    MULTIPLAYER.MODE = "OFFLINE";
}
