/**
 * Converters Screen - Temperature and HP↔Torque converters
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useAppStore } from '../store/useAppStore';
import { lightTheme, darkTheme, spacing, fontSize, borderRadius } from '../utils/theme';

const ConvertersScreen: React.FC = () => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  // Temperature state
  const [tempValue, setTempValue] = useState('');
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('F');
  const [tempResult, setTempResult] = useState('');
  const [showTempExplain, setShowTempExplain] = useState(false);

  // HP/Torque state
  const { control, watch } = useForm({
    defaultValues: {
      rpm: '',
      hp: '',
      torque: '',
    },
  });
  const [hpTorqueResult, setHpTorqueResult] = useState('');
  const [showHpExplain, setShowHpExplain] = useState(false);

  const rpm = watch('rpm');
  const hp = watch('hp');
  const torque = watch('torque');

  // Temperature conversion
  const convertTemperature = () => {
    const value = parseFloat(tempValue);
    if (isNaN(value)) {
      setTempResult('Please enter a valid number');
      return;
    }

    if (tempUnit === 'F') {
      // F to C: C = 0.56 × (F – 32)
      const celsius = 0.56 * (value - 32);
      setTempResult(`${value}°F = ${celsius.toFixed(2)}°C`);
    } else {
      // C to F: F = (1.8 × C) + 32
      const fahrenheit = 1.8 * value + 32;
      setTempResult(`${value}°C = ${fahrenheit.toFixed(2)}°F`);
    }

    // Add to recents
    useAppStore.getState().addRecent({
      id: 'temp-cf',
      type: 'calculator',
      title: 'Temperature Converter',
      timestamp: Date.now(),
    });
  };

  // HP ↔ Torque conversion
  const convertHpTorque = () => {
    const rpmVal = parseFloat(rpm);
    const hpVal = parseFloat(hp);
    const torqueVal = parseFloat(torque);

    if (isNaN(rpmVal) || rpmVal <= 0) {
      setHpTorqueResult('Please enter a valid RPM');
      return;
    }

    if (!isNaN(hpVal) && hpVal > 0) {
      // Calculate torque from HP
      // Torque(in-lb) = (63025 × hp) / rpm
      const torqueInLb = (63025 * hpVal) / rpmVal;
      const torqueFtLb = (5252 * hpVal) / rpmVal;
      setHpTorqueResult(
        `Torque: ${torqueInLb.toFixed(2)} in-lb\nTorque: ${torqueFtLb.toFixed(2)} ft-lb`
      );
    } else if (!isNaN(torqueVal) && torqueVal > 0) {
      // Calculate HP from torque (assuming in-lb)
      // hp = (Torque(in-lb) × rpm) / 63025
      const horsePower = (torqueVal * rpmVal) / 63025;
      setHpTorqueResult(`Horsepower: ${horsePower.toFixed(2)} hp`);
    } else {
      setHpTorqueResult('Please enter either HP or Torque');
      return;
    }

    // Add to recents
    useAppStore.getState().addRecent({
      id: 'hp-torque',
      type: 'calculator',
      title: 'HP ↔ Torque Converter',
      timestamp: Date.now(),
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Temperature Converter */}
        <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>
            Temperature °C ↔ °F
          </Text>

          <View style={styles.inputRow}>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: theme.surface, color: theme.text, borderColor: theme.border },
              ]}
              placeholder="Enter value"
              placeholderTextColor={theme.placeholder}
              keyboardType="numeric"
              value={tempValue}
              onChangeText={setTempValue}
            />
            <View style={styles.unitToggle}>
              <TouchableOpacity
                style={[
                  styles.unitButton,
                  tempUnit === 'F' && { backgroundColor: theme.primary },
                ]}
                onPress={() => setTempUnit('F')}
              >
                <Text
                  style={[
                    styles.unitText,
                    { color: tempUnit === 'F' ? '#FFF' : theme.text },
                  ]}
                >
                  °F
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.unitButton,
                  tempUnit === 'C' && { backgroundColor: theme.primary },
                ]}
                onPress={() => setTempUnit('C')}
              >
                <Text
                  style={[
                    styles.unitText,
                    { color: tempUnit === 'C' ? '#FFF' : theme.text },
                  ]}
                >
                  °C
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.primary }]}
            onPress={convertTemperature}
          >
            <Text style={styles.buttonText}>Convert</Text>
          </TouchableOpacity>

          {tempResult !== '' && (
            <View style={[styles.result, { backgroundColor: theme.surface }]}>
              <Text style={[styles.resultText, { color: theme.text }]}>{tempResult}</Text>
            </View>
          )}

          <TouchableOpacity onPress={() => setShowTempExplain(!showTempExplain)}>
            <Text style={[styles.explainToggle, { color: theme.primary }]}>
              {showTempExplain ? '▼' : '▶'} Explain
            </Text>
          </TouchableOpacity>

          {showTempExplain && (
            <View style={[styles.explain, { backgroundColor: theme.surface }]}>
              <Text style={[styles.explainText, { color: theme.text }]}>
                <Text style={{ fontWeight: 'bold' }}>Formulas:</Text>
                {'\n'}C = 0.56 × (F – 32)
                {'\n'}F = (1.8 × C) + 32
                {'\n\n'}
                <Text style={{ fontWeight: 'bold' }}>Source:</Text> Page i3
              </Text>
            </View>
          )}
        </View>

        {/* HP ↔ Torque Converter */}
        <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>HP ↔ Torque</Text>

          <Text style={[styles.label, { color: theme.textSecondary }]}>RPM (required)</Text>
          <Controller
            control={control}
            name="rpm"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: theme.surface, color: theme.text, borderColor: theme.border },
                ]}
                placeholder="Enter RPM"
                placeholderTextColor={theme.placeholder}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Text style={[styles.label, { color: theme.textSecondary }]}>
            Horsepower (enter HP or Torque)
          </Text>
          <Controller
            control={control}
            name="hp"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: theme.surface, color: theme.text, borderColor: theme.border },
                ]}
                placeholder="Enter HP"
                placeholderTextColor={theme.placeholder}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Text style={[styles.label, { color: theme.textSecondary }]}>
            Torque (in-lb) (enter HP or Torque)
          </Text>
          <Controller
            control={control}
            name="torque"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: theme.surface, color: theme.text, borderColor: theme.border },
                ]}
                placeholder="Enter Torque (in-lb)"
                placeholderTextColor={theme.placeholder}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.primary }]}
            onPress={convertHpTorque}
          >
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableOpacity>

          {hpTorqueResult !== '' && (
            <View style={[styles.result, { backgroundColor: theme.surface }]}>
              <Text style={[styles.resultText, { color: theme.text }]}>{hpTorqueResult}</Text>
            </View>
          )}

          <TouchableOpacity onPress={() => setShowHpExplain(!showHpExplain)}>
            <Text style={[styles.explainToggle, { color: theme.primary }]}>
              {showHpExplain ? '▼' : '▶'} Explain
            </Text>
          </TouchableOpacity>

          {showHpExplain && (
            <View style={[styles.explain, { backgroundColor: theme.surface }]}>
              <Text style={[styles.explainText, { color: theme.text }]}>
                <Text style={{ fontWeight: 'bold' }}>Formulas:</Text>
                {'\n'}hp = (Torque(in-lb) × rpm) / 63,025
                {'\n'}Torque(in-lb) = (63,025 × hp) / rpm
                {'\n\n'}For ft-lb: Use 5,252 instead of 63,025
                {'\n\n'}
                <Text style={{ fontWeight: 'bold' }}>Source:</Text> Pages i5–i6
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: spacing.md,
  },
  card: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    marginBottom: spacing.lg,
  },
  cardTitle: {
    fontSize: fontSize.xl,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  inputRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  input: {
    flex: 1,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    fontSize: fontSize.md,
    borderWidth: 1,
    marginBottom: spacing.sm,
  },
  unitToggle: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  unitButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    minWidth: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unitText: {
    fontSize: fontSize.md,
    fontWeight: '600',
  },
  label: {
    fontSize: fontSize.sm,
    marginBottom: spacing.xs,
    marginTop: spacing.sm,
  },
  button: {
    padding: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  buttonText: {
    color: '#FFF',
    fontSize: fontSize.md,
    fontWeight: '600',
  },
  result: {
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginTop: spacing.md,
  },
  resultText: {
    fontSize: fontSize.lg,
    fontWeight: '600',
  },
  explainToggle: {
    fontSize: fontSize.md,
    fontWeight: '600',
    marginTop: spacing.md,
  },
  explain: {
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginTop: spacing.sm,
  },
  explainText: {
    fontSize: fontSize.sm,
    lineHeight: 20,
  },
});

export default ConvertersScreen;
