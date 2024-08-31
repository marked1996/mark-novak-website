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
      <div className="lg:mx-12 mx-6 pt-16 lg:pt-10">
        <section
          className="mb-12 scroll-mt-16 md:mb-14 lg:mb-16 lg:scroll-mt-24 "
          aria-label="About me"
          id="about"
        >
          <div>
            <h2 className="text-2xl font-medium tracking-tight mb-8 text-gray-100 block lg:hidden">
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
          <h2 className="lg:hidden block text-2xl font-medium tracking-tight text-gray-100 mb-8 pb-2">
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
                      <div className="flex justify-center items-center text-gray-100">
                        <h3
                          className=" tracking-tight text-gray-100 focus-visible:text-gray-100 text-xl md:text-2xl font-medium"
                          aria-label="Noxity developer tools"
                        >
                          Noxity developer tools
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
                        <Tag text="UI UX" />
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* OOTD */}
                <li className="mb-8 lg:mb-12 group flex">
                  <Link href="/ootd" className="flex-1 h-full">
                    <article className="w-full h-full flex flex-col">
                      <Suspense fallback={<Skeleton />}>
                        <div className="overflow-hidden rounded-md flex-1">
                          <Image
                            src={ootdVideo}
                            className="w-full h-full group-hover:scale-105 transition-all object-cover"
                            alt="Outfit of the day prototype idea"
                          />
                        </div>
                      </Suspense>
                      <div className="mt-2 flex justify-between items-start">
                        <div className="flex justify-center items-center text-gray-100">
                          <h3
                            className="tracking-tight text-gray-100 focus-visible:text-gray-100 text-xl md:text-2xl font-medium"
                            aria-label="Outfit of the day idea"
                          >
                            Outfit of the day
                          </h3>
                          <svg
                            className="size-6 mr-1 transition-transform group-hover:translate-x-2 opacity-0 group-hover:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            fill="currentColor"
                            viewBox="0 -960 960 960"
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
                        <div className="flex justify-center items-center text-gray-100">
                          <h3
                            className="tracking-tight text-gray-100 focus-visible:text-gray-100 text-xl md:text-2xl font-medium"
                            aria-label="Nowa agency rebrand"
                          >
                            Nowa
                          </h3>
                          <svg
                            className="size-6 mr-1 transition-transform group-hover:translate-x-2 opacity-0 group-hover:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            fill="currentColor"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                          </svg>
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
                      Collaborating with creative teams on development of
                      branding concepts, product ideas and design support.
                      Maintaining and creating design systems, from small to
                      big, and implementing them in apps and websites.
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Et placeat nobis quaerat hic molestias. Dolorum hic sunt
                      saepe itaque harum, debitis dicta fugiat illum magnam
                      maxime tempore exercitationem praesentium rem. Explicabo
                      tempore, ab adipisci fuga eum doloribus ad rem incidunt in
                      voluptates hic, nobis est tempora numquam. Error, earum
                      dolore in nulla numquam temporibus itaque delectus
                      voluptas. Aperiam, atque dolorum?
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
