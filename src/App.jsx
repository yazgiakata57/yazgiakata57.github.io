import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/nav_bar.jsx"
import IntroSection from "./components/intro_page.jsx"
import ContactPage from "./components/contact.jsx"
import cv from "./assets/Guller_Yazgi_Akata_CV.pdf"
import Footer from "./components/Footer.jsx"

function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#211B65] pb-32 text-[#F7F4EE]">
      <Navbar />
      <IntroSection />
      <Footer/>
    </main>
  )
}

function CVPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#211B65] pb-32 text-[#F7F4EE]">
      <Navbar />

      <div className="mx-auto max-w-6xl px-10 py-10">
        <iframe
          src={cv}
          title="CV"
          className="h-[90vh] w-full rounded-2xl"
        />
      </div>
      <p className="mt-5 text-center text-sm italic text-[#B7A8E8]/70">
    Last updated: December 2025.
    </p>
      <Footer/>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}