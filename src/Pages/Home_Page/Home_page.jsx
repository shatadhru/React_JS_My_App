import GradientCard from "../../Page_Components/Home_Page_Components/Gradiant_Card_Design"
import Home_Page_Body_Components from "../../Page_Components/Home_Page_Components/Home_Page_Body_Components"
import Home_Page_Navbar_Component from "../../Page_Components/Home_Page_Components/Home_Page_Navbar_Component"
import "./Home_Page.css"
function Home_page() {
  return (
    <div>
      <section className="Home_Page">
<Home_Page_Navbar_Component />
<Home_Page_Body_Components />
<GradientCard />

      </section>
     
    </div>
  )
}

export default Home_page
