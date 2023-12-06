/** @format */

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { useState } from "react";
import mermaid from "../public/mermaid.png";
import flounder from "../public/flounder.webp";
import sebastian from "../public/sebastian.webp";
import scuttle from "../public/scuttle.png";
import stuff1 from "../public/stuff1.gif";
import stuff2 from "../public/stuff2.gif";
import stuff3 from "../public/stuff3.gif";
import stuff4 from "../public/stuff4.gif";
import stuff5 from "../public/stuff5.gif";
import stuff6 from "../public/stuff6.gif";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ariel Tritonsdatter&apos;s Portfolio</title>
        <link rel="icon" href="/shell.png" sizes="any" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">atlantica</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <Link
                  href="#humanStuff"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Dinglehopper?
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-purple-600 font-medium md:text-6xl dark:text-purple-400">
              Ariel Tritonsdatter
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Ocean Explorer and Siren Seeker
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
              An adventurous young mermaid captivated by the wonders of the
              human world. Join me as we dive into the depths of curiosity and
              explore the enchanting mysteries beyond the waves!
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <Link href="#twitter">
              <AiFillTwitterCircle />
            </Link>
            <Link href="#instagram">
              <AiFillInstagram />
            </Link>
            <Link href="#youtube">
              <AiFillYoutube />
            </Link>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-purple-500 rounded-full w-80 h-80 my-20 overflow-hidden md:h-96 md:w-96">
            <Image
              alt="Ariel's Profile Image"
              src={mermaid}
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              Best Friends of Mine
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              In the heart of the ocean&apos;s embrace, amidst swaying
              <span className="text-purple-500"> kelp</span> and shimmering
              light, my dearest
              <span className="text-purple-500"> companion</span> emerges - a
              loyal and treasured
              <span className="text-purple-500"> friend</span> who shares
              secrets of the deep. Together, we navigate mysteries of the sea,
              finding solace in whispers of the currents and the dance of
              vibrant <span className="text-purple-500">coral</span>. Their
              presence is a beacon of comfort, a
              <span className="text-purple-500"> confidante</span> in a world
              filled with <span className="text-purple-500">wonders</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Through cresting waves and hidden grottos, we discover the magic
              of <span className="text-purple-500">friendship</span> beneath the
              waves, forging a bond unbreakable as the ties that bind the
              ocean&apos;s depths.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image
                alt="Flounder's Image"
                src={flounder}
                className="mx-auto w-[150px] h-[150px] object-contain"
              />
              <h3 className="text-lg font-semibold pt-8 pb-2">Flounder</h3>
              <p className="py-2">
                He is a yellow and blue tropical fish known for his nervous and
                anxious demeanor.
              </p>
              <h4 className="py-4 text-purple-600">Cute Faces of the Sea</h4>
              <p className="text-gray-800 py-1">Supportive</p>
              <p className="text-gray-800 py-1">Loyal</p>
              <p className="text-gray-800 py-1">Devoted</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image
                alt="Sebastian's Image"
                src={sebastian}
                className="mx-auto w-[150px] h-[150px] object-contain"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Sebastian</h3>
              <p className="py-2">
                He is a red Jamaican crab and the court composer for King
                Triton.
              </p>
              <h4 className="py-4 text-purple-600">Cute Faces of the Sea</h4>
              <p className="text-gray-800 py-1">Responsible</p>
              <p className="text-gray-800 py-1">Disciplined</p>
              <p className="text-gray-800 py-1">Music Talent</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image
                alt="Scuttle's Image"
                src={scuttle}
                className="mx-auto w-[150px] h-[150px] object-contain"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Scuttle</h3>
              <p className="py-2">
                He is a quirky and humorous seagull, often misidentifying human
                objects in a humorous way.
              </p>
              <h4 className="py-4 text-purple-600">Cute Faces of the Sea</h4>
              <p className="text-gray-800 py-1">Comic Relief</p>
              <p className="text-gray-800 py-1">Quirky</p>
              <p className="text-gray-800 py-1">Eccentric</p>
            </div>
          </div>
        </section>

        <section id="humanStuff">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Human Stuff, Huh?</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              In the tranquil depths, I stumbled upon treasures from the human
              world—glittering artifacts that spoke of life above. A peculiar
              fork, my &quot;
              <span className="text-purple-500">dinglehopper</span>&quot;,
              became a whimsical hair tool, and a mysterious pipe, or &quot;
              <span className="text-purple-500">snarfblatt</span>&quot;, held
              enigmatic secrets. A sunken ship&apos;s remains cradled a princely
              statue, kindling a yearning for the world beyond the waves.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              These discoveries fueled my curiosity, prompting a daring journey
              to explore the <span className="text-purple-500">wonders</span>{" "}
              above the surface.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                alt="Dinglehopper"
                src={stuff1}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="Snarfblatt"
                src={stuff2}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="Gadgets and Gizmos"
                src={stuff3}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="Thingamabobs"
                src={stuff4}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="Book"
                src={stuff5}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="Feet"
                src={stuff6}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
