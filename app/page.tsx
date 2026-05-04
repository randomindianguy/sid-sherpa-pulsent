import { Hero } from "./components/Hero";
import { AuditContext } from "./components/AuditContext";
import { Layer2 } from "./components/Layer2";
import { Findings } from "./components/Findings";
import { Experiments } from "./components/Experiments";
import { About } from "./components/About";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AuditContext />
      <Layer2 />
      <Findings />
      <Experiments />
      <About />
    </main>
  );
}
