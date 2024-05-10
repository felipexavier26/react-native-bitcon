import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function CurrentPrice() { 

    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>
                Cotação atual do Bitcoin R$ 54423.34
            </Text>
            <Text style={styles.text}>
                Última atualização em 18:25
            </Text>
        </View>
    )

}



