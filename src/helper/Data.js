import { Devices, BarChart, Medal, Support } from "./svg";
import MobileApp from "../lotties/mobile-app-development.json";
import WebDeveploment from "../lotties/web-development.json";
import SoftwareDeveplomnet from "../lotties/software-house.json";
import ppc from "../lotties/digital-marketing-services.json";
import {
  IconBrandAndroid,
  IconBrandApple,
  IconDevices,
  IconShoppingCart,
  IconDeviceMobile,
  IconEdit,
} from "@tabler/icons";
import cms from "../images/cms.png";
import responsive from "../images/responsive.png";
import magento from "../images/magento.png";
import searchAds from "../images/searchads.png";
import displayAds from "../images/ads.png";
import socialAds from "../images/bullhorn.png";
import remarketing from "../images/remarketing.png";
import googleAds from "../images/google.png";
import mobileAds from "../images/advertising.png";
import MainSoftware from "../images/box-4.png";
import Ui1 from "../images/ui-1.jpg";
import Ui2 from "../images/ui-2.jpg";
import Ui3 from "../images/ui-3.jpg";
import Ui4 from "../images/ui-4.jpg";
import Al1 from "../images/album1.png";
import Al2 from "../images/album2.jpeg";
import Al3 from "../images/album3.png";
import T1 from "../images/table/php-logo.png";
import T2 from "../images/table/laravel.png";
import T3 from "../images/table/magento-logo.png";
import T4 from "../images/table/drupal.png";
import T5 from "../images/table/database.png";
import T6 from "../images/table/java.png";
import T7 from "../images/table/codeigniter.png";
import T8 from "../images/table/yii.png";
import T9 from "../images/table/html&css.png";
import T10 from "../images/table/sping.png";
import T11 from "../images/table/python.png";
import T12 from "../images/table/django.png";
import T13 from "../images/table/angular.png";
import T14 from "../images/table/react-logo.png";
import T15 from "../images/table/vujs.png";
import T16 from "../images/table/android-logo.png";
import T17 from "../images/table/ios-logo.png";
import T18 from "../images/table/cloud.png";
export const linksData = [
  { link: "/", label: "HOME" },
  { link: "/whyUs", label: "WHY INNOVATIVE IDEAL SOLUTIONS" },
  {
    link: "#",
    label: "SERVICES",
    links: [
      { link: "/services/paidcampaigns", label: "Paid Campaigns" },
      { link: "/services/software&ERP", label: "Software & ERP" },
      { link: "/services/webDevelopment", label: "Web Deveploment" },
      { link: "/services/appDevelopment", label: "APP Development" },
    ],
  },
  { link: "/ourWorks", label: "OUR WORKS" },
  // { link: "/", label: "CLIENTS" },
  { link: "/contact", label: "CONTACT" },
];

export const SlideText = [
  "WE WILL TAKE CARE OF ALL YOUR DIGITAL REQUIREMENTS.",
  "SOFTWARE TO POWER BOOST YOUR BUSINESS",
  "ERP TO SAVE TIME AND INTEGRATE MANAGEMENT EASILY",
  "MOBILE APP TO GET NOTICE GLOBALLY",
  "360° DIGITAL MARKETING TO ACCELERATE YOUR BUSINESS",
];

export const mainCards = [
  {
    icon: Devices,
    title: "Smart Solutions",
    details: "We provide seamless and cost-effective business solutions.",
  },
  {
    icon: BarChart,
    title: "Trusted Security",
    details: "We are transparent with our processes, with our clients.",
  },
  {
    icon: Medal,
    title: "Customer Satisfaction",
    details: "Our Low Cost Quality Service makes customers satisfied.",
  },
  {
    icon: Support,
    title: "24X7 Support",
    details:
      "Our experienced expert team provides quick support with only a call or enquiry.",
  },
];

export const ImageSlider = [
  "https://img.freepik.com/free-photo/business-partners-handshake-international-business-concept_53876-104046.jpg?w=996&t=st=1661073538~exp=1661074138~hmac=5d1cdb01bb0150ee9cccc3ba74f34ce97f9df1fcf4ad4190c39d3cafbffcbdcd",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

export const ServicesData = [
  {
    image: ppc,
    title: "Paid Campaigns",
    type: "FB, Google, Insta, linkedin",
    client: "Local, National",
    link: "/services/paidcampaigns",
    details:
      "We are a Google premier partner. We use a judicious mix of google and social ads to help meet your business objectives.",
  },
  {
    image: MobileApp,
    title: "APP Development",
    type: "Android, iOS",
    client: "Local, National",
    link: "/services/appDevelopment",
    details:
      "Our well-trained and dedicated team not only assists to release your app in the app store but make it no.1 trending in the market.",
  },
  {
    image: SoftwareDeveplomnet,
    title: "Software & ERP Solutions",
    type: "Education, Office, HR",
    client: "Local, National, Global",
    link: "/services/software&ERP",
    details:
      "Our leading Software/ERP Solutions help organisations to function with more agility, make better decisions and collaborate with greater mobility. ",
  },
  {
    image: WebDeveploment,
    title: "Web Development",
    type: "All",
    client: "Local, National, Global",
    link: "/services/webDevelopment",
    details:
      "We deliver cutting edge websites that are beautiful to look at and perform equally well. Our web design delivers substantially higher audience engagement and conversion rates.",
  },
];

export const FooterData = {
  data: [
    {
      title: "Services",
      links: [
        { link: "/services/paidcampaigns", label: "Paid Campaigns" },
        { link: "/services/software&ERP", label: "Software & ERP" },
        { link: "/services/webDevelopment", label: "Web Deveploment" },
        { link: "/services/appDevelopment", label: "APP Development" },
      ],
    },
  ],
};

export const WebDevelopment = {
  serviceDetails: `Looking for a beautiful, new website? You are at the right place! We deliver cutting edge websites that are beautiful to look at and perform equally well. Our web design services ensures a solid user experience that delivers substantially higher audience engagement and conversion rates.
      First impressions are very important and we can get that deal sealed for you right away. As your website design company, we work in a consultative manner, serving as your advisors, designers and developers.
      Do you know? A website is the storefront of your business when we talk to about online business. Visitors enter into your website while surfing on the internet and check the product or services that you offer. Once visitors are on your website they are more likely to buy from you or at least contact you for their needs.`,
  reasonToChoose: {
    head: "Why Choose Techinnovator for Web Design Services?",
    list: [
      "A professional and creative team.",
      "A fully-planned and time-boxed project plan. You’ll get full access to our project management system.",
      "A personalized and consultative approach to your web design requirements. We don’t begin working on your project until we understand your brand, your values and your precise business needs.",
      "An internal audit team for phased and timely quality control – we fix issues as they happen.",
      "A team with over a decade’s experience in the digital marketing industry.",
    ],
  },
  services: [
    {
      image: cms,
      title: "CMS-Based Websites",
      detail:
        "We have expertise in CMS based website designing & development. Our CMS is technically strong we'll make sure it's easy to operate at the same time.",
    },
    {
      image: responsive,
      title: "Responsive Websites",
      detail:
        "We offer the best mobile first design services with faster load times, optimized browsing and sites that are responsive to multiple screen sizes on multiple platforms.",
    },
    {
      icon: IconShoppingCart,
      title: "Ecommerce Web Design",
      detail:
        "Our Ecommerce website development services cater to multi-disciplinary requirements of performance, security, scalability and usability.",
    },
    {
      icon: IconDeviceMobile,
      title: "Mobile-first Website Design",
      detail:
        "We offer the best mobile first design services with faster load times, optimized browsing and sites that are responsive to multiple screen sizes on multiple platforms.",
    },
    {
      icon: IconEdit,
      title: "Website Revamping",
      detail:
        "Trust our redesigning services to deliver! With faster load times, beautiful designs and easy navigations we make audiences stick to your website.",
    },
    {
      image: magento,
      title: "Magento 2 Migration",
      detail:
        "Migrating a store to Magento 2 is a complex process and a carefully planned, analytical project plan needs to be put in place.",
    },
  ],
  benefits: {
    head: "Traits of a Sales-Driving Website Design",
    details: null,
    list: [
      "Your website needs to be visible - well-structured, logically organized websites with meta tags, title tags and other SEO practices will make be readable by search engines. It is necessary that Google’s crawlers index your website. Use internal links to establish relationships within the website and increase time spent. Audit for errors often and fix them.",
      "Your website needs to be mobile friendly - Since mobile traffic comprises of more than half of traffic on websites, mobile optimization is key. Google itself rewards mobile friendly-websites - responsive websites rank better on search engines. Responsive design allows for cross-platform compatibility and make online sharing simpler.",
      "Your website needs to be secure - Invest in security and safety, establish a privacy policy, add contact information, and safety certifications such as awards or seals. To add social trust, add real customer testimonials, ratings and reviews, and press articles.",
      "Your website needs to be fast - Ensure that quick page load times are a high priority - Google recommends web pages load in 3 seconds or less. Users lose interest with slow websites. Clean websites with minimal graphics offer maximum impact.",
      "Your website needs an optimal user experience - To improve conversion rate and drive sales - a website needs to have a well-designed architecture and navigation based on user research and behaviour. A well-defined user flow limits bounce rate and encourages users down the funnel.",
    ],
  },
};

export const PaidCampaigns = {
  serviceDetails: `Get ready for a boom in business with more traffic,more leads and more sales. All this at alower Cost Per Acquisition! By utilizing all Ad channelseffectively we will deliver a better Returnon Ad Spend (RoAS) than you have ever seen before.
  We are a Google premier partner with a specializationin search, display and shopping ads Weuse a judicious mix of google and social ads to helpmeet your business objectives – whetherthey are branding, lead generation or e-commerce sales.
  We have delivered great value across all B2B and B2C clients.
  We are a Google premier partner with a specialization in search, display and shopping ads We use a judicious mix of google and social ads to help meet your business objectives – whether they are branding, lead generation or e-commerce sales. We have delivered great value across all B2B and B2C clients, bringing about as much as a 8% decrease in CPAs and a 91% increase in conversions.`,
  reasonToChoose: {
    head: "What Makes Us the Best PPC Advertising Company in India?",
    list: [
      "One of only 50 Google Premier Partners from 4000 Partner PPC Agency in India.",
      "Top Agency in India and 93 globally.",
      "Rated SEO & PPC Company of the Year by CIO Review.",
      "Best Integrated Search Marketing (SEO & PPC) Company in India.",
      "Unmatched Portfolio of Clients & long history of successful PPC Campaigns.",
    ],
  },
  services: [
    {
      image: searchAds,
      title: "Search Advertising",
      detail:
        "Search advertising is one of the most crucial channels of PPC advertising. We use different terms for it - Paid Search, SEM, and PPC, etc.",
    },
    {
      image: displayAds,
      title: "Display Advertising",
      detail:
        "Display advertising is an important PPC advertising strategy that gives digital marketers immense power in the form of phenomenal reach.",
    },
    {
      image: socialAds,
      title: "Social Media Advertising",
      detail:
        "With higher reach and engagement than Display and lower CPCs than Search, Social Advertising is a powerful tool.",
    },
    {
      image: remarketing,
      title: "Remarketing",
      detail:
        "Remarketing is a smart advertising technique a good PPC agency will recommend you which will let you show ads to users who have visited your website earlier.",
    },
    {
      image: googleAds,
      title: "Google Shopping Ads",
      detail:
        "Google Shopping Ads are essential for online retail marketing business. Create Campaigns and sell your products to online customers.",
    },
    {
      image: mobileAds,
      title: "Mobile Advertising",
      detail:
        "Mobile advertising has grown exponentially over the past few years with increase in smartphone penetration and data connectivity.",
    },
  ],
  benefits: {
    head: "Our unique approach for best PPC advertising",
    details: `We recommend PPC solutions as the one yet crucial digital marketing move to get maximum brand exposure within the fastest possible timeline.\n
We pack a ‘POWERFUL PUNCH’ when we boost our PPC services with your exclusively customized campaigns.\n
Our PPC experts will do an extensive analysis to identify the keywords that can give you more enquiries and conversion opportunities.`,
    list: [],
  },
};

export const AppDevelopment = {
  serviceDetails: `Our creative, industry-savvy Android app development team transforms your unique app idea to impressive apps. Our development process begins with feasibility testing of your app idea and planning the development process; evaluating cost and time breakdown. The end product we build is; an ultimate blend of extensive functionality and virtual appeal.
    Our well-trained and dedicated Android app development team not only assists to release your app in the app store but make it no.1 trending in the market with excellent features and personalised functionality. Let’s get Started.
    As a Leading iOS app development company in India, we offer a complete suite of services starting from Idea Validation to Execution. We are here to offer you everything you need to develop, launch, deploy, monitor and modify highly intuitive iOS apps. Our tried and tested methods for creating wireframes, prototypes and UX/UI designs help us create brilliant apps for businesses. We focus on creating apps for iPhones and iPads that are user-friendly and will help drive your business growth.`,
  reasonToChoose: {
    head: "Why Choose Techinnovator for your APP Developmet",
    list: [
      "A professional and creative team.",
      "A fully-planned and time-boxed project plan. You’ll get full access to our project management system.",
      "A personalized and consultative approach to your web design requirements. We don’t begin working on your project until we understand your brand, your values and your precise business needs.",
      "An internal audit team for phased and timely quality control – we fix issues as they happen.",
      "A team with over a decade’s experience in the digital marketing industry.",
    ],
  },
  services: [
    {
      icon: IconBrandAndroid,
      title: "Android App",
      detail:
        "Our dedicated team not only assists to release your app in the app store but make it no.1 trending in the market.",
    },
    {
      icon: IconBrandApple,
      title: "IOS App",
      detail:
        "With rapid development models and data-driven product strategies, we help businesses to build, launch and promote iOS apps successfully.",
    },
    {
      icon: IconDevices,
      title: "Hybrid App",
      detail:
        "We offer cutting-edge hybrid mobile app development solution and make our best efforts to fulfill the expectation of our clients.",
    },
  ],
  benefits: {
    head: "Benefits of Working with Us",
    details:
      "The benefits of Hybrid mobile apps are that it can also be use across multiple platforms. In addition, for building a powerful and user-friendly Hybrid mobile app you have to hire hybrid app developers in India of Innovative Ideal Solution. The benefits of choosing us for your hybrid app development project are as follows:",
    list: [
      "One of the best benefits of hiring the professional and experienced Hybrid App Developers from Techinnovator, the most leading Hybrid Mobile App Development Company in Kolkata is that our focused team always work towards for the betterment and progress of their client’s company.",
      "Providing a flexible, user-friendly, and secured application is what our Hybrid Mobile App developers specialize for the offering.",
      "As a reputed Hybrid Application Development Company in India, we always make the best efforts to provide a cost-effective and quick solution to our clients.",
      "Our developers have great experience in working with different languages such as CSS, HTML 5, JavaScript, etc. so you can trust them to deliver you top class of Hybrid App Development Services within the time.",
      "Our Hybrid App Developers has good knowledge, experience, and skills in designing and developing user-friendly applications.",
      "We know that to progress, expand, and deliver great results to our clients we need to have dedicated and proficient team members who have the skills to exceed the expectation of the clients. Therefore, we only look forward to hiring the best hybrid developers and succeed in doing so.",
      "Our developing team keeps updating our clients of the progress made at the different stages of the project development.",
    ],
  },
};

export const Software = {
  serviceDetails: `Our experienced project managers and software developers work to uncover your business needs and develop a personalised solution. We develop the perfect software solution to our clients that stimulates business growth and gain a competitive edge. Thus, if you want improve your business productivity and be a part of digital transformation, we are here to help you.
Our leading ERP Solutions help organisations to function with more agility, make better decisions and collaborate with greater mobility. We develop requirement-specific solutions by deploying all the high-end dynamic features; Education Organisation, eCommerce, Business Intelligence, Warehouse Management, Quote Management, Email System and much more.
We develop high quality and profit-oriented software applications which, help us to stand unique in the industry. With years of hands-on experience, we can build the most effective software solution that benefits your business. We assist you in both System Integration and Legacy System Upgrades by using the proven methodologies and technologies. With our core focus on Software Innovation & Automation, we offer premium quality service at affordable pricing. Let’s get started.`,
  reasonToChoose: {
    head: "Why Choose Techinnovator for Software and ERP Solutions",
    details: `No two businesses have alike needs which, might not be met by traditional stereotype solutions at all times. Thus, we focus on developing ERP solutions that are highly customisable and deliver out-of-the-box functionality. Our experienced developers seamlessly accommodate the specifications to the ERP solution which, make it suitable for your business. The result is; more business efficiency, better integration of work operations and higher returns. Run your unique business in your unique way with us.`,
    list: [
      "Proven Track Record of Successful Projects.",
      "Integrated Solutions directed to automate business processes.",
      "Use of latest technologies to deliver per clients’ requirements.",
      "Strong monitoring approach to ensure On-time delivery.",
      "Best-in-class Service at competitive prices.",
      "Follow Global standards to deliver high-end solutions.",
      "Quality assessment to meet your expectations.",
    ],
  },
  services: [
    {
      image: MainSoftware,
      title:
        "Education Managment System - School / College & University (Cloud Based ERP)",
      detail:
        "Techinnovator EduSoft is a market leading ERP platform for Schools/Colleges/Universities which is user-interactive, flexible, robust, easy-to-access, secured, diversified and can be embedded in every generation devices. It is a smart educational system, which enables every feature and functions to complete the daily needs of all Educational Institutions whether big/small. It provides different roles and functionality to every unique user with diversified perspective making it effective for them.",
      ui: [{ image: Ui1 }, { image: Ui2 }, { image: Ui3 }, { image: Ui4 }],
    },
    {
      image: MainSoftware,
      title: "Network Marketing Software (Cloud Based MLM)",
      detail:
        "Techinnovator MLM Software is a premier MLM Software that expertise in offering advanced features in every MLM compensation plans. The customized MLM management software developed by our MLM software company ensures to fit any business model, satisfy customer requirements, and to face the unique challenges of Direct Selling industry.",
      ui: [{ image: Ui1 }, { image: Ui2 }, { image: Ui3 }, { image: Ui4 }],
    },
    {
      image: MainSoftware,
      title: "GST Billing Software",
      detail:
        "Our billing software allows you to generate both GST/Non-GST invoices and seamless transition from Non-GST to GST invoice. You can add any number of items with different tax rates in same invoice. Our billing software generates detailed report of profit and loss margin on sale of each and every item during a period which helps you in focusing more on areas where you are loosing.Credit sales are one of most important and neglected aspect of any business. Our billing software allows to track and manage your credit sales and keeps your overall credit exposure in check which reduces loss and risk of default.",
      ui: [{ image: Ui1 }, { image: Ui2 }, { image: Ui3 }, { image: Ui4 }],
    },
  ],
  process: {
    head: "Software Development Process",
    details:
      "Our experienced project managers and software developers work to uncover your business needs and develop a personalised solution. We develop the perfect software solution to our clients that stimulates business growth and gain a competitive edge. Thus, if you want improve your business productivity and be a part of digital transformation, we are here to help you.\n\nWe develop high quality and profit-oriented software applications which, help us to stand unique in the industry. With years of hands-on experience, we can build the most effective software solution that benefits your business. We assist you in both System Integration and Legacy System Upgrades by using the proven methodologies and technologies. With our core focus on Software Innovation & Automation, we offer premium quality service at affordable pricing. Let’s get started.",
    image: "",
  },
  benefits: {
    head: "Drive Digital Transformation in Your Business with Us",
    details:
      "We have the skillset to deal with complex business issues by deploying a range of efficient methodologies. Whether you own a large enterprise willing to upgrade your business or a start up to cope with the industry standards, we have got you covered.",
    image: "",
    seconddetails: `Our wide range of software development services include software innovation and migration, software integration, cloud solutions, database tuning, dashboard development, online collaboration platforms, digital learning solutions, product development, maintenance and testing.
      \nWhile offering such a vast range of services, we can be the right partner for you to align IT with your business. Software solutions we build have gained wide appreciation for high quality and low maintenance thereby, delivering maximum ROI to businesses.`,
  },
};

export const OurWorks = [
  { image: Al1, detail: "ERP/SOFTWARE" },
  { image: Al2, detail: "WEBSITE" },
  { image: Al3, detail: "APP" },
];

export const AllTableImage = [
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
];
