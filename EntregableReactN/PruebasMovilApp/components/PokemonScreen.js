import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Icon } from 'react-native-elements';
import { getColombiaInfo } from "../api/services"

const PokemonScreen = ({navigation})=>{
  const [colombiaInfo, setColombiaInfo]=useState({})

  useEffect(() => {
      async function fetchData() {
          const pokemonData = await getPokemon()
          setColombiaInfo(pokemonData)
      }
      fetchData();
      navigation.setOptions({
          headerRight: () => {
              return ( 
                  <Icon name = 'rowing'  onPress = {() => navigation.navigate('')}/>
              )
          }
      }) 
  })

  return(
      <View style={styles.container}>
          <Text style = { styles.title } >Nombre: { colombiaInfo.name }  </Text>
          <Text style = { styles.text } >Url: { colombiaInfo.results }  </Text>
      </View>
  )
  console.log(pokemonData);
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10
  },
  text: {
      fontSize: 16,
      marginVertical: 5
  },
});

export default PokemonScreen