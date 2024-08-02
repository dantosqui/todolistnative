import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Item from './components/item';

export default function App() {
  const [date, setDate] = useState(new Date());
  const [tarea, setTarea] = useState("");
  const [showPicker, setShowPicker] = useState(false); 
  const [listaTareas, setListaTareas] = useState([]);

  const eliminarItem = (index) => {
    setListaTareas(listaTareas.filter((_, i) => i !== index)); 
  };

  const AgregarTarea = () => {
    if (tarea.trim()) { 
      const nuevoItem = {
        tarea: tarea,
        date: date,
      };
      setListaTareas([...listaTareas, nuevoItem]);
      setTarea(""); 
    }
  };

  const onChange = (event, selectedDate) => {
    if (event.type === 'set') {
      setDate(selectedDate || date);
    }
    setShowPicker(false);
  };

  return (
    <View style={styles.container}>
      <Text>TO DO LIST Bienvenidos</Text>
      <Text>Nueva tarea:</Text>
      <TextInput
        keyboardType="default"
        placeholder="Matematica..."
        value={tarea}
        onChangeText={setTarea}
        style={styles.input}
      />
    
      <Button title={date.toLocaleDateString()} onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <Button title="Agregar Tarea +" onPress={AgregarTarea} />
      <ScrollView>
        {listaTareas.map((item, index) => (
          <Item 
            key={index} 
            text={item.tarea} 
            date={item.date} 
            quitar={() => eliminarItem(index)} 
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%', 
    paddingHorizontal: 10,
  },
});
