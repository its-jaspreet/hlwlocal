const categories = [
    {
        id: 1,
        link: "./src/assets/Home/categoryCircles/sc1-stylish-man-sitting-barbershop.jpeg",
        text: "Hair Services",
        altText: "Hair Services",
    },
    {
        id: 2,
        link: "./src/assets/Home/categoryCircles/sc2-nail-art-professional-working-client-nails.jpeg",
        text: "Nail Services",
        altText: "Nail Services",
    },
    {
        id: 3,
        link: "./src/assets/Home/categoryCircles/sc3-beautiful-woman-getting-beauty-treatment.jpeg",
        text: "Skincare",
        altText: "Skincare",
    },
    {
        id: 4,
        link: "./src/assets/Home/categoryCircles/sc4-beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon.jpeg",
        text: "Waxing and Hair Removal",
        altText: "Waxing and Hair Removal",
    },
    {
        id: 5,
        link: "./src/assets/Home/categoryCircles/sc5-side-view-stylist-with-palette-applying-makeup-model.jpeg",
        text: "Makeup Services",
        altText: "Makeup Services",
    },
    {
        id: 6,
        link: "./src/assets/Home/categoryCircles/sc6-close-up-relaxed-woman-getting-massage.jpeg",
        text: "Spa Services",
        altText: "Spa Services",
    },
    {
        id: 7,
        link: "./src/assets/Home/categoryCircles/sc7-beautiful-young-woman-enjoys-massage.jpeg",
        text: "Head Massage",
        altText: "Head Massage",
    },
    {
        id: 8,
        link: "./src/assets/Home/categoryCircles/sc8-female-hairdresser-making-hairstyle-blonde-woman-beauty-salon..jpeg",
        text: "Hair Styling",
        altText: "Hair Styling",
    },
    {
        id: 9,
        link: "./src/assets/Home/categoryCircles/sc9-lady-gets-her-hair-washed.png",
        text: "Perms and Relaxers",
        altText: "Perms and Relaxers",
    },
    {
        id: 10,
        link: "./src/assets/Home/categoryCircles/sc10-woman-gets-applied-something-on-her-back.png",
        text: "Body Wrap",
        altText: "Body Wrap",
    },
    {
        id: 11,
        link: "./src/assets/Home/categoryCircles/sc11-hairdresser-partitioning-ladys-hair-with-comb.png",
        text: "Hair Extensions",
        altText: "Hair Extensions",
    },
    {
        id: 12,
        link: "./src/assets/Home/categoryCircles/sc12-two-women-looking-at-phone-and-laughing.png",
        text: "Other",
        altText: "Other",
    }
];


const items = 3;

const gender = ["Unisex", "Male", "Female"]
const salons = [
        {
            id: 1,
            gender: gender[0],
            link: "./src/assets/Home/salonThumbnail/st101-LuxeLocks-Salon-and-Spa.jpeg",
            rating: "4.25",
            name: "LuxeLocks Salon & Spa",
            distance: "6.5 km",
            address: "6391 Elgin St, Delaware 10299",
            time: "9:00 am - 7:00 pm",
        },
        {
            id: 2,
            gender: gender[1],
            link: "./src/assets/Home/salonThumbnail/st102-Serenity-Strands-Salon.jpeg",
            rating: "4.25",
            name: "Serenity Strands Salon",
            distance: "9 km",
            address: "1901 Thornridge Cir. Shiloh, Hawai",
            time: "9:00 am - 7:00 pm",
        },
        {
            id: 3,
            gender: gender[2],
            link: "./src/assets/Home/salonThumbnail/st103-Lumina-Lux.jpeg",
            rating: "4.25",
            name: "Lumina Lux",
            distance: "15 km",
            address: "2972 Westheimer Rd. Santa...",
            time: "9:00 am - 7:00 pm",
        },
        {
            id: 4,
            gender: gender[0],
            link: "./src/assets/Home/salonThumbnail/st101-LuxeLocks-Salon-and-Spa.jpeg",
            rating: "4.7",
            name: "SharpCuts Barbershop",
            distance: "2.3 km",
            address: "42 Wallabout St, Brooklyn, NY 11206",
            time: "10:00 am - 8:00 pm",
          },
          {
            id: 5,
            gender: gender[2],
            link: "./src/assets/Home/salonThumbnail/st102-Serenity-Strands-Salon.jpeg",
            rating: "4.5",
            name: "The Mane Event Salon",
            distance: "7.8 km",
            address: "3801 S Alameda St, Corpus Christi, TX 78411",
            time: "8:00 am - 6:00 pm",
          },
          {
            id: 6,
            gender: gender[1],
            link: "./src/assets/Home/salonThumbnail/st103-Lumina-Lux.jpeg",
            rating: "4.8",
            name: "Blooming Beauty Salon",
            distance: "11.2 km",
            address: "123 Main St, Anytown, CA 90210",
            time: "9:30 am - 6:30 pm",
          },
          {
            id: 7,
            gender: gender[2],
            link: "./src/assets/Home/salonThumbnail/st101-LuxeLocks-Salon-and-Spa.jpeg",
            rating: "4.9",
            name: "The Curl Doctors Salon",
            distance: "4.1 km",
            address: "567 Elm St, Seattle, WA 98109",
            time: "10:00 am - 7:00 pm (Closed Tuesdays)",
          },
          {
            id: 8,
            gender: gender[0],
            link: "./src/assets/Home/salonThumbnail/st102-Serenity-Strands-Salon.jpeg",
            rating: "4.3",
            name: "The Painted Nail Salon",
            distance: "8.5 km",
            address: "890 Pine St, Miami, FL 33133",
            time: "9:00 am - 5:00 pm",
          }
]

const salonsGrid = [
        {
            id: 1,
            gender: gender[0],
            link: "./src/assets/Home/salonThumbnail/st101-LuxeLocks-Salon-and-Spa.jpeg",
            rating: "4.25",
            name: "LuxeLocks Salon & Spa",
            distance: "6.5 km",
            address: "6391 Elgin St, Delaware 10299",
            time: "9:00 am - 7:00 pm",
        },
        {
            id: 2,
            gender: gender[1],
            link: "./src/assets/Home/salonThumbnail/st102-Serenity-Strands-Salon.jpeg",
            rating: "4.25",
            name: "Serenity Strands Salon",
            distance: "9 km",
            address: "1901 Thornridge Cir. Shiloh, Hawai",
            time: "9:00 am - 7:00 pm",
        },
        {
            id: 3,
            gender: gender[2],
            link: "./src/assets/Home/salonThumbnail/st103-Lumina-Lux.jpeg",
            rating: "4.25",
            name: "Lumina Lux",
            distance: "15 km",
            address: "2972 Westheimer Rd. Santa...",
            time: "9:00 am - 7:00 pm",
        },
        {
            id: 4,
            gender: gender[0],
            link: "./src/assets/Home/salonThumbnail/st101-LuxeLocks-Salon-and-Spa.jpeg",
            rating: "4.7",
            name: "SharpCuts Barbershop",
            distance: "2.3 km",
            address: "42 Wallabout St, Brooklyn, NY 11206",
            time: "10:00 am - 8:00 pm",
          },
          {
            id: 5,
            gender: gender[2],
            link: "./src/assets/Home/salonThumbnail/st102-Serenity-Strands-Salon.jpeg",
            rating: "4.5",
            name: "The Mane Event Salon",
            distance: "7.8 km",
            address: "3801 S Alameda St, Corpus Christi, TX 78411",
            time: "8:00 am - 6:00 pm",
          },
          {
            id: 6,
            gender: gender[1],
            link: "./src/assets/Home/salonThumbnail/st103-Lumina-Lux.jpeg",
            rating: "4.8",
            name: "Blooming Beauty Salon",
            distance: "11.2 km",
            address: "123 Main St, Anytown, CA 90210",
            time: "9:30 am - 6:30 pm",
          },
          {
            id: 7,
            gender: gender[2],
            link: "./src/assets/Home/salonThumbnail/st101-LuxeLocks-Salon-and-Spa.jpeg",
            rating: "4.9",
            name: "The Curl Doctors Salon",
            distance: "4.1 km",
            address: "567 Elm St, Seattle, WA 98109",
            time: "10:00 am - 7:00 pm (Closed Tuesdays)",
          },
          {
            id: 8,
            gender: gender[0],
            link: "./src/assets/Home/salonThumbnail/st102-Serenity-Strands-Salon.jpeg",
            rating: "4.3",
            name: "The Painted Nail Salon",
            distance: "8.5 km",
            address: "890 Pine St, Miami, FL 33133",
            time: "9:00 am - 5:00 pm",
          },
          {
            id: 9,
            gender: gender[1],
            link: "./src/assets/Home/salonThumbnail/st103-Lumina-Lux.jpeg",
            rating: "4.8",
            name: "Blooming Beauty Salon",
            distance: "11.2 km",
            address: "123 Main St, Anytown, CA 90210",
            time: "9:30 am - 6:30 pm",
          },
]

const unCollapsed = [
    {
        id: 10,
        gender: gender[0],
        link: "./src/assets/Home/salonThumbnail/st101-LuxeLocks-Salon-and-Spa.jpeg",
        rating: "4.25",
        name: "LuxeLocks Salon & Spa",
        distance: "6.5 km",
        address: "6391 Elgin St, Delaware 10299",
        time: "9:00 am - 7:00 pm",
    },
    {
        id: 11,
        gender: gender[1],
        link: "./src/assets/Home/salonThumbnail/st102-Serenity-Strands-Salon.jpeg",
        rating: "4.25",
        name: "Serenity Strands Salon",
        distance: "9 km",
        address: "1901 Thornridge Cir. Shiloh, Hawai",
        time: "9:00 am - 7:00 pm",
    },
    {
        id: 12,
        gender: gender[2],
        link: "./src/assets/Home/salonThumbnail/st103-Lumina-Lux.jpeg",
        rating: "4.25",
        name: "Lumina Lux",
        distance: "15 km",
        address: "2972 Westheimer Rd. Santa...",
        time: "9:00 am - 7:00 pm",
    },
    {
        id: 13,
        gender: gender[0],
        link: "./src/assets/Home/salonThumbnail/st101-LuxeLocks-Salon-and-Spa.jpeg",
        rating: "4.7",
        name: "SharpCuts Barbershop",
        distance: "2.3 km",
        address: "42 Wallabout St, Brooklyn, NY 11206",
        time: "10:00 am - 8:00 pm",
      },
      {
        id: 14,
        gender: gender[2],
        link: "./src/assets/Home/salonThumbnail/st102-Serenity-Strands-Salon.jpeg",
        rating: "4.5",
        name: "The Mane Event Salon",
        distance: "7.8 km",
        address: "3801 S Alameda St, Corpus Christi, TX 78411",
        time: "8:00 am - 6:00 pm",
      },
      {
        id: 15,
        gender: gender[1],
        link: "./src/assets/Home/salonThumbnail/st103-Lumina-Lux.jpeg",
        rating: "4.8",
        name: "Blooming Beauty Salon",
        distance: "11.2 km",
        address: "123 Main St, Anytown, CA 90210",
        time: "9:30 am - 6:30 pm",
      },
]

const statusCardDetails = [
  {
    id: 1,
    color: "lavender",
    heading: "Would you like to become a partner with SalonX?",
    description: "Cut the phone tag. Find your next appointment and book instantly anytime, anywhere.",
    buttonText: "Add Salon",
    link: "./src/assets/Home/partnerStatusCard/two-stylists.svg",
  },
  {
    id: 2,
    color: "green",
    heading: "I am currently affiliated as a partner with SalonX.",
    description: "Cut the phone tag. Find your next appointment and book instantly anytime, anywhere.",
    buttonText: "Go To Dashboard",
    link: "./src/assets/Home/partnerStatusCard/one-guy-dashboard.svg",
  },
]

const faqs = [
  {
    id: 1,
    question: "How long will it take to build this application?",
    answer: "The time required to build an application can vary significantly depending on various factors such as the complexity of the application, the size of the development team, the availability of resources, and the project management approach.",
  },
  {
    id: 2,
    question: "Will you be hiring developers or using an internal team?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum feugiat felis eu aliquet. Vestibulum ac viverra sem, quis bibendum odio. Proin accumsan ante fermentum massa porttitor, et feugiat ligula blandit.",
  },
  {
    id: 3,
    question: "What are the benefits of mobile app development for businesses?",
    answer: "Pellentesque consequat luctus pulvinar. Vestibulum congue mi sit amet ex tincidunt tristique. Etiam finibus hendrerit massa ut mollis. Nulla eu venenatis nunc.",
  },
  {
    id: 4,
    question: "How much does it cost to develop a mobile application?",
    answer: "Etiam id ipsum vel justo gravida molestie vitae et lorem. Maecenas volutpat urna nec auctor egestas. Vestibulum nunc metus, tincidunt quis varius sit amet, blandit eget ex. ",
  },
  {
    id: 5,
    question: "How do I choose the right mobile app development service provider?",
    answer: "Phasellus convallis dictum magna ut gravida. Duis non sagittis magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum non tortor lobortis, hendrerit mi vel, blandit ipsum. ",
  },
]

const footerLink = [
  {
    id: 1,
    linkText: 'Unisex Services',
    linkURL: "",
  },
  {
    id: 2,
    linkText: 'Women Services',
    linkURL: "",
  },
  {
    id: 3,
    linkText: 'Men Services',
    linkURL: "",
  },
  {
    id: 4,
    linkText: 'Our History',
    linkURL: "",
  },
  {
    id: 5,
    linkText: 'Contact',
    linkURL: "",
  },
]

const footerAbout = [
  {
    id: 1,
    linkText: 'FAQ',
    linkURL: "",
  },
  {
    id: 2,
    linkText: 'Contact Us',
    linkURL: "",
  },
  {
    id: 3,
    linkText: 'Terms and Conditions',
    linkURL: "",
  },
  {
    id: 4,
    linkText: 'Privacy Policy',
    linkURL: "",
  },
  {
    id: 5,
    linkText: 'Terms of Use',
    linkURL: "",
  },
]

const footerContactText = `contact@salonx.com
+33 888 666 433
Empire State Building, New York
09:00 - 17:00`;

export { categories, items, salons, salonsGrid, unCollapsed, statusCardDetails, faqs, footerLink, footerAbout, footerContactText };