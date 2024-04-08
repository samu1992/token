import Banner from "@/components/Banner/Banner";
import Flow from "@/components/Flow/Flow";
import Metrics from "@/components/Metrics/Metrics";
import SectionHow from "@/components/SectionHow/SectionHow";
import Vectores from "@/components/Vectores/Vectores";

export default function Home() {
  return (
    <main className="">
      <Banner/>
      <Vectores/>
      <Metrics/>
      <Flow/>
      <SectionHow/>
    </main>
  );
}
