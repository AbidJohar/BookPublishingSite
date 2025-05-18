import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import WritePage from "./pages/writerPages/WriterPage";
import BookDetails from "./components/BookDetails";
import Login from "./pages/Login";
import Navbar from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import WritingDashboard from "./pages/writerPages/WritingDashboard";
import PublishingPage from "./pages/writerPages/PublishingPage";
import SearchResults from "./pages/SearchResults";
import MyReadings from "./pages/MyReadings";
import WriterForm from "./pages/writerPages/WriterForm";
import WriterDashboard from "./pages/writerPages/WriterDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import WriterProtectedRoute from "./pages/writerPages/WriterProtectedRoute";
import WriterContentPage from "./pages/writerPages/writerContentPage";

export default function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/writer-dashboard";
  return (
    <>
      <div className="w-full">
        {!hideNavbar && <Navbar />}

        <Routes>
           
          <Route path="/" element={
            <ProtectedRoute>

              <Home />
            </ProtectedRoute>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={
            <ProtectedRoute>
              <Category />

            </ProtectedRoute>
            } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

           <Route path="/book-details/:title" element={<BookDetails />} />
          <Route path="/writer-books" element={<WritePage />} />
          <Route path="/writing-dashboard" element={<WritingDashboard />} />
          <Route path="/publishing-page" element={<PublishingPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/myreadings" element={<MyReadings />} />
          <Route path="/books/content/:id" element={<WriterContentPage />} />
            
          <Route
            path="/becomeawriter"
            element={
              <ProtectedRoute>
                <WriterProtectedRoute redirectTo="/becomeawriter">
                  <WriterForm />
                </WriterProtectedRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/writer-dashboard"
            element={
              <WriterProtectedRoute redirectTo="/writer-dashboard">
                <WriterDashboard />
              </WriterProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
