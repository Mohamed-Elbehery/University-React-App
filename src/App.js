import { Routes, Route } from "react-router-dom";
import { Home, About, Courses, Blog, Contact } from './pages';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/University-React-App" element={<Home />} />
        <Route path="/University-React-App/about" element={<About />} />
        <Route path="/University-React-App/courses" element={<Courses />} />
        <Route path="/University-React-App/blog" element={<Blog />} />
        <Route path="/University-React-App/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
