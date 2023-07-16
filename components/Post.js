import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Image } from "react-native";
export default function Post({ postImage }) {
  return (
    <View
      style={{
        width: "100%",
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: 6,
          marginBottom: 10,
        }}
      >
        <View>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginRight: 20,
            }}
          />
        </View>
        <View style={{ marginTop: 6, width: 290 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                marginRight: 0,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 700 }}>Name</Text>
              <Text style={{ fontSize: 13, color: "gray", marginLeft: 7 }}>
                @mail · 2hr
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../assets/threedot.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text>
              The is my bio Section. My name is was namee What is your name? The
              is my bio Section. My name is Name.
            </Text>
            {postImage && (
              <Image
                style={{
                  height: 160,
                  width: "100%",

                  borderRadius: 10,
                  marginTop: 5,
                }}
                source={{
                  uri: postImage,
                }}
              />
            )}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <TouchableOpacity>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/post1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/post2.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/post3.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/post4.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/post5.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
