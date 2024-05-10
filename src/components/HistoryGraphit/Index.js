import React from "react";
import { View, Text, Dimensions } from "react-native";
import styles from "./styles";
import {
    LineChart,
} from "react-native-chart-kit";

export default function HistoryGraphit() {

    return (
        <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
                data={{
                    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
                    datasets: [
                        {
                            data:  [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#000000",
                    backgroundGradientFrom: "#232323",
                    backgroundGradientTo: "#3f3f3f",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    )

}



