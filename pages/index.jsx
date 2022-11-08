import data from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";



export default function HomePage() {
  const { playlists } = data;
  console.log(playlists);

  return (
    <>
      <CSSReset />
      <Menu />
      <Header />
      <Timeline title={playlists} />
    </>
  );
}



