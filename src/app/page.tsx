import Banner from "@/components/Banner/Banner";
import Flow from "@/components/Flow/Flow";
import Footer from "@/components/Footer/Footer";
import Graphic from "@/components/Graphic/Graphic";
import Metrics from "@/components/Metrics/Metrics";
import SectionRevenue from "@/components/Section05_RevenueModel/Section05_RevenueModel";
import SectionHow from "@/components/SectionHow/SectionHow";
import Utilities from "@/components/Utilities/Utilities";
import Vectores from "@/components/Vectores/Vectores";

export default function Home() {
  return (
    <main className="">
      <Banner/>
      <Vectores/>
      <Metrics/>
      <Flow/>
      <SectionHow/>
      <SectionRevenue/>
      <Utilities/>
      <Graphic/>
      <Footer/>
    </main>
  );
}
