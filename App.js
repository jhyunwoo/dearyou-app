import * as React from "react";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{ uri: "https://dearyou.moveto.kr" }}
      javaScriptCanOpenWindowsAutomatically={true}
      style={{ marginTop: 40 }}
    />
  );
}
