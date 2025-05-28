import { BarChartBig, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-6"
      >
        <BarChartBig className="w-20 h-20 text-blue-600 dark:text-blue-400" />
      </motion.div>

      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold tracking-tight text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        404: Data Missing
      </motion.h1>

      <motion.p
        className="mt-4 text-base sm:text-lg text-muted-foreground max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Looks like the data you're looking for isn't in our dataset.
      </motion.p>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="/">
          <Button className="text-base flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
