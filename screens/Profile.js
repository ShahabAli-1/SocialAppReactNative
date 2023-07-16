import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export default function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 25,
          zIndex: 9999,
        }}
      >
        <View style={styles.navbar}>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <Image
              source={
                menuOpen
                  ? require("../assets/close.png")
                  : require("../assets/hamburger.png")
              }
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>

          {menuOpen && (
            <View style={styles.menuOptions}>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Discover</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Watch</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Messages</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 50,
              marginBottom: 10,
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20,
            }}
          />
        </View>
      </View>
      <View>
        <View style={styles.header__bg}></View>
        <View style={styles.header__view}>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            }}
            style={styles.image}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileDetail}>
          <View style={{ paddingBottom: 10 }}>
            <Image></Image>
            <Text style={{ fontSize: 25, fontWeight: 700 }}>Name</Text>
            <Text style={{ fontSize: 10, color: "gray" }}>@mail</Text>
          </View>

          <View style={{ paddingBottom: 10 }}>
            <Text style={{ fontWeight: 500 }}>
              The is my bio Section. My name is Name. What is your name?
            </Text>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Image
                source={require("../assets/icon3.png")}
                style={{ display: "flex", height: 17, width: 17 }}
              />
              <Text style={{ marginRight: 30, fontWeight: 500, marginLeft: 7 }}>
                Student
              </Text>
              <Image
                source={require("../assets/icon2.png")}
                style={{ display: "flex", height: 17, width: 17 }}
              />
              <Text style={{ marginRight: 30, fontWeight: 500, marginLeft: 7 }}>
                Location
              </Text>
            </View>
            <View
              style={{ marginTop: 4, display: "flex", flexDirection: "row" }}
            >
              <Image source={require("../assets/icon1.png")} />
              <TouchableOpacity>
                <Text style={{ color: "#0000ff", marginLeft: 7 }}>
                  https://sites333.netlify.app
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 7 }}>
              <Text>240 Followers · 122 Following</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "lightgray",
            marginTop: 15,
          }}
        >
          <View style={{ marginLeft: 20 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 15,
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 600 }}>Post</Text>
              <Text style={{ fontSize: 16, fontWeight: 600 }}>Videos</Text>
              <Text style={{ fontSize: 16, fontWeight: 600 }}>Media</Text>
              <Text style={{ fontSize: 16, fontWeight: 600 }}>Replies</Text>
            </View>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <View>
              <Image
                source={{
                  uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginBottom: 10,
                  marginTop: 10,
                  marginLeft: 20,
                  marginRight: 20,
                }}
              />
            </View>
            <View style={{ marginTop: 12, width: 290 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ marginRight: 0 }}>
                  <Text style={{ fontSize: 18, fontWeight: 700 }}>Name</Text>
                  <Text style={{ fontSize: 10, color: "gray" }}>
                    @mail · 2hr
                  </Text>
                </View>
                <View>
                  <Image
                    style={{ height: 20, width: 20 }}
                    source={require("../assets/threedot.png")}
                  />
                </View>
              </View>
              <View>
                <Text>
                  The is my bio Section. My name is was namee What is your name?
                  The is my bio Section. My name is Name. What is your name? The
                  is my bio Section. My name is Name. What is your name? The is
                  my bio Section. My name is Name. What is your name?
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 8,
                }}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../assets/post1.png")}
                />
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../assets/post2.png")}
                />
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../assets/post3.png")}
                />
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../assets/post4.png")}
                />
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../assets/post5.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header__view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: -40,
    marginLeft: 25,
  },
  header__bg: {
    //flex: 1,
    width: "100%",
    height: 130,
    backgroundColor: "#025024",
    backgroundImage:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,213,255,0.33539536420036764) 0%, rgba(112,132,205,1) 100%, rgba(171,175,236,0.5775736319918592) 100%, rgba(150,154,236,1) 100%)",
  },
  button: {
    display: "flex",
    borderColor: "#007bff",
    borderWidth: 2,
    borderRadius: 30,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    marginRight: 25,
    marginTop: 8,
  },
  buttonText: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileDetail: {
    marginLeft: 25,
    marginRight: 20,
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "#1E1E23",
    margin: 10,
    height: 60,
    paddingHorizontal: 16,
    alignItems: "center",
    zIndex: 9999,
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: 16,
  },
  menuOptions: {
    position: "absolute",
    top: 60,
    left: 0,
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    zIndex: 9999,
    elevation: 4,
  },
  option: {
    paddingVertical: 8,
  },
  optionText: {
    color: "#1E1E23",
    fontSize: 16,
  },
});
