"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Collection",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="NOEN Handmade"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Artisanal Leather, Crafted with Soul"
      description="Discover NOEN Handmade by Sara Abedo. Each piece is meticulously stitched and fashioned by hand from premium natural leather."
      buttons={[
        {
          text: "Shop Collection",
          href: "#products",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/vintage-desk-travel-concept_23-2147791093.jpg",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-purse-second-hand-market_23-2149338446.jpg",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/handmade-wooden-decoration-blue-wallet-top-view_1268-17357.jpg",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-working-her-workspace-woman-wearing-apron-making-belt-grounge-dark-stone-texture-background_1157-51595.jpg",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cobbler-working-with-leather_171337-12289.jpg",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/flowers-handicraft-workshop_53876-14445.jpg",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Meet Sara Abedo"
      description="Founder and lead artisan of NOEN Handmade. My passion for leathercraft began as an obsession with texture and durability. Every item reflects my commitment to slow fashion and traditional techniques."
      bulletPoints={[
        {
          title: "Traditional Methods",
          description: "Every stitch is placed by hand, ensuring strength.",
        },
        {
          title: "Premium Materials",
          description: "Only high-quality natural leathers are sourced.",
        },
        {
          title: "Sustainable Design",
          description: "Pieces designed to last a lifetime, not a season.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-engraving-art-tools_23-2149186757.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Classic Tote",
          price: "$180",
          imageSrc: "http://img.b2bpic.net/free-photo/viking-warrior-with-leather-gloves-bum-bag_181624-6921.jpg",
        },
        {
          id: "p2",
          name: "Slim Card Holder",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/man-creates-leather-ware_1157-33999.jpg",
        },
        {
          id: "p3",
          name: "Artisan Belt",
          price: "$65",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-belt-with-buckle_74190-4873.jpg",
        },
        {
          id: "p4",
          name: "Leather Satchel",
          price: "$220",
          imageSrc: "http://img.b2bpic.net/free-photo/tailor-cutting-leather-with-scissors_114579-12118.jpg",
        },
        {
          id: "p5",
          name: "Travel Journal",
          price: "$85",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-autumn-traveling-elements-assortment_23-2148634189.jpg",
        },
        {
          id: "p6",
          name: "Handy Keyring",
          price: "$25",
          imageSrc: "http://img.b2bpic.net/free-photo/bag-binoculars-foliage_23-2147770453.jpg",
        },
      ]}
      title="Our Signature Pieces"
      description="Each item tells a story. Explore our handcrafted collection made with precision and care."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Lifetime Quality",
          subtitle: "Built for endurance",
          category: "Craft",
          value: "100%",
        },
        {
          id: "f2",
          title: "Natural Tanning",
          subtitle: "Eco-conscious leather",
          category: "Materials",
          value: "Pure",
        },
        {
          id: "f3",
          title: "Personal Touch",
          subtitle: "Customized for you",
          category: "Service",
          value: "Unique",
        },
      ]}
      title="Why NOEN Handmade?"
      description="Beyond just accessories, we deliver pieces of art you can wear."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Elena V.",
          role: "Collector",
          company: "DesignCo",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-owners-preparing-their-store_23-2149300867.jpg",
        },
        {
          id: "t2",
          name: "Marcus J.",
          role: "Client",
          company: "Tech",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-rich-woman-sitting-home_23-2149722595.jpg",
        },
        {
          id: "t3",
          name: "Sophia L.",
          role: "Advocate",
          company: "Growth",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-stylish-redhead-traveler-flannel-shirt-sunglasses-with-backpack-posing-studio-gray-background_613910-5228.jpg",
        },
        {
          id: "t4",
          name: "David W.",
          role: "Collector",
          company: "Arts",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-jacket_1303-3801.jpg",
        },
        {
          id: "t5",
          name: "Nina P.",
          role: "Advocate",
          company: "Creative",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-senior-asian-woman-shopaholic-hugging-shopping-bags-smiling-joyful-buying-with-discounts-standing-white-background_1258-74114.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "500+",
          label: "Happy Clients",
        },
        {
          value: "4.9/5",
          label: "Average Rating",
        },
        {
          value: "100%",
          label: "Handmade",
        },
      ]}
      title="Treasured by Our Community"
      description="See why customers love our handmade leather goods."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Craft Magazine",
        "Design Weekly",
        "Leather Enthusiasts",
        "Artisan Daily",
        "Slow Fashion Collective",
        "Global Handmade",
        "Local Market",
      ]}
      title="Proudly Crafted For"
      description="Our work is featured and appreciated by industry leaders."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How do I care for my leather?",
          content: "Clean with a soft, damp cloth and use leather conditioner every few months.",
        },
        {
          id: "q2",
          title: "Do you accept custom orders?",
          content: "Yes, we are happy to discuss bespoke designs. Reach out through our contact page.",
        },
        {
          id: "q3",
          title: "What leather do you use?",
          content: "We use ethically sourced natural full-grain leather.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Got questions about our process? We have answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Start Your NOEN Journey"
      description="Questions? Custom orders? Let's connect."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@noenhandmade.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/close-up-person-working-engraving_23-2149286537.jpg"
      logoText="NOEN Handmade"
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Shop",
              href: "#products",
            },
            {
              label: "Our Story",
              href: "#about",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
