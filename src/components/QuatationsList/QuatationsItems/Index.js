import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function QuatationsItems(props) {
    return (
        <View style={styles.mainContent}>

            <View style={styles.contentLeft}>
                <View style={styles.boxLogo}>
                    <Image
                    style={styles.logoBitcon}
                    source={require('../../img/bitcon.webp')} 
                    />
                    <Text style={styles.dayContation}>
                        {props.data}
                    </Text>
                </View>
            </View>

            <View style={styles.contentRight}>
                <Text style={styles.price}>                    
                    {props.valor}
                </Text>
            </View>

        </View>
    )
}