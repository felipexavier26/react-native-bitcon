import React, { Fragment } from "react";
import { ScrollView, FlatList, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import QuatationsItems from "./QuatationsItems/Index";

export default function QuatationsList(props) {

    const daysQuery = props.filterDay

    return (
        <Fragment>
            <View style={styles.filtres}>
                <TouchableOpacity style={styles.buttonQuery} onPress={() => daysQuery(7)}>
                    <Text style={styles.textQuery}>7D</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuery} onPress={() => daysQuery(15)}>
                    <Text style={styles.textQuery}>15D</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuery} onPress={() => daysQuery(30)}>
                    <Text style={styles.textQuery}>1M</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuery} onPress={() => daysQuery(90)}>
                    <Text style={styles.textQuery}>3M</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuery} onPress={() => daysQuery(180)}>
                    <Text style={styles.textQuery}>6M</Text>
                </TouchableOpacity>
            </View>

            <FlatList data={props.listTransaction}
                renderItem={({ item }) => {
                    return <QuatationsItems valor={item.valor} data={item.data} />
                }} />

        </Fragment>

    )

}



