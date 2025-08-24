import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Button, Alert } from 'react-native';
import Stage2Config from './components/Stage2Config';
import Stage3Warnings from './components/Stage3Warnings';
import BenchBootForm from './components/forms/BenchBootForm';
import { detectMethod, programs } from './services/ecuDetection';
import { baseStage1, baseStage2, baseStage3 } from './services/pricing';

export default function App() {
  const [ecuRef, setEcuRef] = useState('');
  const [stage, setStage] = useState(null);
  const [method, setMethod] = useState('');
  const [total, setTotal] = useState(0);
  const [stage3Accepted, setStage3Accepted] = useState(false);

  const handleDetect = () => {
    const m = detectMethod(ecuRef);
    setMethod(m);
    if (m !== 'OBD') {
      Alert.alert('Aviso', `Esta ECU requiere ${m}. Se mostrará el procedimiento adecuado.`);
    }
  };

  const handleSubmit = () => {
    if (stage === 3 && !stage3Accepted) {
      Alert.alert('Aviso', 'Debes aceptar las advertencias en todas las fases.');
      return;
    }
    Alert.alert(
      'Solicitud enviada',
      `ECU: ${ecuRef}\nStage: ${stage}\nMétodo: ${method}\nPrecio estimado: €${total}`
    );
  };

  const renderStageExtras = () => {
    if (stage === 2) {
      return <Stage2Config onTotalChange={setTotal} />;
    }
    if (stage === 3) {
      return <Stage3Warnings onAcceptChange={setStage3Accepted} />;
    }
    return null;
  };

  const handleStageSelect = (s) => {
    setStage(s);
    if (s === 1) setTotal(baseStage1);
    if (s === 2) setTotal(baseStage2);
    if (s === 3) setTotal(baseStage3);
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
        {method ? (
          <View style={{ marginTop: 10 }}>
            <Text>Método: {method}</Text>
            <Text>Programas compatibles: {programs[method].join(', ')}</Text>
          </View>
        ) : null}

        {method && method !== 'OBD' && <BenchBootForm method={method} />}

        <View style={{ marginVertical: 20 }}>
          <Text>Selecciona Stage:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <Button title="Stage 1" onPress={() => handleStageSelect(1)} />
            <Button title="Stage 2" onPress={() => handleStageSelect(2)} />
            <Button title="Stage 3" onPress={() => handleStageSelect(3)} />
          </View>
        </View>

        {renderStageExtras()}

        {stage && <Text>Precio: €{total}</Text>}

        <Button title="Enviar solicitud" onPress={handleSubmit} />

        <Text style={{ marginTop: 20 }}>
          Si no estás seguro de cómo proceder, puedes enviarnos tu ECU para realizar el servicio en nuestras instalaciones.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
