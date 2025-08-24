import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { t } from '../../i18n';

type Props = { method: string };
const schema = z.object({ name: z.string().min(2), vehicle: z.string().min(2), notes: z.string().optional() });
type FormValues = z.infer<typeof schema>;

export default function BenchBootForm({ method }: Props) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FormValues) => {
    console.log('Bench/Boot request', { method, ...data });
    Alert.alert(t('request_sent'), t('we_contact'));
  };

  return (
    <View>
      <Text>{t('contact_for')} {method}</Text>
      <TextInput placeholder={t('name')} onChangeText={(v) => setValue('name', v)} {...register('name')} />
      <TextInput placeholder={t('vehicle')} onChangeText={(v) => setValue('vehicle', v)} {...register('vehicle')} />
      <TextInput placeholder={t('notes')} onChangeText={(v) => setValue('notes', v)} {...register('notes')} />
      <Button title={t('send')} onPress={handleSubmit(onSubmit)} />
      {Object.keys(errors).length ? <Text style={{color:'red'}}>{t('form_errors')}</Text> : null}
    </View>
  );
}
