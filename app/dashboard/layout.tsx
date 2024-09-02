import Navbar from "../../components/navbar";
import Slider from "../../components/slider";
import { NotificationProvider } from "web3uikit";

export default function dashboardlayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <NotificationProvider> */}
      <Navbar />
      <Slider />
      <div className=" justify-center text-center mt-10"> {children} </div>
      {/* <nav>{props.nav}</nav> for @slider folder*/}
      {/* </NotificationProvider>*/}
    </div>
  );
}
