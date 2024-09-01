import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Tag";
import Footer from "@/components/Footer";
import ootdVideo from "@/images/ootd/testootd.png";
import nowaLogo from "@/images/nowa/nowa logo.jpg";
import itToolsMockup from "@/images/it-tools/home mockup.jpg";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";
import CollapsibleText from "@/components/CollapsibleText";

export default function Home() {
  return (
    <>
      <div className="lg:mx-12 mx-6 pt-16 lg:pt-10 pb-16 lg:pb-10">
        <section
          className="mb-12 scroll-mt-16 md:mb-14 lg:mb-16 lg:scroll-mt-24 "
          aria-label="About me"
          id="about"
        >
          <div>
            <h2 className="text-2xl font-medium tracking-tight mb-8 text-slate-100 hidden">
              About me
            </h2>
          </div>
          <div>
            <CollapsibleText />
          </div>
        </section>
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          id="projects"
          aria-label="My projects"
        >
          <h2 className="border-t lg:border-0 uppercase border-slate-500/30 lg:hidden block font-semibold tracking-widest text-slate-500 mb-8 py-2 text-xs">
            Projects
          </h2>
          <div className="">
            <ul className="">
              {/*   IT tools */}
              <li className="mb-8 lg:mb-12 group">
                <Link href="/developer-tools">
                  <article className="w-full ">
                    <Suspense fallback={<Skeleton />}>
                      <div className="overflow-hidden rounded-md">
                        <Image
                          src={itToolsMockup}
                          className="w-full h-full group-hover:scale-105 transition-all"
                          style={{ objectFit: "cover" }}
                          alt="Im an alt"
                        />
                      </div>
                    </Suspense>
                    <div className="mt-2 flex justify-between items-start">
                      <div className="flex justify-center items-center text-slate-100 group-hover:text-markblue transition-all">
                        <h3
                          className=" tracking-tight focus-visible:text-slate-100 text-xl md:text-2xl font-medium"
                          aria-label="Noxity developer tools"
                        >
                          Noxity developer tools
                        </h3>
                      </div>
                      <div className="flex gap-2 flex-wrap justify-end">
                        <Tag text="Prototype" />
                        <Tag text="UI UX" />
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {/* OOTD */}
                <li className="mb-8 lg:mb-12 group flex">
                  <Link href="/ootd" className="flex-1 h-full">
                    <article className="w-full h-full flex flex-col">
                      <Suspense fallback={<Skeleton />}>
                        <div className="overflow-hidden rounded-md flex-1">
                          <video
                            autoPlay
                            muted
                            loop
                            className="w-full h-auto rounded-md group-hover:scale-105 transition-all"
                          >
                            <source
                              src={"/images/ootd/ootdVideo.mp4"}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </Suspense>
                      <div className="mt-2 flex justify-between items-start">
                        <div className="flex justify-center items-center text-slate-100 group-hover:text-markblue transition-all">
                          <h3
                            className="tracking-tight  focus-visible:text-slate-100 text-xl md:text-2xl font-medium"
                            aria-label="Outfit of the day idea"
                          >
                            Outfit of the day
                          </h3>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-end">
                          <Tag text="Prototype" />
                          <Tag text="UI" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </li>

                {/* NOWA */}
                <li className="mb-8 lg:mb-12 group flex">
                  <Link href="/nowa" className="flex-1 h-full">
                    <article className="w-full h-full flex flex-col">
                      <Suspense fallback={<Skeleton />}>
                        <div className="overflow-hidden rounded-md flex-1">
                          <Image
                            src={nowaLogo}
                            className="w-full h-full group-hover:scale-105 transition-all object-cover"
                            alt="nowa logotype"
                          />
                        </div>
                      </Suspense>
                      <div className="mt-2 flex justify-between items-start">
                        <div className="flex justify-center items-center text-slate-100 group-hover:text-markblue transition-all">
                          <h3
                            className="tracking-tight  focus-visible:text-slate-100 text-xl md:text-2xl font-medium"
                            aria-label="Nowa agency rebrand"
                          >
                            Nowa
                          </h3>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-end">
                          <Tag text="Visual identity" />
                          <Tag text="UI UX" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </section>
        {/* EXPERIENCE SECTION */}
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 max-w-2xl lg:scroll-mt-24 m-auto"
          id="experience"
          aria-label="Experience"
        >
          <h2 className="border-t lg:border-0 uppercase border-slate-500/30 lg:hidden block font-semibold tracking-widest text-slate-500 mb-8 py-2 text-xs">
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
                      Collaborating with creative teams on development of
                      branding concepts, product ideas and design support.
                      Maintaining and creating design systems, from small to
                      big, and implementing them in apps and websites.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Tag text="UI UX design" />
                      <Tag text="Javascript" />
                      <Tag text="HTML CSS" />
                      <Tag text="React" />
                      <Tag text="Wordpress" />
                      <Tag text="Figma" />
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
                      I collaborated with a startup team of entrepreneurs,
                      focusing on creating the brand identity and developing
                      marketing strategies. Additionally, I designed, developed
                      and mantained the company's website as well as the design
                      system.
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
                      Delivered custom promotion materials for a diverse array
                      of companies such as Spar, OMW, Continental, Intesa
                      Sanpaolo Bank. Collaborated with internal marketing teams
                      and external prin ting companies to coordinate designs,
                      materials and make strategy plans. Marketing events
                      coordination, managing micro locations for promo
                      materials.
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
        {/* EDUCATION SECTION */}
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 max-w-2xl m-auto"
          id="education"
          aria-label="Education"
        >
          <h2 className="border-t lg:border-0 uppercase border-slate-500/30 lg:hidden block font-semibold tracking-widest text-slate-500 mb-8 py-2 text-xs">
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
                      Visual communications graduate. Learned essential
                      knowledge and skills to confidentely tackle all design
                      projects, regardless of scale.
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
                      My studies in architecture marked my first experience
                      where art meets reality. During this time, I developed a
                      strong foundation in architectural principles, gained an
                      eye for the usability of spaces, and deepened my
                      understanding of how design influences the interaction
                      between people and their environments.
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
      </div>
    </>
  );
}
