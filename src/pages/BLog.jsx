import Header from "@/sections/Header"
import Banner from "@/sections/Banner"
import Navbar from "@/sections/Navbar"
import Footer from "@/sections/Footer"
import Contact from "@/sections/Contact"
import News from "@/sections/News"

const Blog = () => {

  return (
    <main className="w-full h-full overflow-hidden">
      <Header />
      <Navbar />
      <Banner />
      <News />
      <Contact />
      <Footer />
    </main>
  )
}

export default Blog