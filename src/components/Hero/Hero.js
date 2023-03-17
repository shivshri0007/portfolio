import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
        Hello there <br />
        I'm Shivang.
    </SectionTitle>
    <SectionText>
      a Full Stack Developer, love to work for you .
    </SectionText>
    <Button onClick={()=> window.location='https://google.com'}>Learn More</Button>
  </LeftSection>

  </Section>
);

export default Hero;