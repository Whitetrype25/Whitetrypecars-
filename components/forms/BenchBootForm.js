import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function BenchBootForm({ method }) {
  const [form, setForm] = useState({ name: '', vehicle: '', notes: '' });

  const submit = () => {
    console.log('Bench/Boot request', { method, ...form });
    Alert.alert('Solicitud enviada', 'Nos pondremos en contacto contigo.');
  };

  return (
    <View>
      <Text>Contacto para {method}</Text>
      <TextInput
        placeholder="Nombre"
        value={form.name}
        onChangeText={(t) => setForm({ ...form, name: t })}
      />
      <TextInput
        placeholder="Vehículo"
        value={form.vehicle}
        onChangeText={(t) => setForm({ ...form, vehicle: t })}
      />
      <TextInput
        placeholder="Notas"
        value={form.notes}
        onChangeText={(t) => setForm({ ...form, notes: t })}
      />
      <Button title="Enviar" onPress={submit} />
    </View>
  );
}
