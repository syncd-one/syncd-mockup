import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SustainabilityChallengeOG = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage
            src="/api/placeholder/40/40"
            alt="Green Campus Initiative"
          />
          <AvatarFallback>GC</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">Green Campus Initiative</h3>
          <p className="text-sm text-gray-500">sustainability@university.edu</p>
        </div>
      </div>
    </div>
    <div>
      <h2 className="text-xl font-bold">
        Campus Sustainability Challenge: Real-time Update
      </h2>
      <p className="text-sm text-gray-500">To: all@university.edu</p>
    </div>
    <div className="prose max-w-none">
      <p>Dear University Community,</p>
      <p>
        We are excited to provide you with a real-time update on our ongoing
        Campus Sustainability Challenge. Your collective efforts are making a
        significant impact, and we want to keep you informed about our progress.
      </p>
      <p>Current Challenge Status:</p>
      <ul>
        <li>
          Energy Conservation: 15% reduction in energy usage compared to last
          month
        </li>
        <li>Waste Reduction: 30% increase in recycling rates across campus</li>
        <li>Water Savings: 10% decrease in water consumption</li>
        <li>Green Transportation: 25% increase in bike-share program usage</li>
      </ul>
      <p>
        These numbers are updating in real-time, and we encourage you to check
        our interactive dashboard for the latest figures and to see how your
        individual contributions are adding up.
      </p>
      <p>Upcoming Events:</p>
      <ul>
        <li>Sustainability Fair: This Saturday, 10 AM - 4 PM, Main Quad</li>
        <li>Green Tech Workshop: Next Tuesday, 2 PM, Engineering Building</li>
        <li>
          Campus Clean-up Day: Next Friday, 1 PM - 5 PM, Meet at Student Center
        </li>
      </ul>
      <p>
        Remember, every small action counts. Whether it's turning off lights,
        using reusable water bottles, or choosing to bike instead of drive,
        you're contributing to a more sustainable campus and world.
      </p>
      <p>
        To view detailed statistics, track your personal impact, or sign up for
        events, please click the "View Sustainability Dashboard" button in your
        email client. If you're viewing this in a standard email client, you can
        access the dashboard at: https://university.edu/sustainability-challenge
      </p>
      <p>
        Thank you for your continued dedication to making our campus more
        environmentally friendly. Together, we can create a sustainable future!
      </p>
      <p>
        Best regards,
        <br />
        The Green Campus Initiative Team
      </p>
    </div>
  </div>
);

export default SustainabilityChallengeOG;
