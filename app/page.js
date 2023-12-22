import HomeHeader from "./Components/Home/HomeHeader";
import HomeMiddle from "./Components/Home/HomeMiddle/HomeMiddle";
import Experience from "./Components/Experience/Experience";

export default function Home() {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <HomeMiddle></HomeMiddle>
      <Experience></Experience>
    </div>
  );
}
