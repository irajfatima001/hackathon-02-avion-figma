import Ceramics from "./components/Ceramics";
import Email from "./components/Email";
import Features from "./components/Features";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Studio from "./components/Studio";

export default function Home(){
    return(
        <div>
            <Header/>
            <Hero/>
            <Features/>
            <Ceramics/>
            <Popular/>
            <Email/>
            <Studio/>
            
        </div>
    )
}