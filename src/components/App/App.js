import MainWeather from "../../resources/main/Main";
import ErrorBoundary from "../../resources/errorBoundary/ErrorBoundary";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MainWeather/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
