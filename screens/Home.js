import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Post from "../components/Post";

export default function Home() {
  return (
    <View>
      {/* Feed header */}
      <View
        style={{
          marginTop: 30,
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: "lightgray",
          paddingBottom: 7,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "90%",

            marginLeft: "5%",
            marginRight: "5%",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                //   marginBottom: 10,
                //   marginTop: 10,
                //   marginLeft: 15,
                //   marginRight: 20,
              }}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: "-6.5%", fontSize: 15, fontWeight: 500 }}>
            Feed
          </Text>
          <TouchableOpacity>
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../assets/post1.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Feed Posts */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ paddingBottom: 30 }}>
          <Post postImage="https://t3.ftcdn.net/jpg/02/74/50/28/360_F_274502877_n3BQGoAGPRqsjgKIU4lB6wns0mBuPTL3.jpg" />
          <Post />
          <Post postImage="https://t3.ftcdn.net/jpg/02/74/50/28/360_F_274502877_n3BQGoAGPRqsjgKIU4lB6wns0mBuPTL3.jpg" />
          <Post />
          <Post postImage="https://t3.ftcdn.net/jpg/02/74/50/28/360_F_274502877_n3BQGoAGPRqsjgKIU4lB6wns0mBuPTL3.jpg" />
          <Post />
        </View>
      </ScrollView>
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
