import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 30px 30px 0;

  @media(min-width: 768px) {
    width: 60%;
    margin: 0 auto;
  }

  @media(min-width: 1500px) {
    width: 900px;
  }
`;

export const ContentContainer = styled.div`

`;

export const EventListContainer = styled.div`
  font-size: 16px;
  height: 100vh;

  & > div {
    height: 100vh;
  }
`;

export const EventsManageContainer = styled.div`

`;

export const EventContainer = styled.div`

`;

export const CalendarContainer = styled.div`
  flex-grow: 1;
`;

