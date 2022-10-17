import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const AddTodo = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (val: string) => {
        setText(val);
    };

    const pressHandler = () => {
        submitHandler(text);
        setText('');
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                value={text}
                onChangeText={changeHandler} //
            />
            <Button
                onPress={pressHandler}
                title="add todo"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});

export default AddTodo;
