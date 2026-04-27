import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const NeuralBackground = () => {
  const [nodes, setNodes] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    setNodes(
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
    );
  }, []);

  const lines = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          lines.push({ x1: nodes[i].x, y1: nodes[i].y, x2: nodes[j].x, y2: nodes[j].y });
        }
      }
    }
    return lines;
  }, [nodes]);

  return (
    <motion.svg
      initial={{ opacity: 0.4 }}
      animate={{ opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute inset-0 pointer-events-none z-0"
    >
      {lines.map((line, i) => (
        <line key={i} {...line} strokeOpacity={0.08} stroke="hsl(var(--electric))" />
      ))}
      {nodes.map((node) => (
        <circle key={node.id} cx={node.x} cy={node.y} r={1.5} fill="hsl(var(--electric))" />
      ))}
    </motion.svg>
  );
};

export default NeuralBackground;