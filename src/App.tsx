import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRouter from "./route/AppRouter";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
