import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import WritePage from "./pages/WriterPage";
import BookDetails from "./components/BookDetails";
import Login from "./pages/Login";
import Navbar from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './components/Footer'
import Profile from "./pages/Profile";
import WritingDashboard from "./pages/WritingDashboard";
import PublishingPage from "./pages/PublishingPage";
import SearchResults from "./pages/SearchResults";
import MyReadings from "./pages/MyReadings";

export default function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-details/:title" element={<BookDetails />} />
          <Route path="/category" element={<Category />} />
          <Route path="/becomeawriter" element={<WritePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/writing-dashboard" element={<WritingDashboard />} />
          <Route path="/publishing-page" element={<PublishingPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/myreadings" element={<MyReadings />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}
