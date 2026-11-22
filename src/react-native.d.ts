import 'react-native';

declare module 'react-native' {
  interface ViewProps { dataSet?: Record<string, string>; }
  interface TextProps { dataSet?: Record<string, string>; }
  interface ScrollViewProps { dataSet?: Record<string, string>; }
}
