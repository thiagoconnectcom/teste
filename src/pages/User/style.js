import React, { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    back: {
        backgroundColor: "#f8f8f8",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20
    },

    containerForm: {
        backgroundColor: "#fff",
        width: "100%",
        paddingVertical: 50,
        marginTop: 50
    },
    textInputStyle: {
        borderColor: '#eaeaea',
        borderWidth: 1,
        height: 45,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    txtLogin: {
        padding: 20,
        fontSize: 14
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    between: {
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 15
    },
    textLink: {
        fontSize: 12
    },
    linkActive: {
        color: "#f75611",
        fontWeight: "bold"
    },
    mt: {
        marginTop: 100
    }

});

export default styles;