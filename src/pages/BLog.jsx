import Banner from "@/sections/Banner"
import Navbar from "@/sections/Navbar"
import Contact from "@/sections/Contact"
import News from "@/sections/News"

const Blog = () => {

  return (
    <main className="w-full h-full overflow-hidden">
      <Navbar />
      <Banner />
      <News />
      <Contact />
    </main>
  )
}

export default Blog