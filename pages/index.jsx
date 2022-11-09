import data from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import React, { useState } from "react";


export default function HomePage() {
  const { playlists, favorites } = data;
  console.log(playlists);

  // const valorFiltro = "programador";
  const [valorFiltro, setFiltro] = useState("");
  return (
    <>
      <CSSReset />
      <Menu
        valorFiltro={valorFiltro}
        setFiltro={setFiltro}
      />
      <Header
        data={data} />
      <Timeline
        title={playlists}
        valorFiltro={valorFiltro}
        favorites={favorites}
      />
    </>
  );
}



