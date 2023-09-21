import {
  Header,
  CardsSection,
  BigCardSection,
  TextSection,
  VideoSection,
  HorizontalWrapper,
} from "@/components";

export default function Home() {
  return (
    <main className="">
      <Header />
      <CardsSection direction="left" />
      <BigCardSection />
      <CardsSection direction="right" />
      <TextSection />
      <VideoSection />
      <TextSection />
    </main>
  );
}
