// src/screens/HomeScreen.js
import React, { useEffect } from "react";
import { VStack, ScrollView } from "native-base";
import AppBar from "../components/AppBar";
import SearchBar from "../components/SearchBar";
import Adds from "../components/Add";
import CategoryCards from "./CategoryScreen";
import SpecialDeals from "./SpecialDealsScreen";
import { actions } from "../common/actions";
import { useLocation } from "../context/LocationContext";
import { useFont } from "../context/FontContext";
import axios from "../interceptors/LoaderInterceptor";

const HomeScreen = ({ navigation }) => {
    // const { location, errorMsg } = useLocation();
    // basic usage example of getting location
    // const { fontsLoaded } = useFont();
    // if (fontsLoaded) {
    //     console.log(fontsLoaded)
    //   }
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // setPosts(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchPosts();
      }, []);

  return (
    <VStack flex={1} width="100%">
      <ScrollView>
        <AppBar navigation={navigation} title="Home" actions={actions} />
        <SearchBar />
        <CategoryCards />
        <Adds />
        <SpecialDeals />
      </ScrollView>
    </VStack>
  );
};

export default HomeScreen;
