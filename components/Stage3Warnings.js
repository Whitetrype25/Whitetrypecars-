import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Stage3Warnings({ onAcceptChange }) {
  const phases = ['Antes', 'Durante', 'Después'];
  const [accepted, setAccepted] = useState([]);

  const toggle = (phase) => {
    setAccepted((prev) => {
      const next = prev.includes(phase)
        ? prev.filter((p) => p !== phase)
        : [...prev, phase];
      onAcceptChange(next.length === phases.length);
      return next;
    });
  };

  return (
    <View>
      <Text>Advertencias Stage 3:</Text>
      {phases.map((p) => (
        <TouchableOpacity key={p} onPress={() => toggle(p)}>
          <Text style={{ color: accepted.includes(p) ? 'green' : 'black' }}>{p}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
