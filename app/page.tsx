import { AuroraBackgroundDemo } from "@/components/AuroraBackground";
import WobbleCards from "@/components/WobbleCards";
import { BackgroundBoxesFooter } from "@/components/Footer";
import Thirddiv from "@/components/ui/Thirddiv";

export default function Home() {
    return (
        <div>
            <AuroraBackgroundDemo></AuroraBackgroundDemo>

            <WobbleCards></WobbleCards>
            <div>
                <h1>
                    Hello
                </h1>
                <div>
                    <Thirddiv></Thirddiv>
                </div>
            </div>


        </div>
    );
}
