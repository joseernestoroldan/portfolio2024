"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function EmblaCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xl flex items-center justify-center  mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className=" w-full max-w-xl mx-auto  ">
        <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex  h-[300px] w-full max-w-5xl items-center justify-center">
                <div className="text-justify indent-6 opacity-80 text-gray-900 dark:text-white mx-auto">
                  Greetings! I'm Jose, a seasoned software developer with a
                  passion for crafting exceptional digital experiences. With a
                  robust skill set spanning a variety of technologies and
                  frameworks, I specialize in delivering cutting-edge web
                  solutions that captivate and inspire.
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex  h-[300px] w-full max-w-5xl items-center justify-center">
                <div className="text-justify indent-6 opacity-80 text-gray-900 dark:text-white mx-auto">
                  My journey into the world of software development began with
                  an insatiable curiosity and a drive for innovation. Over the
                  years, I've honed my expertise in frontend development,
                  mastering the intricacies of JavaScript and its popular
                  libraries and frameworks like ReactJS, Angular, and Vue.js.
                  From crafting sleek user interfaces to architecting scalable
                  web applications, I excel in bringing ideas to life with
                  precision and finesse.
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card className="h-[300px] w-full max-w-5xl">
              <CardContent className="flex  h-[300px] w-full max-w-5xl items-center justify-center">
                <div className="text-justify indent-6 opacity-80 text-gray-900 dark:text-white mx-auto">
                  But my expertise doesn't end at the frontend. I'm well-versed
                  in backend technologies too. Whether it's leveraging the
                  flexibility of composable content clouds like Sanity or the
                  efficiency of Prisma ORM, I specialize in building robust
                  backend solutions that power seamless user experiences. I'm
                  proficient in Node.js for server-side development and
                  proficient in managing data with databases such as MongoDB,
                  MySQL, and PostgreSQL.
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex  h-[300px] w-full max-w-5xl items-center justify-center">
                <div className="text-justify indent-6 opacity-80 text-gray-900 dark:text-white mx-auto">
                  In addition to my technical prowess, I bring a collaborative
                  and detail-oriented approach to every project. I thrive in
                  fast-paced environments, where I can leverage my
                  problem-solving skills and adaptability to overcome challenges
                  and deliver results that exceed expectations.
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex  h-[300px] w-full max-w-5xl items-center justify-center">
                <div className="text-justify indent-6 opacity-80 text-gray-900 dark:text-white mx-auto">
                  When I'm not immersed in code, you can find me staying
                  up-to-date with the latest trends in technology, experimenting
                  with new tools and frameworks, or indulging in outdoor
                  adventures.
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex  h-[300px] w-full max-w-5xl items-center justify-center">
                <div className="text-justify indent-6 opacity-80 text-gray-900 dark:text-white mx-auto">
                  Whether you're a startup looking to establish your online
                  presence, an enterprise seeking to optimize your backend
                  operations, or an individual with a bold digital vision, I'm
                  here to help turn your ideas into reality. Let's collaborate
                  and create something remarkable together!
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
