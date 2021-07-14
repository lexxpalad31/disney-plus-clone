import styled from "styled-components";

const Detail = () => {
  return (
    <DetailContainer>
      <DetailBackground>
        <img
          src="https://img01.mgo-images.com/image/thumbnail/v2/content/1MV0dfe585543d5c85b69b582e7dc3e771d.jpeg"
          alt=""
        />
      </DetailBackground>
      <DetailTitle>
        <img
          src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRpQY94DKbLycJwlh0671gQBcGP1mih-s0LxTpyM5X5Th8B7nJkgFMABXVUinxPCf56cv90-2nMP_dJAT4oLL-TDRI-OA8GQ90ET.png?r=3ef"
          alt=""
        />
      </DetailTitle>
      <DetailControls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </DetailControls>
      <DetailSub>2012 • 2h 44m • Action/Thriller</DetailSub>
      <DetailDesc>
        Bane, an imposing terrorist, attacks Gotham City and disrupts its
        eight-year-long period of peace. This forces Bruce Wayne to come out of
        hiding and don the cape and cowl of Batman again.
      </DetailDesc>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const DetailBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DetailTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const DetailControls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin-right: 16px;
  &:hover {
    background: rgb(198, 198, 198);
  }
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const DetailSub = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const DetailDesc = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 700px;
`;
