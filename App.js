import { StyleSheet, StatusBar, Text, View, SafeAreaView, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';

import CurrentPrice from './src/components/CurrentPrice/Index';
import HistoryGraphit from './src/components/HistoryGraphit/Index';
import QuatationsList from './src/components/QuatationsList/Index';

// https://api.coindesk.com/v1/bpi/historical/close.json?start=2012-09-01&end=2023-09-05

function addZero(number) {
  if (number <= 9) {
    return '0' + number
  }
  return number
}

function url(qtdDays) {
  const date = new Date();
  const listLastDays = qtdDays
  const end_day = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays)
  const start_date = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_day}`
  
}

async function getListCoins(url) {
  let response = await fetch(url)
  let returnApi = await response.json()
  let setectListQuatations = returnApi.bpi

  const queryCoinsList = Object.keys(setectListQuatations).map((keys) => {
    return {
      data: keys.split("-").reverse().join("/"),
      valor: setectListQuatations[keys]
    }
  })
  let data = queryCoinsList.reverse();
  return data;
  // console.log(data); 
}



async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url)
  let returnApiG = await responseG.json()
  let setectListQuatationsG = returnApiG.bpi

  const queryCoinsListG = Object.keys(setectListQuatationsG).map((keys) => {
    setectListQuatationsG[keys]
  });
  let dataG = queryCoinsListG;
  return dataG;
} 



export default function App() {

  const [coinsList, setCoinsList] = useState([])
  const [coinsGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true)

  function updateDay(number) {   
    setDays(number)
    setUpdateData(true)
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data)
    });
    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG);
    })
    if (updateData) {
      setUpdateData(false)
    }
  }, [updateData]);



  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style="auto"
        backgroundColor='#f50d41'
        barStyle='light-content' />
      <CurrentPrice />
      <HistoryGraphit infoDataGraphic={coinsGraphicList}/>
      <QuatationsList filterDay={updateDay} listTransaction={coinsList} />
      {/* <QuatationsItems /> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});
