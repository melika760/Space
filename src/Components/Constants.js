import moon from "../assets/destination/image-moon.png"
import Mars from "../assets/destination/image-mars.png"
import Europa from "../assets/destination/image-europa.png"
import Titan from "../assets/destination/image-titan.png"
import Mark from "../assets/crew/image-mark-shuttleworth.png"
import Douglas from "../assets/crew/image-douglas-hurley.png"
import Victor from "../assets/crew/image-victor-glover.png"
import Anousheh from "../assets/crew/image-anousheh-ansari.png"
import Launch from "../assets/technology/image-launch-vehicle-landscape.jpg"
import  capsule from "../assets/technology/image-space-capsule-landscape.jpg"
import spaceport from "../assets/technology/image-spaceport-landscape.jpg"
import Launch2 from "../assets/technology/image-launch-vehicle-portrait.jpg"
import capsule2 from "../assets/technology/image-space-capsule-portrait.jpg"
import spaceport2 from "../assets/technology/image-spaceport-portrait.jpg"
export const datas=[
    {img:moon,
Title:"Moon",
description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
distance:"384,400 KM",
traveltime:"3 DAYS"
    },
{img:Mars,
Title:"Mars",
description:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
distance:"225 MIL. KM",
traveltime:"9 MONTHS"},
{img:Europa,
    Title:"Europa",
    description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance:"628 MIL. KM",
    traveltime:"3 YEARS"},
 {img:Titan,
        Title:"Titan",
        description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance:"1.6 BIL. KM",
        traveltime:"7 YEARS"}
]
export const crewMembers=[
    {
        img:Douglas,
        Title:"Douglas",
        Name:"Douglas Hurley",
        job:"Commander",
        description:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        img:Mark,
        Title:"Mark",
        Name:"MARK SHUTTLEWORTH",
        job:"Mission Specialist",
        description:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        img:Victor,
        Title:"Victor",
        Name:"Victor Glover",
        job:"PILOT",
        description:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    },
    {
        img:Anousheh,
        Title:"Anousheh",
        Name:"Anousheh Ansari",
        job:"Flight Engineer",
        description:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    }
]
export const techs=[
    {
        img:Launch,
        img2:Launch2,
        id:"1",
        Title:"Launch",
        Name:"LAUNCH VEHICLE",
        job:"THE TERMINOLOGY…",
        description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad! "
    },
    {
        img:spaceport,
        img2:spaceport2,
        id:"2",
        Title:"SPACEPORT",
        Name:"SPACEPORT",
        job:"THE TERMINOLOGY…",
        description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        img:capsule,
        img2:capsule2,
        id:"3",
        Title:"CAPSULE",
        Name:"SPACE CAPSULE",
        job:"THE TERMINOLOGY…",
        description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]