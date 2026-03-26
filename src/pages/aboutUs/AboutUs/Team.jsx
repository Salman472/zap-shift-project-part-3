import React from "react";

const Team = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold border-b-2">👥 Our Team</h1>
      <p>
        Our team is the heartbeat of our operations. Every member, from
        logistics experts to customer support, shares a single goal: ensuring
        every parcel reaches its destination safely and on time.
      </p>

      <p>
        We thrive on collaboration, innovation, and a shared passion for
        excellence. Our people are not just employees—they are problem-solvers,
        trusted partners, and the driving force behind every successful
        delivery.
      </p>
      <p>
        We invest in training, technology, and culture to empower our team, so
        they can consistently provide exceptional service that delights
        customers and builds trust.
      </p>
      <div>
        <h1 className="text-2xl font-black">Key Highlights of Our Team:</h1>
        <ul className="list-disc ml-2 sm:ml-4 md:ml-6">
          <li>Experienced logistics professionals</li>
          <li>Customer-first support staff</li>
          <li>Tech innovators driving real-time tracking</li>
          <li>Operations specialists ensuring on-time delivery</li>
        </ul>
      </div>
    </div>
  );
};

export default Team;
