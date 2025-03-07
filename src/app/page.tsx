import Hero from "./components/sections/Hero";
import DarkMode from "./components/ui/DarkMode";
import NavBar from "./components/ui/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <DarkMode />
    </>
  );
}
