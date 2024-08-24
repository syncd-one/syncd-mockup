import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Atom, RotateCw, Maximize2, Download, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const VirtualLabUI = () => {
  const [entangledState, setEntangledState] = useState({ a: 0, b: 0 });
  const [measurementBasis, setMeasurementBasis] = useState(0);
  const [measurements, setMeasurements] = useState<{
    a: number | null;
    b: number | null;
  }>({ a: null, b: null });
  const [correlation, setCorrelation] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);

  useEffect(() => {
    // Simulate quantum correlation
    const newCorrelation = Math.cos(2 * measurementBasis) * 100;
    setCorrelation(newCorrelation);
  }, [measurementBasis]);

  const generateEntangledPair = () => {
    const newState = {
      a: Math.random() < 0.5 ? 0 : 1,
      b: Math.random() < 0.5 ? 0 : 1,
    };
    setEntangledState(newState);
    setMeasurements({ a: null, b: null });
  };

  const measure = () => {
    const probabilityA = Math.cos(measurementBasis) ** 2;
    const probabilityB = Math.sin(measurementBasis) ** 2;
    setMeasurements({
      a: Math.random() < probabilityA ? 0 : 1,
      b: Math.random() < probabilityB ? 0 : 1,
    });
  };

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-indigo-800">
          Quantum Entanglement Simulation
        </h2>
        <p className="text-lg text-indigo-600">
          Explore the spooky action at a distance!
        </p>
      </div>

      {showTutorial && (
        <Alert>
          <AlertTitle>Welcome to the Quantum Entanglement Lab!</AlertTitle>
          <AlertDescription>
            Start by generating an entangled pair, then adjust the measurement
            basis and observe the results. Can you achieve perfect correlation?
          </AlertDescription>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowTutorial(false)}
            className="mt-2"
          >
            Got it!
          </Button>
        </Alert>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Atom className="mr-2" /> Quantum State
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center space-x-8">
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold"
                animate={{ rotate: entangledState.a * 180 }}
              >
                A: {entangledState.a}
              </motion.div>
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-2xl font-bold"
                animate={{ rotate: entangledState.b * 180 }}
              >
                B: {entangledState.b}
              </motion.div>
            </div>
            <Button onClick={generateEntangledPair} className="w-full mt-4">
              <RotateCw className="mr-2" /> Generate Entangled Pair
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Maximize2 className="mr-2" /> Measurement Basis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Slider
              value={[measurementBasis]}
              onValueChange={([value]) => setMeasurementBasis(value)}
              max={Math.PI / 2}
              step={0.01}
              className="mb-4"
            />
            <p className="text-center mb-4">
              Angle: {((measurementBasis * 180) / Math.PI).toFixed(2)}°
            </p>
            <Button onClick={measure} className="w-full">
              Measure
            </Button>
            {measurements.a !== null && measurements.b !== null && (
              <div className="mt-4 text-center">
                <p>Measurement A: {measurements.a}</p>
                <p>Measurement B: {measurements.b}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="correlation">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="correlation">Correlation</TabsTrigger>
              <TabsTrigger value="bloch">Bloch Sphere</TabsTrigger>
            </TabsList>
            <TabsContent value="correlation">
              <div className="h-64 flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-indigo-600">
                      {correlation.toFixed(2)}%
                    </div>
                  </div>
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e0e0e0"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="10"
                      strokeDasharray={`${correlation * 2.83} 283`}
                    />
                  </svg>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="bloch">
              <div className="h-64 flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/300x300.png?text=Bloch+Sphere"
                  alt="Bloch Sphere Visualization"
                  className="max-h-full"
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-center space-x-4">
        <Button variant="outline">
          <Download className="mr-2" /> Export Data
        </Button>
        <Button variant="outline" onClick={() => setShowTutorial(true)}>
          <HelpCircle className="mr-2" /> Show Tutorial
        </Button>
      </div>
    </div>
  );
};

export default VirtualLabUI;
