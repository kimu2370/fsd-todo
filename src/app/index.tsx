import Main from "@/pages/main";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";

function App() {
  return (
    <MetaMaskUIProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Martin React Dapp",
          url: window.location.host,
        },
      }}
    >
      <Main />
    </MetaMaskUIProvider>
  );
}

export default App;
