import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const AnimatedSection = ({ children, className = '', delay = 0, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
