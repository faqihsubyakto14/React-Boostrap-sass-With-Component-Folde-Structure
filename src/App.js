import Navbar from './Component/Navbar';
import "../src/assets/css/style.css"
import IntroSection from './Component/Intro-section';
import Information from './Component/Information';
import Trip from './Component/Trip';
import Layout from './Layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <IntroSection />
        <Information />
        <Trip />
      </Layout>
    </>
  );
}

export default App;
