import React, { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    row: {
        flexDirection: "row",
        marginVertical: 5
    },
    card: {
        borderWidth: 1,
        borderColor: "#eaeaea",
        borderRadius: 5,
        padding: 10
    },
    col: {
        flexDirection: "column",
        marginHorizontal: 25,
        paddingVertical: 25
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000"
    }
});

export default styles;