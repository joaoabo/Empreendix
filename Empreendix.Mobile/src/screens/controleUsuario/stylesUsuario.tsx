import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#220641', padding: 24, textAlign: 'center', alignItems: 'center'},
  title: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { color: '#fff', fontSize: 16, marginBottom: 24 },
  input: { marginBottom: 24, backgroundColor: '#f5f5f5', width: '100%', textDecorationColor: '#fff' },
  button: { paddingVertical: 6 },
});

export const stylesOTP = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b0f3b', padding: 24, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { color: '#aaa', fontSize: 16, marginBottom: 32 },
  otpContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 },
  otpInput: {
    backgroundColor: '#1b215a',
    color: '#fff',
    fontSize: 20,
    width: 48,
    height: 58,
    textAlign: 'center',
    borderRadius: 10,
  },
  button: { paddingVertical: 6 },
});