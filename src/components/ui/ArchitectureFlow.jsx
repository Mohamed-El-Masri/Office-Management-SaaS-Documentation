import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLongArrowAltRight, FaLongArrowAltDown } from 'react-icons/fa'

const ArchitectureFlow = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0)
  
  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Steps visualization */}
        <div className="w-full md:w-7/12 lg:w-8/12">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md h-80 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeStep === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: activeStep === index ? 'block' : 'none' }}
                >
                  {step.visualization}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Steps list */}
        <div className="w-full md:w-5/12 lg:w-4/12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-lg font-semibold p-4 border-b dark:border-gray-700">
              Process Steps
            </h3>
            
            <div className="overflow-auto max-h-64">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`
                    w-full text-left p-4 flex items-start gap-3 transition-colors
                    ${index === steps.length - 1 ? '' : 'border-b dark:border-gray-700'}
                    ${activeStep === index 
                      ? 'bg-primary-50 dark:bg-gray-700' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}
                  `}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`
                    flex items-center justify-center rounded-full w-6 h-6 mt-0.5
                    ${activeStep === index 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-600'}
                  `}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {step.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Flow visualization - shows on larger screens */}
      <div className="hidden lg:flex justify-center mt-8">
        <div className="flex flex-wrap items-center justify-center max-w-4xl">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <button
                className={`
                  w-32 h-24 p-2 rounded-lg flex flex-col items-center justify-center text-center
                  border transition-colors cursor-pointer
                  ${activeStep === index 
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30' 
                    : 'border-gray-200 dark:border-gray-700'}
                `}
                onClick={() => setActiveStep(index)}
              >
                <span className="text-xs font-medium mb-1">Step {index + 1}</span>
                <span className="text-xs">{step.title}</span>
              </button>
              
              {index < steps.length - 1 && (
                <div className="mx-2">
                  <FaLongArrowAltRight className="text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArchitectureFlow
