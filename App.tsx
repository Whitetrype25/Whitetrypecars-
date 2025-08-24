import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Button, Alert } from 'react-native';
import Stage2Config from './components/Stage2Config';
import Stage3Warnings from './components/Stage3Warnings';
import BenchBootForm from './components/forms/BenchBootForm';
import { detectMethod, programs } from './services/ecuDetection';
import { baseStage1, baseStage2, baseStage3 } from './services/pricing';
import { useStore } from './store/app';
import { t } from './i18n';

export default function App() {
  const [ecuRef, setEcuRef] = useState<string>('');
  const [method, setMethod] = useState<string>('');
  const total = useStore((s) => s.total);
  const setStage = useStore((s) => s.setStage);
  const stage = useStore((s) => s.stage);
  const setTotal = useStore((s) => s.setTotal);
  const stage3Accepted = useStore((s) => s.stage3Accepted);
  const setStage3Accepted = useStore((s) => s.setStage3Accepted);

  const handleDetect = () => {
    const m = detectMethod(ecuRef);
    setMethod(m);
    if (m !== 'OBD') {
      Alert.alert(t('notice'), t('method_required', { method: m }));
    }
  };

  const handleSubmit = () => {
    if (stage === 3 && !stage3Accepted) {
      Alert.alert(t('notice'), t('accept_all_phases'));
      return;
    }
    Alert.alert(
      t('request_sent'),
      `ECU: ${ecuRef}\n${t('stage')}: ${stage}\n${t('method')}: ${method}\n${t('price')}: €${total}`,
    );
  };

  const renderStageExtras = () => {
    if (stage === 2) {
      return <Stage2Config onTotalChange={(v: number) => setTotal(v)} />;
    }
    if (stage === 3) {
      return <Stage3Warnings onAcceptChange={(v: boolean) => setStage3Accepted(v)} />;
    }
    return null;
  };

  const handleStageSelect = (s: 1 | 2 | 3) => {
    setStage(s);
    if (s === 1) setTotal(baseStage1);
    if (s === 2) setTotal(baseStage2);
    if (s === 3) setTotal(baseStage3);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>White Trype Cars</Text>
        <Text>{t('intro')}</Text>
        <TextInput
          style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
          placeholder={t('ecu_placeholder')}
          value={ecuRef}
          onChangeText={setEcuRef}
        />
        <Button title={t('detect_method')} onPress={handleDetect} />
        {method ? (
          <View style={{ marginTop: 10 }}>
            <Text>
              {t('method')}: {method}
            </Text>
            <Text>
              {t('compatible_programs')}: {programs[method as keyof typeof programs].join(', ')}
            </Text>
          </View>
        ) : null}

        {method && method !== 'OBD' && <BenchBootForm method={method} />}

        <View style={{ marginVertical: 20 }}>
          <Text>{t('select_stage')}:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <Button title="Stage 1" onPress={() => handleStageSelect(1)} />
            <Button title="Stage 2" onPress={() => handleStageSelect(2)} />
            <Button title="Stage 3" onPress={() => handleStageSelect(3)} />
          </View>
        </View>

        {renderStageExtras()}

        {stage && (
          <Text>
            {t('price')}: €{total}
          </Text>
        )}

        <Button title={t('send_request')} onPress={handleSubmit} />

        <Text style={{ marginTop: 20 }}>{t('help_text')}</Text>
        <Text style={{ marginTop: 10, fontSize: 12, color: '#666' }}>
          {t('legal_disclaimer')}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
