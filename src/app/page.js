import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Description from "./components/Description";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div >
      <Description />
      <Projects />
    </div>
  );
}
