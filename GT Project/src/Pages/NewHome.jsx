import heroImg from "../images/heroImg.png";
import cta from "../images/cta.png";
import { Accordion } from "flowbite-react";
import MainButton from "../Components/Buttons/MainButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ===========================================

import Slider from "../Components/Slider";
import s1_1 from "../images/slider/s1.png";
import s1_2 from "../images/slider/s2.png";
import s1_3 from "../images/slider/s3.png";
import s1_4 from "../images/slider/s4.png";
import s1_5 from "../images/slider/s5.png";

// ===========================================

import FetchEvents from "../Hooks/getEvents";
import { dbURL } from "../FirebaseConfig/Config";
import TicketCard from "../Components/TicketCard";
// import { Link } from "react-router-dom";

//============================================
import AOS from "aos";
import "aos/dist/aos.css";

//============================================

function Home() {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "100" });
  }, []);
  return (
    <div className="flex flex-col gap-20  mx-8 sm:mx-8 lg:mx-12 xl:mx-24">
      <Hero />
      <LogosSlider />
      <Featuers />
      <Cards />
      <CTA />
      <FAQ />
    </div>
  );
}

function Hero() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      id="hero-container"
      className=" relative grid grid-cols-1 md:grid-cols-2 justify-center content-center "
    >
      <div
        id="gradiant"
        className="absolute top-0 left-0 right-0 w-80 md:w-96 h-96 shrink-0 rounded-full blur-3xl  bg-indigo-800  "
      ></div>
      <div
        id="gradiant"
        className="absolute bottom-0 right-100 w-80 md:w-96 h-96 shrink-0 rounded-full blur-3xl bg-none  sm:bg-pink-500"
      ></div>
      <div id="img" className="relative z-10">
        <img src={heroImg} data-aos="fade-right" />
      </div>
      <div
        id="content"
        className=" content-center justify-center relative z-10 "
      >
        <div id="text" className=" flex flex-col gap-6">
          <p className="text-text-prim  font-sans font-bold text-3xl md:text-7xl ">
            Experience the Ultimate eGaming Events Live!
          </p>
          <p className="text-text-second font-sans font-medium text-lg md:text-xl text-justify">
            Get your tickets for the most exciting tournaments and gaming
            conventions around the world.
          </p>
          <div id="btns" className="w-1/2">
            {user ? (
              <Link to="/catalog">
                {" "}
                <MainButton className="font-sans">Explore Now</MainButton>
              </Link>
            ) : (
              <Link to="/login">
                {" "}
                <MainButton className="font-sans">Explore Now</MainButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Featuers() {
  const [featuersList] = useState({
    featuers: [
      {
        featuer: "  Wide Range of Events",
        description:
          "Access tickets to the hottest eGaming events worldwide, from major tournaments to local gaming conventions",
      },
      {
        featuer: "Easy and Secure Ticket Purchasing ",
        description:
          "Enjoy a seamless and secure ticket buying experience with multiple payment options.",
      },
      {
        featuer: "Exclusive Offers and Discounts",
        description:
          "Take advantage of special promotions, early bird discounts, and group rates.",
      },
      {
        featuer: "  Event Location in Map",
        description:
          " Easily find the event venue with interactive maps showing the location ",
      },
    ],
  });
  return (
    <div className="pt-12" data-aos="fade-up-left">
      <div id="featuers-Hiding">
        <p className="font-sans text-text-prim font-bold text-2xl">
          Featuers For You
        </p>
      </div>
      <div
        id="featuers-list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 gap-6 py-6"
      >
        {featuersList.featuers.map((featuer) => (
          <FeatuerCard
            key={featuer.id}
            featuer={featuer.featuer}
            description={featuer.description}
          />
        ))}
      </div>
    </div>
  );
  // return (
  //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 gap-6 py-6"></div>
  // );
}

function FeatuerCard({ featuer, description }) {
  return (
    <div>
      <div
        id="card"
        className=" h-full relative z-10 bg-gradient-prim rounded-2xl flex p-7 flex-col items-center gap-4  font-sans text-start align-start "
      >
        <div className="w-full">
          <p id="featuer" className="text-purple-300  text-lg bold font-bold">
            {featuer}
          </p>
        </div>
        <div>
          <p
            id="description"
            className="text-text-second text-start font-medium text-base"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  const [events] = FetchEvents(dbURL);

  return (
    <div data-aos="fade-up-right">
      <h2 className="text-2xl font-bold mt-12 text-text-prim">
        Currently Trending Games
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 gap-6 py-6">
        {events &&
          events
            .slice(0, 4)
            .map((event) => (
              <TicketCard
                key={event.id}
                name={event.name}
                startDate={event.startDate}
                endDate={event.endDate}
                price={event.price}
                eventId={event.id}
                img={event.image}
              />
            ))}
      </div>
    </div>
  );
}

function CTA() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      data-aos="flip-down"
      id="card "
      className="grid grid-cols-1 md:grid-cols-2 bg-gradient-second p-10 md:p-20 rounded-2xl "
    >
      <div
        id="gradiant"
        className="absolute top-0 left-0 right-0 w-80 md:w-96 h-96 shrink-0 rounded-full blur-3xl   "
      ></div>
      <div id="content" className="flex flex-col gap-4 justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-text-prim font-sans font-bold text-2xl md:text-4xl">
            Be Part of the Biggest eGaming Events!
          </p>
          {user ? (
            <p className="font-sans font-medium text-text-second text-lg md:text-xl">
              Get your tickets for the hottest eGaming events.
            </p>
          ) : (
            <p className="font-sans font-medium text-text-second text-lg md:text-xl">
              Create an account and get your tickets for the hottest eGaming
              events.
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2 ">
          {user ? (
            <Link to="/catalog">
              <MainButton>Book Now</MainButton>
            </Link>
          ) : (
            <Link to="/login">
              <MainButton>Register Now</MainButton>
            </Link>
          )}
        </div>
      </div>
      <div
        id="img"
        className=" justify-end hidden md:flex invisible md:visible"
      >
        <div
          id="gradiant"
          className="absolute top-0 left-0 right-0 w-80 md:w-96 h-96 shrink-0 rounded-full blur-3xl  "
        ></div>
        <img src={cta} className="w-1/2 h-auto" />
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div
      data-aos="flip-down"
      className="flex justify-center mt-20 m-auto mb-3 w-full"
    >
      <Accordion className="self-center text-white bg-second-dark w-full">
        <h1 className="text-left font-bold text-2xl ml-5 mb-4 mt-4">FAQ's</h1>
        <Accordion.Panel className="focus:ring-transparent bg-blk">
          <Accordion.Title className="text-white bg-blk text-sm hover:bg-blk focus:ring-transparent">
            How do I purchase tickets for a gaming event on GTickets?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white text-sm">
              Visit our website at GTickets.com. Browse or search for the gaming
              event you want to attend. Click on the event to view more details.
              Select the number of tickets you want and click "Buy Now".
              Complete the checkout process by entering your payment and contact
              information. Once your purchase is complete, you will receive a
              confirmation email with your e-tickets.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel className="focus:ring-transparent">
          <Accordion.Title className="text-white text-sm bg-blk hover:bg-blk focus:ring-transparent">
            Can I get a refund or exchange my tickets if I can’t attend the
            event?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white text-sm">
              Refunds and exchanges are subject to the event organizer's policy.
              Typically, tickets are non-refundable and non-exchangeable unless
              the event is canceled or rescheduled. Please check the specific
              event's refund policy on the event details page or contact our
              customer support for further assistance.Flowbite is first
              conceptualized and designed using the Figma software so everything
              you see in the library has a design equivalent in our Figma file.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel className="focus:ring-transparent">
          <Accordion.Title className="text-white bg-blk text-sm hover:bg-light focus:ring-transparent">
            How will I receive my tickets after purchase?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white text-sm">
              After you complete your purchase on GTickets, you will receive an
              email confirmation with your e-tickets attached. You can either
              print the tickets or display them on your mobile device at the
              event entrance. Make sure to bring a valid ID matching the name on
              the ticket for verification.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel className="focus:ring-transparent">
          <Accordion.Title className="text-white text-sm bg-blk hover:bg-light focus:ring-transparent">
            What should I do if I haven’t received my e-tickets?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white text-sm">
              If you haven’t received your e-tickets, please check your spam or
              junk email folder. If they are not there, contact our customer
              support team with your order number and email address used for the
              purchase. We will promptly resend your tickets to ensure you
              receive them in time for the event.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

const LogosSlider = () => {
  const slider1Images = [s1_1, s1_2, s1_3, s1_4, s1_5];
  return (
    <main>
      <Slider
        width={200}
        height={100}
        quantity={4}
        images={slider1Images}
        reverse={true}
      />
    </main>
  );
};

export default Home;
