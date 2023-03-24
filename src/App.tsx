import Header from './components/header/Header';
import Features from './components/features/Features';
import MainScreen from './components/mainScreen/MainScreen';
import Reviews from './components/reviews/Reviews';
import './fonts.sass';
import './style.sass';



function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
      <div className="reviews-features-wrapper">
        <Reviews />
        <Features />
      </div>
    </div>
  );
}

export default App;
