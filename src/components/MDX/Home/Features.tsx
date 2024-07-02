import styled from 'styled-components';

import SectionContainer from 'components/Home/SectionContainer';
import {sections} from 'config/home/sections';
import {HomepageSectionGroup} from 'utils/Types';

import Container from '../../Layout/Container';

const StyledFeatures = styled.div`
  .grouped-sections {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center; /* Center the items */
  }

  .grouped-sections > * {
    flex: 1 1 calc(50% - 20px);
    min-width: 400px;
    // max-width: calc(50% - 20px);
    box-sizing: border-box;
  }

  @media (max-width: 820px) {
    .grouped-sections > * {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;

export default function HomeFeatures() {
  return (
    <StyledFeatures>
      <Container>
        <div className="grouped-sections">
          {(sections as HomepageSectionGroup[]).map((section) => (
            <SectionContainer
              key={section.heading}
              className={section.className}
              icon={section.icon}
              heading={section.heading}
              subheading={section.subheading}
              href={section.href}
              sections={section.sections}
            />
          ))}
        </div>
      </Container>
    </StyledFeatures>
  );
}
