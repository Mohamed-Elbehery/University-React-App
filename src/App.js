import { Routes, Route } from "react-router-dom";
import { Home, About, Courses, Blog, Contact } from './pages';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
