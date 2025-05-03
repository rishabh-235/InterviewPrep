import Container from "@/components/Container"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
        {/* handler to store the user data */}
        <Header />

        <Container className="fles-grow">
            <main className="flex-grow">
                <Outlet />
            </main>
        </Container>

        {/* Footer */}
        <Footer />
    </div>
  )
}

export default MainLayout