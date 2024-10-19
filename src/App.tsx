import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRouter from "./route/AppRouter";
import { Toaster } from "sonner";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <Toaster position="top-right" richColors closeButton />
    </Provider>
  );
};

export default App;
