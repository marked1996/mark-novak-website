import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Tag";
import Footer from "@/components/Footer";
import ootdVideo from "@/images/ootd/ootdVIdeoGif.gif";
import nowaLogo from "@/images/nowa/nowa logo.jpg";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";
import CollapsibleText from "@/components/CollapsibleText";

export default function Home() {
  return (
    <>
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 "
        aria-label="About me"
        id="about"
      >
        <div>
          <h2 className="text-2xl font-medium tracking-tight mb-8 text-gray-100 block lg:hidden">
            About me
          </h2>
        </div>
        {/* <div>
          <p className="mb-4">
            I'm a designer living in Ljubljana, Slovenia. Previously an
            architecture student. I'm enthusiastic about shaping and making the
            web a nicer place.
          </p>
          <p className="mb-4">
            For a long time, I’ve always wanted to learn to design spaces that
            people can enjoy strolling around, always seeking and striving to
            curate an engaging human experience as they navigate the
            environment. Throughout this journey, I’ve become more curious about
            understanding human interaction to build more intuitive things.
          </p>
          <p className="mb-4">
            During my 4th year at University for architecture, after a year long
            thinking and “what if’s” I decided to shift my career towards
            building for people in computing spaces because of a desire to work
            at larger and faster scales. While computing and architecture slowly
            evolve, still, at the heart of these disciplinges are what makes
            design valuable - it improves people’s lives holistically through
            emotion, functionality and aesthetics. For this reason, when I’m
            designing, I try to get rid of all the noise and junk and focus on
            simplicity and functionality.
          </p>
          <p className="mb-4">
            When I'm not working, I enjoy learning more about web technologies,
            playing tennis, basketball and hiking in nature with friends and
            family.
          </p>
        </div> */}
        <div>
          <CollapsibleText />
        </div>
      </section>
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="projects"
        aria-label="My projects"
      >
        <h2 className="lg:hidden block text-2xl font-medium tracking-tight text-gray-100 mb-8 pb-2">
          Projects
        </h2>
        <div className="">
          <ul className="">
            {/*   OOTD */}
            <li className="mb-12 group">
              <Link href="/ootd">
                <article className="w-full ">
                  <Suspense fallback={<Skeleton />}>
                    <div className="overflow-hidden">
                      <Image
                        src={ootdVideo}
                        className="w-full h-full group-hover:scale-105 transition-all"
                        style={{ objectFit: "cover" }}
                        alt="Im an alt"
                      />
                    </div>
                  </Suspense>
                  <div className="mt-2 flex justify-between items-start">
                    <div className="flex justify-center items-center text-gray-100">
                      <h3
                        className=" tracking-tight text-gray-100 focus-visible:text-gray-100 text-2xl font-medium"
                        aria-label="Outfit of the day idea"
                      >
                        Outfit of the day
                      </h3>
                      <svg
                        className=" size-6 mr-1 transition-transform group-hover:translate-x-2 opacity-0 group-hover:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                        // height="32px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="currentColor"
                      >
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                      </svg>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                      <Tag text="Prototype" />
                      <Tag text="UI" />
                    </div>
                  </div>
                </article>
              </Link>
            </li>
            {/*   NOWA */}
            <li className="mb-12 group">
              <Link href="/nowa">
                <article className="w-full ">
                  <Suspense fallback={<Skeleton />}>
                    {/* <video autoPlay muted loop className="w-full h-auto  ">
                      <source
                        src={"/images/nowa/nowaMackbookTurn.mp4"}
                        type="video/mp4"
                      />
                    </video> */}
                    <div className="overflow-hidden">
                      <Image
                        src={nowaLogo}
                        className="w-full h-auto group-hover:scale-105 transition-all"
                        alt="nowa logotype"
                      />
                    </div>
                  </Suspense>
                  <div className="mt-2 flex justify-between items-start">
                    <div className="flex justify-center items-center text-gray-100">
                      <h3
                        className=" tracking-tight text-gray-100 focus-visible:text-gray-100 text-2xl font-medium"
                        aria-label="Nowa agency rebrand"
                      >
                        Nowa
                      </h3>
                      <svg
                        className=" size-6 mr-1 transition-transform group-hover:translate-x-2 opacity-0 group-hover:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                        // height="32px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="currentColor"
                      >
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                      </svg>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                      <Tag text="Visual identity" />
                      <Tag text="Design system" />
                      <Tag text="UI UX" />
                      <Tag text="Development" />
                    </div>
                  </div>
                </article>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        id="experience"
        aria-label="Experience"
      >
        <h2 className="pb-2 text-2xl font-medium tracking-tight text-gray-100 mb-8 lg:hidden ">
          Experience
        </h2>
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="sm:col-span-2 uppercase text-sm">
                  2023 - present
                </div>
                <div className="sm:order-2 sm:col-span-6 flex flex-col justify-between">
                  <h3
                    className="mb-2 leading-tight text-gray-100 focus-visible:text-teal-300 font-medium"
                    aria-label="Freelance user interface and user experience designer and frontend developer"
                  >
                    Freelance UI UX designer and developer
                  </h3>
                  <p className="text-sm font-normal mb-4">
                    Collaborating with creative teams on development of branding
                    concepts, product ideas and design support. Maintaining and
                    creating design systems, from small to big, and implementing
                    them in apps and websites.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="UI UX design" />
                    <Tag text="Javascript" />
                    <Tag text="Figma" />
                    <Tag text="Wordpress" />
                    <Tag text="Adobe" />
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="sm:col-span-2 uppercase text-sm">
                  2020 - 2022
                </div>
                <div className="sm:order-2 sm:col-span-6 flex flex-col justify-between">
                  <h3
                    className="mb-2 leading-tight text-gray-100 focus-visible:text-teal-300 font-medium"
                    aria-label="Freelance user interface and user experience designer and frontend developer"
                  >
                    Product designer at Alumnio startup
                  </h3>
                  <p className="text-sm font-normal mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                    placeat nobis quaerat hic molestias. Dolorum hic sunt saepe
                    itaque harum, debitis dicta fugiat illum magnam maxime
                    tempore exercitationem praesentium rem. Explicabo tempore,
                    ab adipisci fuga eum doloribus ad rem incidunt in voluptates
                    hic, nobis est tempora numquam. Error, earum dolore in nulla
                    numquam temporibus itaque delectus voluptas. Aperiam, atque
                    dolorum?
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="Figma" />
                    <Tag text="Webflow" />
                    <Tag text="Product design" />
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="sm:col-span-2 uppercase text-sm">
                  2019 - 2021
                </div>
                <div className="sm:order-2 sm:col-span-6 flex flex-col justify-between">
                  <h3
                    className="mb-2 leading-tight text-gray-100 focus-visible:text-teal-300 font-medium"
                    aria-label="Freelance user interface and user experience designer and frontend developer"
                  >
                    Designer and event coordinator at Nowa
                  </h3>
                  <p className="text-sm font-normal mb-4">
                    Delivered custom promotion materials for a diverse array of
                    companies such as Spar, OMW, Continental, Intesa Sanpaolo
                    Bank. Collaborated with internal marketing teams and
                    external prin ting companies to coordinate designs,
                    materials and make strategy plans. Marketing events
                    coordination, managing micro locations for promo materials.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="Adobe" />
                    <Tag text="Figma" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 "
        id="education"
        aria-label="Education"
      >
        <h2 className="text-2xl font-medium tracking-tight text-gray-100 mb-8 pb-2 lg:hidden block">
          Education
        </h2>
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="sm:col-span-2 uppercase text-sm">
                  2024 - present
                </div>
                <div className="sm:order-2 sm:col-span-6 flex flex-col justify-between">
                  <h3
                    className="mb-2 leading-tight text-gray-100 focus-visible:text-teal-300 font-medium"
                    aria-label="Freelance user interface and user experience designer and frontend developer"
                  >
                    First year master's CS student at Faculty of Information
                    Studies
                  </h3>
                  <p className="text-sm font-normal mb-4">
                    Studying more about web technologies and learning about
                    building complex applications.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="Typescript" />
                    <Tag text="Java" />
                    <Tag text="React" />
                    <Tag text="Python" />
                    <Tag text="PHP" />
                    <Tag text="Node" />
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="sm:col-span-2 uppercase text-sm">
                  2020 - 2023
                </div>
                <div className="sm:order-2 sm:col-span-6 flex flex-col justify-between">
                  <h3
                    className="mb-2 leading-tight text-gray-100 focus-visible:text-teal-300 font-medium"
                    aria-label="Freelance user interface and user experience designer and frontend developer"
                  >
                    Bachelor's in graphic design on Faculty of Design
                  </h3>
                  <p className="text-sm font-normal mb-4">
                    Visual communications graduate. Learned essential knowledge
                    and skills to confidentely tackle all design projects,
                    regardless of scale.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="UI UX design" />
                    <Tag text="Figma" />
                    <Tag text="Wordpress" />
                    <Tag text="Adobe" />
                    <Tag text="HTML & CSS" />
                    <Tag text="Javascript" />
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="sm:col-span-2 uppercase text-sm">
                  2015 - 2019
                </div>
                <div className="sm:order-2 sm:col-span-6 flex flex-col justify-between">
                  <h3
                    className="mb-2 leading-tight text-gray-100 focus-visible:text-teal-300 font-medium"
                    aria-label="Freelance user interface and user experience designer and frontend developer"
                  >
                    Faculty of Architecture
                  </h3>
                  <p className="text-sm font-normal mb-4">
                    My studies in architecture marked my first experience where
                    art meets reality. During this time, I developed a strong
                    foundation in architectural principles, gained an eye for
                    the usability of spaces, and deepened my understanding of
                    how design influences the interaction between people and
                    their environments.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="AutoCAD" />
                    <Tag text="3ds Max" />
                    <Tag text="ArchiCAD" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
