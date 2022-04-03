import React from "react";
import { Button, SecondaryButton } from "../components/GlobalStyle";
import {
  StyledCard,
  TextContainer,
  SecondaryTextContainer,
  LeftStyledCard,
  SecondaryPageContainer,
  MainContainer,
  SecondContainer,
} from "../style";

// Images
import ArrowRight from "../assets/arrow-right.svg";
import Andrew from "../assets/andewimage.png";
import analyzeCV from "../assets/analyzeCV.png";
import applyJobs from "../assets/applyJobs.png";
import arrowRightBlack from "../assets/arrow-right-black.svg";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <MainContainer>
      <StyledCard>
        <TextContainer>
          <h1>Make your Resume</h1>
          <p>
            Build your resume on our website and get a free analysis report of
            your Resume from our AI algorithm
          </p>
          <Link to="/createResume">
            <Button>
              Continue <img src={ArrowRight} alt="" />
            </Button>
          </Link>
        </TextContainer>
        <div className="container">
          <img src={Andrew} alt="" />
        </div>
      </StyledCard>
      <SecondaryPageContainer>
        <LeftStyledCard>
          <SecondaryTextContainer>
            <h1>Analyze Your CV</h1>
            <p>Analyze your CV with our machine learning Algorithm</p>
          </SecondaryTextContainer>
          <SecondContainer>
            <div>
              <SecondaryButton>
                Analyze CV <img src={arrowRightBlack} alt="" />
              </SecondaryButton>
            </div>
            <img src={analyzeCV} alt="" />
          </SecondContainer>
        </LeftStyledCard>
        <LeftStyledCard>
          <SecondaryTextContainer>
            <h1>Apply for Jobs</h1>
            <p>Search for jobs on our platform and apply for them</p>
          </SecondaryTextContainer>
          <SecondContainer>
            <div>
              <SecondaryButton>
                Analyze CV <img src={arrowRightBlack} alt="" />
              </SecondaryButton>
            </div>

            <img src={applyJobs} alt="" />
          </SecondContainer>
        </LeftStyledCard>
      </SecondaryPageContainer>
    </MainContainer>
  );
};
export default MainPage;
