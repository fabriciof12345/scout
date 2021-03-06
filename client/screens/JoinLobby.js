import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function JoinLobby(props) {
  const [lobby, onChangeLobby] = React.useState("");
  const navigation = useNavigation();

  function goToLobby() {
    props.navigation.navigate("Lobby", { lobbyId: lobby });
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />

      <Text style={{ fontSize: 50, marginBottom: "30%" }}>Join Lobby</Text>

      <View
        style={{
          height: "5%",
          width: "55%",
          borderRadius: 10,
          elevation: 1,
          marginBottom: 20,
        }}
      >
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeLobby(text)}
          keyboardType="default"
          placeholder="lobby code"
          value={lobby}
        />
      </View>

      <View
        style={{
          backgroundColor: "#C70039",
          height: "5%",
          width: "55%",
          borderRadius: 10,
          elevation: 6,
        }}
      >
        <Button
          onPress={goToLobby}
          title="Create"
          color="rgb(255,255,255)"
        ></Button>
      </View>
    </View>
  );
}
