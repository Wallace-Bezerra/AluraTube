// import data from "../config.json";

import { sendError } from "next/dist/server/api-utils";
import styled from "styled-components";

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    .videos {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }

  .favoritos{
    display:flex;
    gap: 40px;
      .card-favoritos{
        display:flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        img{
          border-radius: 50%;
          width:100px;
          height:100px;
        }
      }
    }
`;



export default function Timeline({ valorFiltro, favorites, ...props }) {
  const playlistName = Object.keys(props.title);

  console.log(favorites)
  return (
    <StyledTimeline>
      {playlistName.map((playlistitem) => {
        const videos = props.title[playlistitem];

        return (
          <section key={playlistitem}>
            <h2>{playlistitem}</h2>
            <div className="videos">
              {videos.filter((filtrovideo) => {
                return filtrovideo.title.toLocaleLowerCase().includes(valorFiltro.toLocaleLowerCase());
              }).map((video, index) => {
                return (
                  <a key={index} href={video.url}>
                    <img src={video.thumb} alt="" />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
      <section >
        <h2>AluraTubes Favoritos</h2>
        <div className="favoritos">
          {favorites.map((favorite) => {
            return (
              <div className="card-favoritos">
                <img src={favorite.thumb} />
                <p>{favorite.nameChanel}</p>
              </div>
            )
          })}
        </div>

      </section>
    </StyledTimeline>
  );
}
