import { CompasIcon } from "../components/CompasIcon";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";

const Report = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 ">
        <Title>Report</Title>
        <SubTitle>Your activities today</SubTitle>
      </div>
      <div>
        <div className="flex flex-col h-[450px] mx-auto justify-center items-center">
          <CompasIcon />
          <SubTitle>You haven&apos;t any activity yet</SubTitle>
        </div>
      </div>
      <div className="">
        <Footer placeholder="I'm working on.." />
      </div>
    </Container>
  );
};

export default Report;
