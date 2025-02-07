import React from 'react';

// The About component acts like the "About Us" page of a website, 
// giving visitors an introduction to the platform and its mission.
const About = () => {
  return (
    // The outermost div is like the frame of a painting, wrapping everything inside.
    <div className="container mx-auto p-6 bg-pink-500 text-white shadow-lg rounded-lg transition duration-500 ease-in-out transform hover:scale-105">
      
      {/* Title: This acts like a welcome banner at the entrance of a store */}
      <h1 className="text-5xl font-bold text-center mb-6 animate-bounce">About Us</h1>
      
      {/* "Who We Are" section introduces the platform, just like a self-introduction */}
      <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Welcome to PetPal, a compassionate online platform dedicated to connecting loving homes with pets in need. 
        Our mission is to make pet adoption easier, more transparent, and accessible to everyone. 
        We work with shelters, rescue organizations, and individuals to help animals find their forever homes.
      </p>

      {/* Mission Statement: Just like a company's vision board that guides their future actions */}
      <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
      <p className="mb-4 text-lg leading-relaxed">
        We believe that every pet deserves a second chance at happiness. 
        Our goal is to reduce the number of homeless animals by providing a reliable, user-friendly platform where adopters can find their perfect companion. 
        Through our efforts, we aim to create a world where every pet has a safe and loving home.
      </p>

      {/* "What We Do" section lists our key services, like a restaurant menu describing available dishes */}
      <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>🐾 Adoption Listings: Browse a wide range of adoptable pets, including dogs, cats, rabbits, and more.</li>
        <li>🏡 Rehoming Assistance: Helping individuals find responsible adopters for their pets.</li>
        <li>❤️ Rescue & Shelter Support: Partnering with shelters and rescue groups to increase pet adoption rates.</li>
        <li>📚 Pet Care Resources: Providing guidance on pet care, training, and responsible adoption.</li>
      </ul>

      {/* Reasons why users should choose this platform, similar to an advertisement convincing people to buy a product */}
      <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>✔ Verified Listings – We ensure that all pets listed for adoption come from trusted sources.</li>
        <li>✔ User-Friendly Process – Find your ideal pet with ease using our advanced search and filter options.</li>
        <li>✔ Community Support – Join a network of pet lovers, adopters, and experts for guidance and support.</li>
        <li>✔ Advocating for Responsible Adoption – We promote ethical pet ownership and discourage pet abandonment.</li>
      </ul>

      {/* This section encourages users to take action, just like a motivational poster */}
      <h2 className="text-3xl font-semibold mb-4">Join Us in Making a Difference</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Adopting a pet is not just about bringing home a new companion—it’s about giving an animal a second chance at life. 
        Whether you’re looking to adopt, foster, or support our mission, you’re making a real impact.
      </p>
      <p className="text-center text-2xl font-bold">🐶🐱 Find your perfect pet today!</p>

      {/* Contact details section, like a business card at the bottom of a webpage */}
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <p>📍 Address: 123 Pet Street, Barksville, PA 19000</p>
      <p>📞 Phone: +1 (555) 987-6543</p>
      <p>📧 Email: contact@petadoptionhub.com</p>
      <p>🌐 Website: www.petadoptionhub.com</p>

      {/* Social Media Links, acting like road signs directing users to other places */}
      <p>📲 Follow Us:  
        <a href="https://facebook.com/petadoptionhub" className="text-blue-300 hover:underline">Facebook</a> |  
        <a href="https://twitter.com/petadoptionhub" className="text-blue-300 hover:underline">Twitter</a> |  
        <a href="https://instagram.com/petadoptionhub" className="text-blue-300 hover:underline">Instagram</a>  
      </p>

    </div>
  );
};

export default About;
