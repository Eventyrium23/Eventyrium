import React from "react"
import { Typography } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import { HomeIcon, BellIcon, CurrencyDollarIcon, TagIcon } from "@heroicons/react/24/solid";


// Rating stars in the image :
function RatingStars() {
  return <Rating value={4} />;
}
// The cover image in the beginning:
function CoverImage() {
  return (
    <figure className="relative h-96 w-full">

      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src="https://sandemanevents.com/wp-content/uploads/2018/11/1-e1548685170583.jpg"
        alt="event-organisation"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            Eventyruim
            {RatingStars()}
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            10 December 2023
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          Save the date
        </Typography>
      </figcaption>
    </figure>
  );
}

// The First Description:
function Decriptions() {
  return (
    <>
      <Typography variant="h3" color="gray" align="center" > Eventyruim Planner </Typography><br />
      <Typography variant="paragraph" align="center" className="mr-20 ml-20">
        Welcome to Eventyruim, where we turn your events into extraordinary experiences.
        With a dedicated team of creative professionals, we specialize in crafting personalized
        and memorable moments for every occasion.From meticulous planning to seamless execution,
        we take care of the details, ensuring that your event is not only special but also stress-free.
        Whether it's a corporate gathering, a wedding celebration, or a social event, we bring innovation,
        passion, and a commitment to excellence to every project. Let us elevate your next event and create
        lasting memories. Discover the difference with Eventyruim.</Typography> <br />
      <Typography variant="h5" color="red" className="font-normal text-red-400 font-serif ml-16 font-bold" >Party Planner:</Typography>
      <Typography color="gary" className="font-normal text-gray-600 ml-10 mr-60"> Our experienced party planners at The Italian Planners
        will work beside you to find the perfect venue and unique setting
        and atmosphere that caters to any of your celebration needs.We pride ourselves on managing every aspect of your party with creativity,
        elegance, and efficiency, without losing sight of your budget.
        Are you thinking about adding special effects to surprise your guests?
        Do you need help finding the perfect entertainment for your party?
        Are you looking for a unique live band, a talented musician, or a special performer?
        No problem, we have you covered. With a deep knowledge of Tunisia and a strong network of
        trustworthy vendors, our team of party planners will ensure your event will be one-of-a-kind, with the best
        entertainment for your special occasion allowing you and your guests to enjoy every single moment of your party.
        With each project, we hand select a team that will provide you with the highest level of personalization, service and assistance
        throughout the entire planning process, regardless of the complexity.</Typography>
      <br />
      <Typography variant="h5" color="red" className="font-normal text-red-400 font-serif ml-16 font-bold" >Birthday Planner:</Typography>
      <Typography color="gary" className="font-normal text-gray-600 ml-10 mr-60">
        A milestone event in our lives creates a natural human response to welcome, celebrate, and connect with those we care about most.
        We provide you, thanks to our team of professional birthday event organizers, the local support for a weekend of fun and celebration.
        <br />
        The majority of our clients are coming to Tunisia looking to create a surprise birthday party, perfect for
        an extravagant 40th birthday, an exclusive 50th birthday, or to celebrate any age really!
        <br />
        The Italian Planners are available to organize:
        <br />
        1 year old birthday party
        <br />
        18th birthday party ideas
        <br />
        30th birthday party ideas
        <br />
        40th birthday party ideas
        <br />
        60th birthday party
        <br />
        and more!
        <br />
        A birthday party in Tunisia, as well as a celebration of a wedding anniversary or vows renewal,
        is a special celebration of life, a time that is meant to gather close friends and family members
        for a memorable and loving experience together!
        Trust us, there are many ways to have a good time in Italy if you choose a professional birthday planner: choose your favorite luxury birthday theme,
        gather your loved ones and have fun!
        The Tunisian Planners will take care of all the rest.
      </Typography>
    </>

  );
}

function TimeLine() {
  return (
    <div className="w-[28rem]" >
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <TagIcon className="h-3 w-3" />
            </TimelineIcon>
            <Typography variant="h4" color="blue-gray">
              Tags.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              Birthday party, Birthday planner, Events, Luxury Event Planner,
              Luxury Events, Party Planner.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <BellIcon className="h-3 w-3" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood sweat and tears, and
              I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
              luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <CurrencyDollarIcon className="h-3 w-3" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood sweat and tears, and
              I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
              luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}







function Home() {
  return (<div className=" bg-gray-100">

    {CoverImage()}
    <br />
    {Decriptions()}
    <br />
    {TimeLine()}
    <h1>Hello From Home</h1>

  </div>)
}

export default Home;
