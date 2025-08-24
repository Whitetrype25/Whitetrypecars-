import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { baseStage2, extraOptionPrice } from '../services/pricing';

const extrasList = [
  'Pops & Bangs',
  'Launch Control',
  'EGR Off',
  'DPF Off',
];

export default function Stage2Config({ onTotalChange }) {
  const [selected, setSelected] = useState([]);

  const toggle = (extra) => {
    setSelected((prev) => {
      const next = prev.includes(extra)
        ? prev.filter((e) => e !== extra)
        : [...prev, extra];
      const total = baseStage2 + Math.max(0, next.length - 1) * extraOptionPrice;
      onTotalChange(total);
      return next;
    });
  };

  return (
    <View>
      <Text>Extras:</Text>
      {extrasList.map((extra) => (
        <TouchableOpacity key={extra} onPress={() => toggle(extra)}>
          <Text style={{ color: selected.includes(extra) ? 'green' : 'black' }}>{extra}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
