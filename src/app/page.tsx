"server component"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import RateableSkill from "@/components/rateable-skill/rateable-skill"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby, faBriefcase, faBuilding, faEnvelope, faGraduationCap, faLaptopCode, faSchool, faSchoolFlag } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import Image from 'next/image'

import TelekomLogo from "../../public/images/dl-telekom-logo-01.jpg"
import DieMedialenLogo from "../../public/images/diemedialen.png"
import FKIELogo from "../../public/images/FKIE-Logo.png"
import SilvioPortraitHell from "../../public/images/silvioPortrait_hell.jpg"
import kennicPortait from "../../public/images/kennicPortait.jpg"


type Skill = { name: string, rating: number };
type SkillPage = { "left": Skill[], "right": Skill[] };

const SKILLS: SkillPage = {
  "left": [{ name: "HTML/CSS", rating: 5 }, { name: "Angular", rating: 4.5 }, { name: "React", rating: 3.5 }, { name: "REST", rating: 5 }, { name: "Git", rating: 3.5 }, { name: "Docker", rating: 3.5 }, { name: "Kubernetes", rating: 3.5 }],
  "right": [{ name: "Java- & TypeScript", rating: 4.5 }, { name: "Kafka", rating: 3.5 }, { name: "CI/CD", rating: 3.5 }, { name: "Java", rating: 4 }, { name: "Spring-Boot", rating: 4 }, { name: "SQL", rating: 4 }, { name: "C#", rating: 3.5 }],
};


const EXPERTISE: SkillPage = {
  "left": [{ name: "Kreatives Denken", rating: 4.5 }, { name: "Kommunikation", rating: 5 }, { name: "Strategisches Denken", rating: 4 }, { name: "Führungskompetenzen", rating: 4 }, { name: "Agilität (SCRUM/SAFe)", rating: 3.5 }],
  "right": [{ name: "Deutsch", rating: 5 }, { name: "Englisch", rating: 4 }],
};

export default function Home() {
  function sortAndMapSkills(skills: Skill[], direction: string) {
    return skills.sort((skillA, skillB) => skillB!.rating - skillA!.rating).map(skill => <RateableSkill key={skill!.name} direction={direction} rating={skill!.rating} text={skill!.name} />)
  }

  return (
    <main className="bg-gray-900 w-full pt-12 sm:pl-6 sm:pr-6 xs:pl-1 xs:pr-1 flex justify-center font-sans text-gray-50 text-base min-h-full">
      <div className="container grid gap-4 justify-start items-start max-w-screen-lg sm:grid-cols-[auto_minmax(0,_1fr)__minmax(0,_1fr)_auto] grid-cols-[auto_minmax(0,_1fr)_auto] grid-rows-[repeat(7,auto)_1fr_3rem] sm:grid-rows-[repeat(6,auto)_1fr_3rem]">
        <div className="relative p-1 border-4 border-r-0 border-b-0 border-yellow-500 w-full h-full !row-start-1 sm:row-span-1 row-span-2 !col-start-2 sm:col-span-2 col-span-1 before:absolute before:-top-full before:right-0 before:h-full before:w-full before:border-r-4 before:border-yellow-500">
        </div>
        <span className="font-mono font-medium mt-10 sm:text-left text-center w-full col-start-2 col-span-1 row-start-1 row-span-1 p-4">
          <h2 className="lg:text-8xl md:text-8xl sm:text-7xl text-6xl text-gray-50">Tim
          </h2>
          <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-7xl text-yellow-500 font-extrabold">Pütz
          </h1>
        </span>
        <h3 className="lg:text-3xl md:text-3xl text-2xl rotate-180 col-start-1 col-span-1 justify-self-center self-center row-start-1 sm:row-span-1 row-span-2 [writing-mode:vertical-lr]">
          <span>Software Entwickler</span>
        </h3>
        <div className="sm:m-16 sm:mr-0 m-8 sm:justify-self-end justify-self-center self-center sm:col-start-3 col-start-2 col-span-1 sm:row-start-1 row-start-2 row-span-1 md:hover:rotate-[-360deg] md:hover:transition-transform md:hover:duration-1000 relative origin-center">
          <div className="flex flex-col items-start justify-center lg:w-52 lg:h-52 md:w-48 md:h-48 w-40 h-40 relative sm:drop-shadow-[0_0_8rem_rgba(255,255,255,0.05)] drop-shadow-[0_0_2rem_rgba(255,255,255,0.05)]">
            <div className="h-1/2 w-full rounded-t-full border-yellow-500 border-2 border-b-0 relative bg-point-grid bg-[length:3px_3px]">
              <div className="inline-block w-full h-full scale-[150%] absolute -translate-y-[25%] bottom-0 left-1/2 -translate-x-1/2 z-10 bg-[url('/images/ProfilClean-min.png')] bg-no-repeat bg-top bg-[length:auto_200%]">
              </div>
            </div>
            <div className="h-1/2 w-full rounded-b-full border-yellow-500 border-2 border-t-0 relative overflow-hidden bg-point-grid bg-[length:3px_3px]">
              <div className="inline-block w-full h-full scale-[150%] absolute translate-y-[25%] top-0 left-1/2 -translate-x-1/2 z-10 bg-[url('/images/ProfilClean-min.png')] bg-no-repeat bg-bottom bg-[length:auto_200%]">
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-1 sm:row-start-1 row-start-2 self-end row-span-1 sm:w-[calc(100%+0.5rem+2px)] w-full h-1 bg-yellow-500 border-0">
        </div>
        <div className="col-start-2 sm:col-start-2 col-span-1 sm:row-start-2 row-start-3 row-span-4 w-1 bg-yellow-500 -translate-y-4 sm:translate-x-2.5 sm:justify-self-end justify-self-end h-[calc(100%+2rem)]">
        </div>
        <h3 className="sm:col-start-2 sm:col-span-2 col-span-1 col-start-3 sm:row-start-2 row-start-3 sm:row-span-1 row-span-2 justify-self-center self-center flex items-center justify-center h-12 lg:text-3xl md:text-3xl text-2xl bg-gray-900 z-10 sm:[writing-mode:horizontal-tb] [writing-mode:vertical-lr]">
          <span>Fähigkeiten</span>
        </h3>
        <div className="flex flex-col items-stretch col-start-2 col-span-1 row-start-3 row-span-1 pr-4 w-full">
          {sortAndMapSkills(SKILLS.left, "right")}
        </div>
        <div className="flex flex-col items-stretch col-start-2 sm:col-start-3 col-span-1 sm:row-start-3 row-start-4 row-span-1 sm:pl-4 sm:pr-0 pr-4 w-full">
          {sortAndMapSkills(SKILLS.right, "left")}
        </div>
        <h3 className="sm:col-start-2 sm:col-span-2 col-span-1 col-start-3 sm:row-start-4 row-start-5 sm:row-span-1 row-span-2 justify-self-center self-center flex items-center justify-center h-12 lg:text-3xl md:text-3xl text-2xl bg-gray-900 z-10 sm:[writing-mode:horizontal-tb] [writing-mode:vertical-lr]">
          <span>Kentnisse
          </span>
        </h3>
        <div className="flex flex-col items-stretch col-start-2 col-span-1 row-start-5 row-span-1 pr-4 sm:mb-12">
          {sortAndMapSkills(EXPERTISE.left, "right")}
        </div>
        <div className="flex flex-col items-stretch col-start-2 sm:col-start-3 col-span-1 sm:row-start-5 row-start-6 row-span-1 sm:pl-4 sm:pr-0 pr-4">
          {sortAndMapSkills(EXPERTISE.right, "left")}
        </div>
        {/* style={ {"writing-mode": "vertical-rl"} */}
        <h3 className="lg:text-3xl md:text-3xl text-2xl rotate-180 sm:rotate-0 sm:col-start-4 col-start-1 col-span-1 sm:row-start-6 row-start-7 row-span-1 justify-self-center self-center [writing-mode:vertical-rl]">Empfehlungen</h3>
        <div className="!col-start-2 sm:col-span-2 col-span-1 sm:row-start-6 row-start-7 row-span-1 flex flex-col p-4 border-4 border-yellow-500 border-r-0 border-b-0 sm:border-b-4 sm:border-r-4 relative sm:after:hidden after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-yellow-500">
          <div className="p-7 text-base font-normal text-left justify-self-end relative flex justify-end">
            <span className="inline-block rounded-2xl bg-gray-800 p-4 italic text-gray-100">
              <q>[...] Er ist ein immer belastbarer Mitarbeiter, dessen Arbeitsqualität uns auch bei wechselnden Anforderungen jederzeit überzeugt. Seine Arbeitsweise ist stets von äußerster Sorgfalt, Präzision und Konzentration geprägt. Er überzeugt durch sein großes Engagement und einen hohen Leistungswillen. Er übernimmt stets auch zusätzliche Verantwortung. Herr Pütz erbringt kontinuierlich und ausnahmslos Arbeit von sehr hoher Qualität. [...]</q>
            </span>
            <div className="object-cover rounded-full w-14 h-14 absolute right-0 top-0 border-2 border-gray-900 overflow-hidden">
              <Image src={TelekomLogo} alt="Deutsche Telekom Logo" fill={true} />
            </div>
            <a href="https://www.telekom.de/" target="_blank" className="absolute right-16 top-0">
              <span className="font-bold">Deutsche Telekom IT GmbH
              </span>
            </a>
          </div>

          <div className="p-7 text-base font-normal text-left justify-self-start relative flex justify-start">
            <span className="inline-block rounded-2xl bg-gray-100 p-4 italic text-gray-900">
              <q>Tim ist ein Entwickler, der die Lösung von Anfang an klar vor Augen hat und sich dann schrittweise mit hoher Kompetenz herantastet. Ich vermisse die vielen konstruktiven Diskussionen mit ihm im Büro. Auch die witzigen Kommentare zu Notepad++ bleiben mir in Erinnerung.</q>
            </span>
            <div className="object-cover rounded-full w-14 h-14 absolute left-0 top-0 border-2 border-gray-900 overflow-hidden">
              <Image src={SilvioPortraitHell} alt="Silvio Kresse Profilbild" fill={true} />
            </div>
            <a href="mailto:silvio.kresse@telekom.de" className="absolute left-16 top-0">
              <span className="font-bold">Silvio Kresse
              </span> / <span className="italic">Deutsche Telekom IT GmbH
              </span>
            </a>
          </div>
          <div className="p-7 text-base font-normal text-left justify-self-end relative flex justify-end">
            <span className="inline-block rounded-2xl bg-gray-800 p-4 italic text-gray-100">
              <q>Ich habe Tim Pütz während meines dualen Studiums bei der deutschen Telekom IT GmbH als Kollege, betrieblichen Betreuer und Mentor kennengelernt. Dabei habe ich besonders geschätzt, dass er bei Problemlösungen auf Detailebene stets das Gesamtbild der Applikation und die Interessen der Stakeholder im Blick hat. Zudem konnte ich durch seine praxisbezogenen Erklärungen, von beispielsweise komplexen Architekturansätzen, meine eigenen Fähigkeiten enorm erweitern.</q>
            </span>
            <div className="object-cover rounded-full w-14 h-14 absolute right-0 top-0 border-2 border-gray-900 overflow-hidden">
              <Image src={kennicPortait} alt="Ken-Nic Schuster Profilbild" fill={true} />
            </div>
            <a href="https://www.linkedin.com/in/ken-nic-schuster/" target="_blank" className="absolute right-16 top-0">
              <span className="font-bold">Ken-Nic Schuster
              </span> / <span className="italic">Comsysto Reply GmbH
              </span>
            </a>
          </div>

          
          <div className="p-7 text-base font-normal text-left justify-self-start relative flex justify-start">
            <span className="inline-block rounded-2xl bg-gray-100 p-4 italic text-gray-900">
              <q>[...] Herr Pütz war ein stehts äußerst motivierter Mitarbeiter. [...] Er überzeugt in seinen Tätigkeiten stets in qualitativer und quantitativer Hinsicht. [...] Wir danken Herrn Pütz für die stets hervorragende Zusammenarbeit. Für seinen weiteren Berufs- un Lebensweg wünschen wir ihm alles Gute und weiterhin viel Erfolg.</q>
            </span>
            <div className="object-cover rounded-full w-14 h-14 absolute left-0 top-0 border-2 border-gray-900 overflow-hidden">
              <Image src={DieMedialenLogo} alt="Die Medialen Logo" fill={true} />
            </div>
            <a href="https://www.diemedialen.de/" target="_blank" className="absolute left-16 top-0">
            <span className="font-bold">Christof Mamrot</span> / <span className="italic">Die Medialen</span>
            </a>
          </div>
          
          <div className="p-7 text-base font-normal text-left justify-self-end relative flex justify-end">
            <span className="inline-block rounded-2xl bg-gray-800 p-4 italic text-gray-100">
              <q>[...] Er verfügt über eine gute Ausffassungsgabe und passte sich schnell der neuen Situiation erfolgreich an. Bei der Erledigung seiner Aufgaben zeichnete er sich durch Gewissenhaftigkeit, Fleiß und Selbständigkeit aus. [...]</q>
            </span>
            <div className="object-cover rounded-full w-14 h-14 absolute right-0 top-0 border-2 border-gray-900 overflow-hidden">
              <Image src={FKIELogo} alt="Die Medialen Logo" fill={true} />
            </div>
            <a href="https://www.fkie.fraunhofer.de" target="_blank" className="absolute right-16 top-0">
            <span className="font-bold">Dr. Wunder</span> / <span className="italic">Frauenhofer FKIE</span>
            </a>
          </div>
        </div>
        <div className="col-start-2 col-span-1 row-start-[8] row-span-1 h-[calc(100%+2rem)] w-1 bg-yellow-500 self-center sm:justify-self-end justify-self-center sm:translate-x-2.5 sm:row-start-7">
        </div>
        <div className="flex flex-col !col-start-2 col-span-1 row-start-[8] row-span-1 w-full h-full p-4 justify-start items-center sm:row-start-7 sm:col-span-2 z-20 relative">
          <div className="md:w-[calc(50%)] md:relative flex flex-col text-center md:text-left md:self-end md:pl-8">
            <h4 className="pt-10 md:pr-20 md:pt-0 md:pb-2 lg:text-5xl text-3xl font-bold text-yellow-500 md:translate-y-10 bg-gray-900 md:bg-transparent">2023 - Heute</h4>
            <div className="flex w-full relative items-center flex-col md:flex-row bg-gray-900 md:bg-transparent">
              <div className="md:block min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900 -translate-y-[5.25rem] md:-translate-y-0 md:-translate-x-10 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(100%+0.5rem)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:top-[calc(100%+6px+0.5rem)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-[6px] after:rounded-sm md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-l-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500">
              </div>
              <hr className="hidden md:block border-dotted border-t-2 border-gray-500 w-full absolute -left-2" />
              <div className="min-w-[5rem] min-h-[5rem] max-w-[24rem] max-h-[24rem] rounded-full border-[4px] md:ml-auto border-yellow-500 relative bg-gray-900 flex justify-center items-center after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[-0.5rem] md:after:-translate-x-0 md:after:-translate-y-1/2 after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:rounded-sm md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-r-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                <FontAwesomeIcon icon={faBriefcase} className="ng-fa-icon bg-gray-900" size="2x" />
              </div>
            </div>
            <div className="flex flex-col md:-translate-y-8 pt-4 md:pt-0 bg-gray-900 md:bg-transparent pb-10 md:pb-0">
              <a href="https://www.telekom.de" target="_blank" className="block text-pink-700 font-bold text-lg md:pr-20">Deutsche Telekom IT GmbH
              </a>
              <span className="md:pr-12">Software-Entwickler</span>
              <p className="text-sm font-thin">
                Interner Positions- und Teamwechsel zu <abbr title="Telekom Architecture for Decoupling and Integration of Service">TARDIS</abbr>. Aktive Beteiligung am gesamten Entwicklungsprozess, einschließlich der (Architektur-)Planung kritischer Microservices, Softwareentwicklung, Fehlerbehebung, umfangreicher Tests wie Unit-, Integration- und Disaster-Recovery-Tests sowie der Erlangung neuer Fähigkeiten in Bereichen wie Kubernetes, Docker, Kafka und React.
              </p>
            </div>
          </div>
          <div className="md:w-[calc(50%)] md:relative flex flex-col text-center md:text-left md:self-end md:pl-8">
            <h4 className="pt-10 md:pr-20 md:pt-0 md:pb-2 lg:text-5xl text-3xl font-bold text-yellow-500 md:translate-y-10 bg-gray-900 md:bg-transparent">2020 - 2023</h4>
            <div className="flex w-full relative items-center flex-col md:flex-row bg-gray-900 md:bg-transparent">
              <div className="md:block min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900 -translate-y-[5.25rem] md:-translate-y-0 md:-translate-x-10 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(100%+0.5rem)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:top-[calc(100%+6px+0.5rem)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-[6px] after:rounded-sm md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-l-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 before:top-[calc(-6px-0.5rem)] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 md:before:hidden before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
              </div>
              <hr className="hidden md:block border-dotted border-t-2 border-gray-500 w-full absolute -left-2" />
              <div className="min-w-[5rem] min-h-[5rem] max-w-[24rem] max-h-[24rem] rounded-full border-[4px] md:ml-auto border-yellow-500 relative bg-gray-900 flex justify-center items-center after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[-0.5rem] md:after:-translate-x-0 md:after:-translate-y-1/2 after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:rounded-sm md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-r-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                <FontAwesomeIcon icon={faBriefcase} className="ng-fa-icon bg-gray-900" size="2x" />
              </div>
            </div>
            <div className="flex flex-col md:-translate-y-8 pt-4 md:pt-0 bg-gray-900 md:bg-transparent pb-10 md:pb-0">
              <a href="https://www.telekom.de" target="_blank" className="block text-yellow-500 font-bold text-lg md:pr-20">Deutsche Telekom IT GmbH
              </a>
              <span className="md:pr-12">Leitender Software-Entwickler</span>
              <p className="text-sm font-thin">
                Übernahme im gleichen Team Dezember 2020 als leitender Software-Entwickler. Verantwortlich für eine Inhouse-Anwendung inklusive Betrieb, Weiterentwicklung, Code-Reviews &amp; Aufgabenplanung. Enge Zusammenarbeit in einem internationen Team mit mehreren Entwicklern, Scrum-Master und Project Owner.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse flex-wrap">
            <div className="md:w-[calc(50%)] md:relative flex flex-col text-center md:text-left md:self-end md:pl-8">
              <h4 className="pt-10 md:pr-20 md:pt-0 md:pb-2 lg:text-5xl text-3xl font-bold text-yellow-500 md:translate-y-10 bg-gray-900 md:bg-transparent">2017 - 2020</h4>
              <div className="flex w-full relative items-center flex-col md:flex-row bg-gray-900 md:bg-transparent">
                <div className="md:block min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900 -translate-y-[5.25rem] md:-translate-y-0 md:-translate-x-10 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(100%+0.5rem)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:top-[calc(100%+6px+0.5rem)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-[6px] after:rounded-sm md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-l-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 before:top-[calc(-6px-0.5rem)] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 md:before:hidden before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                </div>
                <hr className="hidden md:block border-dotted border-t-2 border-gray-500 w-full absolute -left-2" />
                <div className="min-w-[5rem] min-h-[5rem] max-w-[24rem] max-h-[24rem] rounded-full border-[4px] md:ml-auto border-yellow-500 relative bg-gray-900 flex justify-center items-center after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[-0.5rem] md:after:-translate-x-0 md:after:-translate-y-1/2 after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:rounded-sm md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-r-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                  <FontAwesomeIcon icon={faBriefcase} className="ng-fa-icon bg-gray-900" size="2x" />
                </div>
              </div>
              <div className="flex flex-col md:-translate-y-8 pt-4 md:pt-0 bg-gray-900 md:bg-transparent pb-10 md:pb-0">
                <a href="https://www.telekom.de" target="_blank" className="block text-yellow-500 font-bold text-lg md:pr-20">Deutsche Telekom Ausbildung AG
                </a>
                <span className="md:pr-12">Duales Studium Angewandte Informatik
                </span>
                <p className="text-sm font-thin">Einsatz als Software-Entwicker im Monitoring-Team der Deutschen Telekom IT GmbH. Design &amp; Implementierung neuer Features, Microservices &amp; einer Inhouse-Anwendung basierend auf Spring-Boot &amp; Angular.
                </p>
              </div>
            </div>
            <div className="md:w-[calc(50%)] md:relative flex flex-col text-center md:text-right md:self-start md:pr-8">
              <h4 className="pt-10 md:pl-20 md:pt-0 md:pb-2 lg:text-5xl text-3xl font-bold text-yellow-500 md:translate-y-10 bg-gray-900 md:bg-transparent">2017 - 2020</h4>
              <div className="flex w-full relative items-center flex-col md:flex-row bg-gray-900 md:bg-transparent">
                <div className="md:block min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900 md:order-3 -translate-y-[5.25rem] md:-translate-y-0 md:translate-x-10 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(-6px-0.5rem)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:top-[calc(100%+6px+0.5rem)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-[6px] after:rounded-sm md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-r-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[calc(-6px-0.5rem)] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                </div>
                <hr className="hidden md:block border-dotted border-t-2 border-gray-500 w-full absolute -right-2 md:order-2" />
                <div className="min-w-[5rem] min-h-[5rem] max-w-[24rem] max-h-[24rem] rounded-full border-[4px] md:mr-auto border-yellow-500 relative bg-gray-900 flex justify-center items-center md:order-1 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(100%+2px)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:rounded-sm md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-l-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                  <FontAwesomeIcon icon={faGraduationCap} className="ng-fa-icon bg-gray-900" size="2x" />
                </div>
              </div>
              <div className="flex flex-col md:-translate-y-8 md:pl-4 pt-4 md:pt-0 bg-gray-900 md:bg-transparent pb-10 md:pb-0">
                <a href="https://www.hft-leipzig.de" target="_blank" className="block text-yellow-500 font-bold text-lg md:pl-20">
                  <abbr title="Hochschule für Telekommunikation Leipzig"> HfT-Leipzig
                  </abbr>
                </a>
                <span className="md:pl-12">
                  <abbr title="Bachelor of Science">B.Sc.</abbr> Angewandte Informatik - 2,1
                </span>
                <p className="text-sm font-thin"> Spezialisierung in der <a href="/Bachelorarbeit_TimPuetz.pdf" target="_blank" className="underline">Bachelorarbeit</a> (1,3) auf Logdatei-Anomalieerkennung zur Verfügbarkeitsanalyse von generischen Anwendungen
                </p>
              </div>
            </div>
          </div>



          <div className="flex flex-row-reverse flex-wrap">
            <div className="md:w-[calc(50%)] md:relative flex flex-col text-center md:text-left md:self-end md:pl-8">
              <h4 className="pt-10 md:pr-20 md:pt-0 md:pb-2 lg:text-5xl text-3xl font-bold text-yellow-500 md:translate-y-10 bg-gray-900 md:bg-transparent">2015</h4>
              <div className="flex w-full relative items-center flex-col md:flex-row bg-gray-900 md:bg-transparent">
                <div className="md:block min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900 -translate-y-[5.25rem] md:-translate-y-0 md:-translate-x-10 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(100%+0.5rem)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:top-[calc(100%+6px+0.5rem)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-[6px] after:rounded-sm md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-l-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 before:top-[calc(-6px-0.5rem)] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 md:before:hidden before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                </div>
                <hr className="hidden md:block border-dotted border-t-2 border-gray-500 w-full absolute -left-2" />
                <div className="min-w-[5rem] min-h-[5rem] max-w-[24rem] max-h-[24rem] rounded-full border-[4px] md:ml-auto border-yellow-500 relative bg-gray-900 flex justify-center items-center after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[-0.5rem] md:after:-translate-x-0 md:after:-translate-y-1/2 after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:rounded-sm md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-r-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                  <FontAwesomeIcon icon={faBriefcase} className="ng-fa-icon bg-gray-900" size="2x" />
                </div>
              </div>
              <div className="flex flex-col md:-translate-y-8 pt-4 md:pt-0 bg-gray-900 md:bg-transparent pb-10 md:pb-0">
                <a href="https://sekon.de/en/index.html" target="_blank" className="block text-yellow-500 font-bold text-lg md:pr-20">SeKON Software GmbH</a>
                <span className="md:pr-12">Software Entwickler (Aushilfe)</span>
                <p className="text-sm font-thin">Entwicklung von Softwareanwendung zum Verarbeiten von XML Dateien sowie Hilfe bei der Weiterentwicklung der Haussoftware (SeCAD) in Teamarbeit</p>
              </div>
            </div>
            <div className="md:w-[calc(50%)] md:relative flex flex-col text-center md:text-right md:self-start md:pr-8">
              <h4 className="pt-10 md:pl-20 md:pt-0 md:pb-2 lg:text-5xl text-3xl font-bold text-yellow-500 md:translate-y-10 bg-gray-900 md:bg-transparent">2014 - 2017</h4>
              <div className="flex w-full relative items-center flex-col md:flex-row bg-gray-900 md:bg-transparent">
                <div className="md:block min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900 md:order-3 -translate-y-[5.25rem] md:-translate-y-0 md:translate-x-10 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(-6px-0.5rem)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:top-[calc(100%+6px+0.5rem)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-[6px] after:rounded-sm md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-r-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[calc(-6px-0.5rem)] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                </div>
                <hr className="hidden md:block border-dotted border-t-2 border-gray-500 w-full absolute -right-2 md:order-2" />
                <div className="min-w-[5rem] min-h-[5rem] max-w-[24rem] max-h-[24rem] rounded-full border-[4px] md:mr-auto border-yellow-500 relative bg-gray-900 flex justify-center items-center md:order-1 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(100%+2px)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:rounded-sm md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-l-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                  <FontAwesomeIcon icon={faSchoolFlag} className="ng-fa-icon bg-gray-900" size="2x" />
                </div>
              </div>
              <div className="flex flex-col md:-translate-y-8 md:pl-4 pt-4 md:pt-0 bg-gray-900 md:bg-transparent pb-10 md:pb-0">
                <a href="https://hhek.bonn.de/informationstechnischer-assistent-in-mit-allgemeiner-hochschulreife/" target="_blank" className="block text-yellow-500 font-bold text-lg md:pl-20">
                  Europakolleg Bonn
                </a>
                <span className="md:pl-12">
                  Abitur & schulische Ausbildung
                </span>
                <p className="text-sm font-thin">
                  Erlangen der allgemeine Hochschulreife und des Berufsabschluss <q>staatlich geprüfter Informationstechnischer Assistent</q>.
                </p>
              </div>
            </div>
          </div>


          <div className="md:w-[calc(50%)] relative flex flex-col text-center md:text-right md:self-start md:pr-8">
            <h4 className="pt-10 md:pl-20 md:pt-0 md:pb-2 lg:text-5xl text-3xl font-bold text-yellow-500 md:translate-y-10 bg-gray-900 md:bg-transparent">2016</h4>
            <div className="flex w-full relative items-center flex-col md:flex-row bg-gray-900 md:bg-transparent">
              <div className="md:block min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900 md:order-3 -translate-y-[5.25rem] md:-translate-y-0 md:translate-x-10 
                              after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(-6px-0.5rem)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:top-[calc(100%+6px+0.5rem)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-[6px] after:rounded-sm md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-r-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 
                              before:absolute before:w-0 before:h-0 md:before:hidden before:top-[calc(-6px-0.5rem)] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
              </div>
              <hr className="hidden md:block border-dotted border-t-2 border-gray-500 w-full absolute -right-2 md:order-2" />
              <div className="min-w-[5rem] min-h-[5rem] max-w-[24rem] max-h-[24rem] rounded-full border-[4px] md:mr-auto border-yellow-500 relative bg-gray-900 flex justify-center items-center md:order-1 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(100%+2px)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:rounded-sm md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-l-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                <FontAwesomeIcon icon={faBuilding} className="ng-fa-icon bg-gray-900" size="2x" />
              </div>
            </div>
            <div className="flex flex-col md:-translate-y-8 md:pl-4 pt-4 md:pt-0 bg-gray-900 md:bg-transparent pb-10 md:pb-0">
              <a href="https://www.diemedialen.de" target="_blank" className="block text-yellow-500 font-bold text-lg md:pl-20">Die Medialen</a>
              <span className="md:pl-12">Dreiwöchiges Schülerpraktikum</span>
              <p className="text-sm font-thin">
                Einblick in die Programmiersprache PHP zur Webentwicklung. Zusätzliche Einarbeitung in das erstellen von E-Mails via HTML und Nutzung von dem CMS-System <a href="https://typo3.org/" target="_blank">TYPO3</a>.
              </p>
            </div>
          </div>

          
          <div className="md:w-[calc(50%)] relative flex flex-col text-center md:text-right md:self-start md:pr-8">
            <h4 className="pt-10 md:pl-20 md:pt-0 md:pb-2 lg:text-5xl text-3xl font-bold text-yellow-500 md:translate-y-10 bg-gray-900 md:bg-transparent">2012</h4>
            <div className="flex w-full relative items-center flex-col md:flex-row bg-gray-900 md:bg-transparent">
              <div className="md:block min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900 md:order-3 -translate-y-[5.25rem] md:-translate-y-0 md:translate-x-10 
                              after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(-6px-0.5rem)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:top-[calc(100%+6px+0.5rem)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-[6px] after:rounded-sm md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-r-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 
                              before:absolute before:w-0 before:h-0 md:before:hidden before:top-[calc(-6px-0.5rem)] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
              </div>
              <hr className="hidden md:block border-dotted border-t-2 border-gray-500 w-full absolute -right-2 md:order-2" />
              <div className="min-w-[5rem] min-h-[5rem] max-w-[24rem] max-h-[24rem] rounded-full border-[4px] md:mr-auto border-yellow-500 relative bg-gray-900 flex justify-center items-center md:order-1 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(100%+2px)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:rounded-sm md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-l-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                <FontAwesomeIcon icon={faBuilding} className="ng-fa-icon bg-gray-900" size="2x" />
              </div>
            </div>
            <div className="flex flex-col md:-translate-y-8 md:pl-4 pt-4 md:pt-0 bg-gray-900 md:bg-transparent pb-10 md:pb-0">
              <a href="https://www.fkie.fraunhofer.de" target="_blank" className="block text-yellow-500 font-bold text-lg md:pl-20">Fraunhofer FKIE</a>
              <span className="md:pl-12">Einwöchiges Schülerpraktikum</span>
              <p className="text-sm font-thin">
                Einblick in die Programmiersprache Java zur Umsetzung einer Software zur Auswertung von XML Dateien in selbstständiger Erarbeitung
              </p>
            </div>
          </div>



          <div className="md:w-[calc(50%)] md:relative flex flex-col text-center md:text-left md:self-end md:pl-8">
              <h4 className="pt-10 md:pr-20 md:pt-0 md:pb-2 lg:text-5xl text-3xl font-bold text-yellow-500 md:translate-y-10 bg-gray-900 md:bg-transparent">2009</h4>
              <div className="flex w-full relative items-center flex-col md:flex-row bg-gray-900 md:bg-transparent">
                <div className="md:block min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900 -translate-y-[5.25rem] md:-translate-y-0 md:-translate-x-10 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(100%+0.5rem)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:top-[calc(100%+6px+0.5rem)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-[6px] after:rounded-sm md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-l-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 before:top-[calc(-6px-0.5rem)] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 md:before:hidden before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                </div>
                <hr className="hidden md:block border-dotted border-t-2 border-gray-500 w-full absolute -left-2" />
                <div className="min-w-[5rem] min-h-[5rem] max-w-[24rem] max-h-[24rem] rounded-full border-[4px] md:ml-auto border-yellow-500 relative bg-gray-900 flex justify-center items-center after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[-0.5rem] md:after:-translate-x-0 md:after:-translate-y-1/2 after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:rounded-sm md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-r-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                  <FontAwesomeIcon icon={faLaptopCode} className="ng-fa-icon bg-gray-900" size="2x" />
                </div>
              </div>
              <div className="flex flex-col md:-translate-y-8 pt-4 md:pt-0 bg-gray-900 md:bg-transparent pb-10 md:pb-0">
                <span className="block text-yellow-500 font-bold text-lg md:pr-20"></span>
                <span className="md:pr-12">Schüler</span>
                <p className="text-sm font-thin">
                  Entwicklung meines ersten Scripts, welches Sammeln von Gegenständen in einem Spiel automatisierte. Gefolgt von Einarbeitung in C# und start meines Selbststudiums.
                </p>
              </div>
            </div>

            {/* 
            <div className="md:w-[calc(50%)] md:relative flex flex-col text-center md:text-left md:self-end md:pl-8">
              <h4 className="pt-10 md:pr-20 md:pt-0 md:pb-2 lg:text-5xl text-3xl font-bold text-yellow-500 md:translate-y-10 bg-gray-900 md:bg-transparent">1997</h4>
              <div className="flex w-full relative items-center flex-col md:flex-row bg-gray-900 md:bg-transparent">
                <div className="md:block min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900 -translate-y-[5.25rem] md:-translate-y-0 md:-translate-x-10 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(100%+0.5rem)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:top-[calc(100%+6px+0.5rem)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-[6px] after:rounded-sm md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-l-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 before:top-[calc(-6px-0.5rem)] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 md:before:hidden before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                </div>
                <hr className="hidden md:block border-dotted border-t-2 border-gray-500 w-full absolute -left-2" />
                <div className="min-w-[5rem] min-h-[5rem] max-w-[24rem] max-h-[24rem] rounded-full border-[4px] md:ml-auto border-yellow-500 relative bg-gray-900 flex justify-center items-center after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[-0.5rem] md:after:-translate-x-0 md:after:-translate-y-1/2 after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:rounded-sm md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-r-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                  <FontAwesomeIcon icon={faBaby} className="ng-fa-icon bg-gray-900" size="2x" />
                </div>
              </div>
              <div className="flex flex-col md:-translate-y-8 pt-4 md:pt-0 bg-gray-900 md:bg-transparent pb-10 md:pb-0">
                <span className="block text-yellow-500 font-bold text-lg md:pr-20">Geburt</span>
                <span className="md:pr-12">Bonn</span>
                <p className="text-sm font-thin"></p>
              </div>
            </div>
           */}


            <div className="md:w-[calc(50%)] relative flex flex-col text-center md:text-right md:self-start md:pr-8">
            <h4 className="pt-10 md:pl-20 md:pt-0 md:pb-2 lg:text-5xl text-3xl font-bold text-yellow-500 md:translate-y-10 bg-gray-900 md:bg-transparent">1997</h4>
            <div className="flex w-full relative items-center flex-col md:flex-row bg-gray-900 md:bg-transparent">
              <div className="md:block min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900 md:order-3 -translate-y-[5.25rem] md:-translate-y-0 md:translate-x-10 
                              after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(-6px-0.5rem)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:top-[calc(100%+6px+0.5rem)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-[6px] after:rounded-sm md:after:border-l-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-r-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 
                              before:absolute before:w-0 before:h-0 md:before:hidden before:top-[calc(-6px-0.5rem)] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
              </div>
              <hr className="hidden md:block border-dotted border-t-2 border-gray-500 w-full absolute -right-2 md:order-2" />
              <div className="min-w-[5rem] min-h-[5rem] max-w-[24rem] max-h-[24rem] rounded-full border-[4px] md:mr-auto border-yellow-500 relative bg-gray-900 flex justify-center items-center md:order-1 after:absolute after:w-0 after:h-0 md:after:top-1/2 md:after:left-[calc(100%+2px)] md:after:-translate-x-0 md:after:-translate-y-1/2 after:bottom-[-0.5rem] after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:rounded-sm md:after:border-r-0 md:after:border-t-transparent md:after:border-b-transparent md:after:border-l-yellow-500 md:after:border-b-[6px] after:border-b-0 after:border-l-transparent after:border-r-transparent after:border-t-yellow-500 before:absolute before:w-0 before:h-0 md:before:hidden before:top-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
                <FontAwesomeIcon icon={faSchool} className="ng-fa-icon bg-gray-900" size="2x" />
              </div>
            </div>
            <div className="flex flex-col md:-translate-y-8 md:pl-4 pt-4 md:pt-0 bg-gray-900 md:bg-transparent pb-10 md:pb-0">
              <span className="block text-yellow-500 font-bold text-lg md:pl-20">Geburt</span>
              <span className="md:pl-12">Bonn</span>
              <p className="text-sm font-thin">
              </p>
            </div>
          </div>
          


          <div className="md:hidden min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] rounded-full border-[4px] border-yellow-500 relative bg-gray-900
                            before:absolute before:w-0 before:h-0 md:before:hidden before:top-[calc(-6px-0.5rem)] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[6px] before:rounded-sm before:border-t-0 before:border-l-transparent before:border-r-transparent before:border-b-yellow-500">
          </div>
        </div>
        <footer className="flex items-center h-full self-start row-start-[9] sm:row-start-[8] row-span-1 !col-start-2 sm:col-span-2 col-span-1 w-[calc(100%)] border-t-4 border-l-4 border-r-4 border-yellow-500">
          <div className="grid grid-flow-col w-full gap-4 font-mono">
            <a href="https://www.linkedin.com/in/tim-puetz/" target="_blank" className="ml-auto mr-auto hidden md:inline-block">
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="pl-2">Tim Pütz</span>
            </a>
            <a href="mailto:puetz_tim@web.de" className="ml-auto mr-auto">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="pl-2">puetz_tim@web.de</span>
            </a>
            <a href="https://github.com/Sinmson" target="_blank" className="ml-auto mr-auto hidden md:inline-block">
              <FontAwesomeIcon icon={faGithub} />
              <span className="pl-2">Sinmson</span>
            </a>
          </div>
        </footer>
      </div>

    </main>
  )
}
