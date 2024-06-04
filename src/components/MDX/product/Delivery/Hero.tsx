import {Content, HeroContainer, StyledContainer} from 'components/Hero';
import SearchComponent from 'components/SearchComponent';

export function DeliveryHero() {
  return (
    <HeroContainer backgroundImage="var(--deliveryhero-bg-image)">
      <StyledContainer>
        <Content>
          <h1>Something something Delivery</h1>
        </Content>
        <SearchComponent />
      </StyledContainer>
    </HeroContainer>
  );
}
