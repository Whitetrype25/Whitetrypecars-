import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { t } from '../i18n';

type Props = { onAcceptChange: (accepted: boolean) => void };
export default function Stage3Warnings({ onAcceptChange }: Props) {
  const phases = [t('before'), t('during'), t('after')];
  const [accepted, setAccepted] = useState<string[]>([]);

  const toggle = (phase: string) => {
    setAccepted((prev) => {
      const next = prev.includes(phase) ? prev.filter((p) => p !== phase) : [...prev, phase];
      onAcceptChange(next.length === phases.length);
      return next;
    });
  };

  return (
    <View>
      <Text>{t('stage3_warnings')}:</Text>
      {phases.map((p) => (
        <TouchableOpacity key={p} onPress={() => toggle(p)}>
          <Text style={{ color: accepted.includes(p) ? 'green' : 'black' }}>{p}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
