import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Button, Alert } from 'react-native';

const prices = { 1: 50, 2: 120, 3: 180 };

export default function App() {
  const [ecuRef, setEcuRef] = useState('');
  const [stage, setStage] = useState(null);
  const [method, setMethod] = useState('');
  const [extras, setExtras] = useState({ pops: false, egr: false, dpf: false });

  const detectMethod = (ref) => {
    // Lógica de ejemplo. En producción se consultaría una base de datos.
    if (ref.startsWith('OBD')) return 'OBD';
    return 'Bench/Boot';
  };

  const handleDetect = () => {
    const m = detectMethod(ecuRef);
    setMethod(m);
    if (m !== 'OBD') {
      Alert.alert('Aviso', 'Esta ECU requiere ' + m + '. Se mostrará el procedimiento adecuado.');
    }
  };

  const handleSubmit = () => {
    const price = prices[stage] || 0;
    Alert.alert(
      'Solicitud enviada',
      `ECU: ${ecuRef}\nStage: ${stage}\nMétodo: ${method}\nPrecio estimado: €${price}`
    );
  };

  const renderExtras = () => {
    if (stage === 2) {
      return (
        <View style={{ marginVertical: 10 }}>
          <Text>Opciones Stage 2 (primera gratis, +10€ cada adicional)</Text>
          <Text>- Pops & Bangs</Text>
          <Text>- EGR Off</Text>
          <Text>- DPF Off</Text>
        </View>
      );
    }
    if (stage === 3) {
      return (
        <View style={{ marginVertical: 10 }}>
          <Text>Requisitos Stage 3:</Text>
          <Text>- Turbo mejorado</Text>
          <Text>- Inyectores de mayor caudal</Text>
          <Text>- Intercooler eficiente</Text>
          <Text>Asegúrate de cumplirlos antes de continuar.</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
          White Trype Cars
        </Text>
        <Text>Introduce referencia de ECU o selecciona archivo original:</Text>
        <TextInput
          style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
          placeholder="Referencia de ECU"
          value={ecuRef}
          onChangeText={setEcuRef}
        />
        <Button title="Detectar método" onPress={handleDetect} />
        {method ? <Text style={{ marginTop: 10 }}>Método: {method}</Text> : null}

        <View style={{ marginVertical: 20 }}>
          <Text>Selecciona Stage:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <Button title="Stage 1" onPress={() => setStage(1)} />
            <Button title="Stage 2" onPress={() => setStage(2)} />
            <Button title="Stage 3" onPress={() => setStage(3)} />
          </View>
        </View>

        {renderExtras()}

        <Button title="Enviar solicitud" onPress={handleSubmit} />

        <Text style={{ marginTop: 20 }}>
          Si no estás seguro de cómo proceder, puedes enviarnos tu ECU para realizar el servicio en nuestras instalaciones.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
