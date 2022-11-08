import styled from "styled-components";
import data from "../../config.json";

const StyledHeader = styled.div`
  .user-info {
    background-color: #F9F9F9;
    display: flex;
    height: 112px;
    align-items: center;
    gap: 14px;
    padding: 32px;
  }
  .user-info img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  img {
    width: 200px;
    height: 80px;
    border-radius: 50%;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src="" alt="" />

      <section className="user-info">
        <img src={`https://github.com/${data.github}.png`} alt="" />
        <div>
          <h2>{data.name}</h2>
          <p>{data.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
