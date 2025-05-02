import { Route, Routes, useLocation } from "react-router-dom";
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
import WriterForm from "./pages/writerPages/WriterForm";
import WriterDashboard from "./pages/writerPages/WriterDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
 

export default function App() {
       const location =  useLocation()

           const hideNavbar =  location.pathname === '/writer-dashboard'
  return (
    <>
      <div className="w-full">
        {!hideNavbar &&  <Navbar /> }
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book-details/:title" element={<BookDetails />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={ 
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          } />
          
          <Route path="/writer-books" element={<WritePage />} />
          <Route path="/writing-dashboard" element={<WritingDashboard />} />
          <Route path="/publishing-page" element={<PublishingPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/myreadings" element={<MyReadings />} />
          <Route path="/becomeawriter" element={
            <ProtectedRoute>
            <WriterForm />
            </ProtectedRoute>
            } />
          <Route path="/writer-dashboard" element={<WriterDashboard />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}
