import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const VirtualLabOG = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage
            src="/api/placeholder/40/40"
            alt="Department of Physics"
          />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">Department of Physics</h3>
          <p className="text-sm text-gray-500">physics.lab@university.edu</p>
        </div>
      </div>
    </div>
    <div>
      <h2 className="text-xl font-bold">
        Virtual Lab Experiment: Quantum Entanglement Simulation
      </h2>
      <p className="text-sm text-gray-500">
        To: physics.students@university.edu
      </p>
    </div>
    <div className="prose max-w-none">
      <p>Dear Physics Students,</p>
      <p>
        We are excited to announce our latest virtual lab experiment: a Quantum
        Entanglement Simulation. This cutting-edge simulation will allow you to
        explore one of the most fascinating phenomena in quantum mechanics from
        the comfort of your own computer.
      </p>
      <p>Experiment Overview:</p>
      <ul>
        <li>Simulate the creation of entangled photon pairs</li>
        <li>Manipulate measurement bases and observe correlations</li>
        <li>Visualize the quantum state using Bloch spheres</li>
        <li>Test Bell&apos;s inequalities and explore quantum non-locality</li>
      </ul>
      <p>Key Features of the Virtual Lab:</p>
      <ul>
        <li>Interactive 3D visualizations of quantum states</li>
        <li>Real-time calculation of measurement probabilities</li>
        <li>Data logging and export for analysis</li>
        <li>Guided tutorials and challenge modes</li>
      </ul>
      <p>
        To access the virtual lab, please click on the &quot;Launch Virtual
        Lab&quot; button in your email client. If you&apos;re viewing this in a
        standard email client, you can access the lab at:
        https://physics.university.edu/virtual-lab/quantum-entanglement
      </p>
      <p>
        Before starting the experiment, please review the provided background
        material on quantum entanglement and Bell&apos;s inequalities. You will
        be required to complete a short quiz to unlock the full features of the
        simulation.
      </p>
      <p>
        Remember, this virtual lab is designed to complement your theoretical
        studies and prepare you for future in-person lab work. Your engagement
        and feedback will be crucial in helping us refine and expand our virtual
        lab offerings.
      </p>
      <p>
        If you encounter any technical issues or have questions about the
        experiment, please don&apos;t hesitate to reach out to our lab support
        team at lab.support@physics.university.edu.
      </p>
      <p>
        We look forward to seeing your discoveries and insights from this
        quantum entanglement simulation!
      </p>
      <p>
        Best regards,
        <br />
        Professor Quantum
        <br />
        Department of Physics
      </p>
    </div>
  </div>
);

export default VirtualLabOG;
