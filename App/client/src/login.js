import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LoginForm from "./components/LoginForm";
export default function Login() {
  return (
    <div className="h-screen">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}
