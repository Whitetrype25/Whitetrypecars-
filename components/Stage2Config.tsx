import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { baseStage2, extraOptionPrice } from '../services/pricing';
import { t } from '../i18n';

const extrasList = ['Pops & Bangs', 'Launch Control', 'EGR Off', 'DPF Off'];

type Props = { onTotalChange: (total: number) => void };

export default function Stage2Config({ onTotalChange }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (extra: string) => {
    setSelected((prev) => {
      const next = prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra];
      const total = baseStage2 + Math.max(0, next.length - 1) * extraOptionPrice;
      onTotalChange(total);
      return next;
    });
  };

  return (
    <View>
      <Text>{t('extras')}:</Text>
      {extrasList.map((extra) => (
        <TouchableOpacity key={extra} onPress={() => toggle(extra)}>
          <Text style={{ color: selected.includes(extra) ? 'green' : 'black' }}>{extra}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
