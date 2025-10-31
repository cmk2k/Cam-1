/**
 * Hydraulics Screen - Pump HP and Valve Cv calculators
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

const HydraulicsScreen: React.FC = () => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  // Pump HP state
  const { control: pumpControl } = useForm({
    defaultValues: {
      gpm: '',
      psi: '',
      efficiency: '0.85',
    },
  });
  const [pumpResult, setPumpResult] = useState('');
  const [showPumpExplain, setShowPumpExplain] = useState(false);

  // Cv Helper state
  const { control: cvControl } = useForm({
    defaultValues: {
      flowRate: '',
      pressureDrop: '',
      specificGravity: '1.0',
    },
  });
  const [cvResult, setCvResult] = useState('');
  const [showCvExplain, setShowCvExplain] = useState(false);

  // Calculate Pump HP
  const calculatePumpHp = (values: any) => {
    const gpm = parseFloat(values.gpm);
    const psi = parseFloat(values.psi);
    const efficiency = parseFloat(values.efficiency);

    if (isNaN(gpm) || isNaN(psi) || isNaN(efficiency)) {
      setPumpResult('Please enter valid numbers');
      return;
    }

    if (efficiency <= 0 || efficiency > 1) {
      setPumpResult('Efficiency must be between 0 and 1 (e.g., 0.85 for 85%)');
      return;
    }

    // hp = (GPM × psi) / (1714 × efficiency)
    const hp = (gpm * psi) / (1714 * efficiency);
    setPumpResult(`Required Horsepower: ${hp.toFixed(2)} hp`);

    // Add to recents
    useAppStore.getState().addRecent({
      id: 'pump-hp',
      type: 'calculator',
      title: 'Pump HP Calculator',
      timestamp: Date.now(),
    });
  };

  // Calculate Cv
  const calculateCv = (values: any) => {
    const flowRate = parseFloat(values.flowRate);
    const pressureDrop = parseFloat(values.pressureDrop);
    const sg = parseFloat(values.specificGravity);

    if (isNaN(flowRate) || isNaN(pressureDrop) || isNaN(sg)) {
      setCvResult('Please enter valid numbers');
      return;
    }

    if (pressureDrop <= 0) {
      setCvResult('Pressure drop must be greater than 0');
      return;
    }

    // Cv = Q × sqrt(SG / ΔP)
    const cv = flowRate * Math.sqrt(sg / pressureDrop);
    setCvResult(`Valve Cv: ${cv.toFixed(2)}`);

    // Add to recents
    useAppStore.getState().addRecent({
      id: 'cv-helper',
      type: 'calculator',
      title: 'Valve Cv Helper',
      timestamp: Date.now(),
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Pump HP Calculator */}
        <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>Pump HP Calculator</Text>

          <Text style={[styles.label, { color: theme.textSecondary }]}>Flow Rate (GPM)</Text>
          <Controller
            control={pumpControl}
            name="gpm"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: theme.surface, color: theme.text, borderColor: theme.border },
                ]}
                placeholder="Enter GPM"
                placeholderTextColor={theme.placeholder}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Text style={[styles.label, { color: theme.textSecondary }]}>Pressure (psi)</Text>
          <Controller
            control={pumpControl}
            name="psi"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: theme.surface, color: theme.text, borderColor: theme.border },
                ]}
                placeholder="Enter psi"
                placeholderTextColor={theme.placeholder}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Text style={[styles.label, { color: theme.textSecondary }]}>
            Efficiency (0-1, default 0.85)
          </Text>
          <Controller
            control={pumpControl}
            name="efficiency"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: theme.surface, color: theme.text, borderColor: theme.border },
                ]}
                placeholder="Enter efficiency (e.g., 0.85)"
                placeholderTextColor={theme.placeholder}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.primary }]}
            onPress={pumpControl.handleSubmit(calculatePumpHp)}
          >
            <Text style={styles.buttonText}>Calculate HP</Text>
          </TouchableOpacity>

          {pumpResult !== '' && (
            <View style={[styles.result, { backgroundColor: theme.surface }]}>
              <Text style={[styles.resultText, { color: theme.text }]}>{pumpResult}</Text>
            </View>
          )}

          <TouchableOpacity onPress={() => setShowPumpExplain(!showPumpExplain)}>
            <Text style={[styles.explainToggle, { color: theme.primary }]}>
              {showPumpExplain ? '▼' : '▶'} Explain
            </Text>
          </TouchableOpacity>

          {showPumpExplain && (
            <View style={[styles.explain, { backgroundColor: theme.surface }]}>
              <Text style={[styles.explainText, { color: theme.text }]}>
                <Text style={{ fontWeight: 'bold' }}>Formula:</Text>
                {'\n'}hp = (GPM × psi) / (1714 × efficiency)
                {'\n\n'}
                <Text style={{ fontWeight: 'bold' }}>Note:</Text> Default efficiency is 0.85 (85%).
                Actual efficiency varies by pump type and condition.
                {'\n\n'}
                <Text style={{ fontWeight: 'bold' }}>Source:</Text> Pages i5–i6
              </Text>
            </View>
          )}
        </View>

        {/* Cv Helper */}
        <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>Valve Cv Helper</Text>

          <View style={[styles.hint, { backgroundColor: theme.warning }]}>
            <Text style={styles.hintText}>
              💡 53% Rule: For best control, downstream pressure should be ~53% of upstream
              pressure
            </Text>
          </View>

          <Text style={[styles.label, { color: theme.textSecondary }]}>Flow Rate (GPM)</Text>
          <Controller
            control={cvControl}
            name="flowRate"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: theme.surface, color: theme.text, borderColor: theme.border },
                ]}
                placeholder="Enter GPM"
                placeholderTextColor={theme.placeholder}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Text style={[styles.label, { color: theme.textSecondary }]}>
            Pressure Drop (psi)
          </Text>
          <Controller
            control={cvControl}
            name="pressureDrop"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: theme.surface, color: theme.text, borderColor: theme.border },
                ]}
                placeholder="Enter ΔP (psi)"
                placeholderTextColor={theme.placeholder}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Text style={[styles.label, { color: theme.textSecondary }]}>
            Specific Gravity (default 1.0 for water)
          </Text>
          <Controller
            control={cvControl}
            name="specificGravity"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: theme.surface, color: theme.text, borderColor: theme.border },
                ]}
                placeholder="Enter SG (1.0 for water)"
                placeholderTextColor={theme.placeholder}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.primary }]}
            onPress={cvControl.handleSubmit(calculateCv)}
          >
            <Text style={styles.buttonText}>Calculate Cv</Text>
          </TouchableOpacity>

          {cvResult !== '' && (
            <View style={[styles.result, { backgroundColor: theme.surface }]}>
              <Text style={[styles.resultText, { color: theme.text }]}>{cvResult}</Text>
            </View>
          )}

          <TouchableOpacity onPress={() => setShowCvExplain(!showCvExplain)}>
            <Text style={[styles.explainToggle, { color: theme.primary }]}>
              {showCvExplain ? '▼' : '▶'} Explain
            </Text>
          </TouchableOpacity>

          {showCvExplain && (
            <View style={[styles.explain, { backgroundColor: theme.surface }]}>
              <Text style={[styles.explainText, { color: theme.text }]}>
                <Text style={{ fontWeight: 'bold' }}>Formula:</Text>
                {'\n'}Cv = Q × √(SG / ΔP)
                {'\n\n'}Where:
                {'\n'}• Q = Flow rate (GPM)
                {'\n'}• SG = Specific gravity (1.0 for water)
                {'\n'}• ΔP = Pressure drop (psi)
                {'\n\n'}
                <Text style={{ fontWeight: 'bold' }}>53% Rule:</Text>
                {'\n'}For optimal valve control, maintain downstream pressure at approximately 53%
                of upstream pressure.
                {'\n\n'}
                <Text style={{ fontWeight: 'bold' }}>Source:</Text> Page i7
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
  hint: {
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },
  hintText: {
    fontSize: fontSize.sm,
    fontWeight: '600',
    color: '#000',
  },
  label: {
    fontSize: fontSize.sm,
    marginBottom: spacing.xs,
    marginTop: spacing.sm,
  },
  input: {
    padding: spacing.md,
    borderRadius: borderRadius.md,
    fontSize: fontSize.md,
    borderWidth: 1,
    marginBottom: spacing.sm,
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

export default HydraulicsScreen;
