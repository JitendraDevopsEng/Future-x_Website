import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "in.co.futurex.app",
  appName: "Future-X",
  webDir: "dist",
  server: { androidScheme: "https" },
  android: { allowMixedContent: false },
};

export default config;
