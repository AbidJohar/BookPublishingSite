import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import WritePage from "./pages/writerPages/WriterPage";
import BookDetails from "./components/BookDetails";
import Login from "./pages/Login";
import Navbar from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './components/Footer'
import Profile from "./pages/Profile";
import WritingDashboard from "./pages/writerPages/WritingDashboard";
import PublishingPage from "./pages/writerPages/PublishingPage";
import SearchResults from "./pages/SearchResults";
import MyReadings from "./pages/MyReadings";
import WriterSignInForm from "./pages/writerPages/WriterSignInForm";
import WriterDashboard from "./pages/writerPages/WriterDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book-details/:title" element={<BookDetails />} />
          <Route path="/category" element={<Category />} />
          <Route path="/becomeawriter" element={<WritePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={ 
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          } />
          <Route path="/writing-dashboard" element={<WritingDashboard />} />
          <Route path="/publishing-page" element={<PublishingPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/myreadings" element={<MyReadings />} />
          <Route path="/writeSignForm" element={<WriterSignInForm />} />
          <Route path="/writerDashboard" element={<WriterDashboard />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}
