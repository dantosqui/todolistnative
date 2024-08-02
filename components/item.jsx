
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function Item(props) {
    

    return(
        <View>
        <Text>{props.text}</Text>
        <Text>{props.date.toLocaleString()}</Text>
        <Button title="hecho" onPress={props.quitar}></Button>
        </View>
    )
}
