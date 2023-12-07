import React from "react";
import { Typography } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import {
  Carousel,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { NavLink,Link } from "react-router-dom";

// Rating stars in the image :
function RatingStars() {
  return(
    <Link to={"/feedbacks"}>
    <Rating value={4} />
    </Link>
    ) 
    
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

// The Descriptions:
function Decriptions() {
  return (
    <div className="">
      <Typography variant="h3" color="gray" align="center">
        {" "}
        Eventyruim Planner{" "}
      </Typography>
      <br />
      <Typography variant="paragraph" align="center" className="mr-20 ml-20">
        Welcome to Eventyruim, where we turn your events into extraordinary
        experiences. With a dedicated team of creative professionals, we
        specialize in crafting personalized and memorable moments for every
        occasion.From meticulous planning to seamless execution, we take care of
        the details, ensuring that your event is not only special but also
        stress-free. Whether it's a corporate gathering, a wedding celebration,
        or a social event, we bring innovation, passion, and a commitment to
        excellence to every project. Let us elevate your next event and create
        lasting memories. Discover the difference with Eventyruim.
      </Typography>{" "}
      <br />
      {CarouselTransition()}
      <br />
      <Typography
        variant="h5"
        color="red"
        className=" text-red-400 font-serif ml-16 font-bold"
      >
        Party Planner:
      </Typography>
      <Typography
        color="gary"
        className="font-normal text-gray-600 text-center "
      >
        {" "}
        Our experienced party planners at Eventyruim will work beside
        you to find the perfect venue and unique setting and atmosphere that
        caters to any of your celebration needs.We pride ourselves on managing
        every aspect of your party with creativity, elegance, and efficiency,
        without losing sight of your budget. Are you thinking about adding
        special effects to surprise your guests? Do you need help finding the
        perfect entertainment for your party? Are you looking for a unique live
        band, a talented musician, or a special performer? No problem, we have
        you covered. With a deep knowledge of Tunisia and a strong network of
        trustworthy vendors, our team of party planners will ensure your event
        will be one-of-a-kind, with the best entertainment for your special
        occasion allowing you and your guests to enjoy every single moment of
        your party. With each project, we hand select a team that will provide
        you with the highest level of personalization, service and assistance
        throughout the entire planning process, regardless of the complexity.
      </Typography>
      <br />
    </div>
  );
}

// Middle Images :
function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 1 }} className="rounded-xl">
      <div>
        <img
          src="https://www.dualav.com/wp-content/uploads/2022/11/AdobeStock_300239831-1024x683.jpeg"
          alt="image 1"
          className="h-96 w-full object-cover opacity-75"
        />
      </div>
      <img
        src="https://media.licdn.com/dms/image/C5612AQHFRCKkB-8jRA/article-cover_image-shrink_720_1280/0/1522243380774?e=2147483647&v=beta&t=gpqNwQKzl-NktFhp0px-c8zDpKcvEGYSfiIfi8VqW90"
        alt="image 2"
        className="h-96 w-full object-cover opacity-75"
      />
      <img
        src="https://www.cvent.com/sites/default/files/image/2020-04/beautiful%20wedding%20hall%20with%20white%20tablecloths%20and%20flower%20centerpieces.jpg"
        alt="image 3"
        className="h-96 w-full object-cover opacity-75"
      />
    </Carousel>
  );
}

// The Cards:
const cards = [
  {
    title: " More Than One Pack",
    description:
      "Create unforgettable moments effortlessly with our event packs.Perfect for any occasion, our packs cover everything from delicious food to stunning decorations.Simplify your planning,save time, and enjoy stress-free celebrations with Eventyruim.",
    img: "https://theperfectevent.com/wp-content/uploads/2020/01/Main-Scroll-2.jpg",
    path: "/events/packs",
  },
  {
    title: "Luscious food",
    description:
      "Savor exquisite flavors at Eventyruim, featuring dishes by chefs like Jamie Olivier and Tayssir Ksoury. From tempting desserts to savory delights, our events offer a diverse culinary experience. Join us for a celebration of taste and skill.",
    img: "https://assets.telegraphindia.com/telegraph/2022/Oct/1665397789_untitled-design-83.jpg",
    path: "/events/food",
  },
  {
    title: "Enchanting places",
    description:
      "Step into enchantment with Eventyruim. Our events happen in captivating venues, from lush gardens to historic landmarks. Create magical stories in awe-inspiring locations. Let Eventyruim elevate your celebrations.",
    img: "https://www.theknot.com/tk-media/images/55544388-412c-49a8-8f11-55fbc4675597~rs_768.h-cr_0.0.890.668",
    path: "/events/places",
  },
];

// Showing the Cards Description in landing page:
function CardDefault() {
  {
    return cards.map(({ title, description, img, path }) => {
      return (
        <NavLink to={path}>
          <Card className="mt-6 w-96 h-[500px]">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={img} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
              </Typography>
              <Typography>{description}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </NavLink>
      );
    });
  }
}

// Call the functions above for the home:
function Home() {
  return (
    <div className=" bg-gray-100">
      {CoverImage()}
      <br />
      <div className="px-28 flex justify-center flex-col items-center">
        {Decriptions()}
      </div>
      <br />
      <div className="flex justify-around items-center py-20 flex-wrap gap-5">
        {CardDefault()}
      </div>
      <div className="flex justify-center gap-2 fixed right-0 bottom-20 z-20">
        <NavLink to="events/places">
          <Button size="lg" color="purple">
            Make A Plan
          </Button>
        </NavLink>
      </div>
      {/* <h1>Hello From Home</h1> */}
    </div>
  );
}

export default Home;
