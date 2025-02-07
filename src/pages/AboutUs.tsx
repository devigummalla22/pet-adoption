mport React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6 bg-pink-500 text-white shadow-lg rounded-lg transition duration-500 ease-in-out transform hover:scale-105">
      <h1 className="text-5xl font-bold text-center mb-6 animate-bounce">About Us</h1>
      <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Welcome to [Your Platform Name], a compassionate online platform dedicated to connecting loving homes with pets in need. Our mission is to make pet adoption easier, more transparent, and accessible to everyone. We work with shelters, rescue organizations, and individuals to help animals find their forever homes.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
      <p className="mb-4 text-lg leading-relaxed">
        We believe that every pet deserves a second chance at happiness. Our goal is to reduce the number of homeless animals by providing a reliable, user-friendly platform where adopters can find their perfect companion. Through our efforts, we aim to create a world where every pet has a safe and loving home.
      </p>
      <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>🐾 Adoption Listings: Browse a wide range of adoptable pets, including dogs, cats, rabbits, and more.</li>
        <li>🏡 Rehoming Assistance: Helping individuals find responsible adopters for their pets.</li>
        <li>❤️ Rescue & Shelter Support: Partnering with shelters and rescue groups to increase pet adoption rates.</li>
        <li>📚 Pet Care Resources: Providing guidance on pet care, training, and responsible adoption.</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
        <li>✔ Verified Listings – We ensure that all pets listed for adoption come from trusted sources.</li>
        <li>✔ User-Friendly Process – Find your ideal pet with ease using our advanced search and filter options.</li>
        <li>✔ Community Support – Join a network of pet lovers, adopters, and experts for guidance and support.</li>
        <li>✔ Advocating for Responsible Adoption – We promote ethical pet ownership and discourage pet abandonment.</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Join Us in Making a Difference</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Adopting a pet is not just about bringing home a new companion—it’s about giving an animal a second chance at life. Whether you’re looking to adopt, foster, or support our mission, you’re making a real impact.
      </p>
      <p className="text-center text-2xl font-bold">🐶🐱 Find your perfect pet today!</p>
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <p>📍 Address: [Your Office Address]</p>
      <p>📞 Phone: [Your Contact Number]</p>
      <p>📧 Email: [Your Contact Email]</p>
      <p>🌐 Website: [Your Website URL]</p>
      <p>📲 Follow Us: [Your Social Media Links]</p>
    </div>
  );
};

export default About;
