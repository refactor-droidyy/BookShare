import React, { useState, useEffect } from "react";
import { Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Slider from "react-native-slider";

import { Divider, Button, Block, Text, Switch, Input } from "../components";
import { theme, mocks } from "../constants";

const Settings = (props) => {
  const { navigation } = props;
  const [budget, setBudget] = useState(500);
  const [monthly, setMonthly] = useState(500);
  const [notification, setNotification] = useState(true);
  const [newsletter, setNewLetter] = useState(false);
  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    setProfile(props.profile);
  }, []);

  const handleEdit = (name, text) => {
    profile[name] = text;
    setProfile(profile);
  };
  const renderEdit = (name) => {
    if (editing === name) {
      return (
        <Input
          backgroundColor="rgba(157,163,180,0.10)"
          marginRight={40}
          onChangeText={(text) => handleEdit([name], text)}
          defaultValue={profile.name}
        />
      );
    }
  };

  const toggleEdit = (name) => {
    setEditing(!editing ? name : null);
  };

  return (
    <Block color="white">
      <Block
        flex={false}
        row
        center
        space="between"
        margin={[10, 0]}
        style={styles.inputRow}
        style={styles.header}
      >
        <TouchableOpacity>
          <Feather
            name="arrow-left"
            size={32}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text h1 bold>
          Settings
        </Text>
        <Button>
          <Image source={profile.avatar} style={styles.avatar} />
        </Button>
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={styles.input}>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text bold style={{ marginBottom: 10 }} gray2>
                UserName
              </Text>
              <Text bold>{profile.username}</Text>
              {renderEdit("username")}
            </Block>
            <Text medium secondary onPress={() => toggleEdit("username")}>
              {editing === "username" ? "Save" : "Edit"}
            </Text>
          </Block>
        </Block>
        <Block style={styles.input}>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text bold style={{ marginBottom: 10 }} gray2>
                Location
              </Text>
              <Text bold>{profile.location}</Text>
              {renderEdit("location")}
            </Block>
            <Text medium secondary onPress={() => toggleEdit("location")}>
              {editing === "location" ? "Save" : "Edit"}
            </Text>
          </Block>
        </Block>
        <Block style={styles.input}>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text bold style={{ marginBottom: 10 }} gray2>
                E-Mail
              </Text>
              <Text bold>{profile.email}</Text>
              {renderEdit("email")}
            </Block>
            <Text medium secondary onPress={() => toggleEdit("email")}>
              {editing === "email" ? "Save" : "Edit"}
            </Text>
          </Block>
        </Block>

        <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
        <Block style={styles.slider}>
          <Block>
            <Text gray body style={{ marginBottom: 10 }}>
              Budget
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={6000}
              style={{ height: 19 }}
              thumbStyle={styles.thumb}
              trackStyle={{ height: 6, borderRadius: 6 }}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157,163,180,0.10)"
              value={budget}
              onValueChange={(value) => setBudget(value)}
            />
            <Text gray2 body caption right>
              ${budget.toFixed(0)}
            </Text>
          </Block>
          <Block>
            <Text gray2 captionbody>
              Monthly Gap
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={6000}
              style={{ height: 19 }}
              thumbStyle={styles.thumb}
              trackStyle={{ height: 6, borderRadius: 6 }}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157,163,180,0.10)"
              value={monthly}
              onValueChange={(value) => setMonthly(value)}
            />
            <Text gray2 body caption bold right>
              ${monthly.toFixed(0)}
            </Text>
          </Block>
        </Block>

        <Divider />
        <Block style={styles.toggle}>
          <Block
            row
            center
            space="between"
            style={{ marginBottom: theme.sizes.base * 2 }}
          >
            <Text body gray2>
              Notifications
            </Text>
            <Switch
              value={notification}
              onValueChange={() => setNotification(!notification)}
            />
          </Block>

          <Block
            row
            center
            space="between"
            style={{ marginBottom: theme.sizes.base * 2 }}
          >
            <Text body gray2>
              Newsletter
            </Text>
            <Switch
              value={newsletter}
              onValueChange={() => setNewLetter(!newsletter)}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 1.5,
  },
  avatar: {
    height: theme.sizes.base * 2,
    width: theme.sizes.base * 2,
  },
  input: {
    paddingHorizontal: theme.sizes.base * 2,
    marginTop: theme.sizes.base * 0.7,
    padding: theme.sizes.base,
    marginHorizontal: theme.sizes.base / 2,
  },
  inputRow: {
    alignItems: "flex-end",
    marginTop: theme.sizes.base / 2,
  },
  slider: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  thumb: {
    width: theme.sizes.base * 1.5,
    height: theme.sizes.base * 1.5,
    borderRadius: theme.sizes.base * 2,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: theme.colors.primary,
  },
  toggle: {
    paddingHorizontal: theme.sizes.base * 1.5,
  },
});

Settings.defaultProps = {
  profile: mocks.profile,
};

export default Settings;
