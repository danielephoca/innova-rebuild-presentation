import { motion } from 'framer-motion'

export default function Slide01Cover({ isActive }) {
  return (
    <div className="slide-root">
      <div style={{ textAlign: 'center', maxWidth: 820 }}>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}
        >
          <svg width="104" height="104" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 152, 131, 0.15))' }}>
            <rect width="250" height="250" rx="125" fill="white" />
            <path d="M116.508 130.036C116.508 130.036 119.124 121.593 119.713 119.597C119.713 119.597 108.796 66.0259 67.2941 64.0144C67.2941 64.0144 44.8814 62.0347 40.0156 81.3388C36.0164 97.2002 41.4069 114.986 58.5167 127.548C58.5167 127.548 74.9108 141.604 112.78 141.604L114.354 136.882C114.354 136.882 63.4222 135.403 55.0979 104.658C51.2975 90.6489 58.6041 80.0985 71.3569 80.4801C78.0434 80.6868 86.7175 81.5852 96.4252 92.4696C106.149 103.378 111.452 112.219 116.5 130.028" fill="#0C8870" />
            <path d="M139.025 136.881C139.025 136.881 138.381 139.25 137.522 141.604C137.522 141.604 165.071 142.717 183.469 134.583C199.592 127.459 216.495 105.969 209.698 82.8168C207.368 74.8821 197.501 61.5807 179.533 64.2044C169.762 65.6276 142.777 70.8273 130.112 112.298C119.204 148.028 121.128 143.742 112.788 168.993C106.602 187.701 94.1593 198.872 82.1936 194.658C76.2625 192.567 70.7448 182.319 81.4145 169.049C89.3333 159.206 96.8466 154.221 109.25 151.224L110.609 148.06C110.609 148.06 87.2979 148.513 73.6626 163.269C73.6626 163.269 57.8886 176.531 62.8021 195.358C62.8021 195.358 64.7261 206.481 76.9224 209.263C76.9224 209.263 100.027 214.614 112.438 192.575C112.438 192.575 120.062 177.962 125.032 158.705C129.42 141.715 129.738 139.187 140.273 109.992C148.359 87.5951 164.498 78.4757 180.384 81.0915C192.731 83.1189 200.475 97.7719 193.105 113.983C188.581 123.929 174.747 134.925 139.017 136.873" fill="#0C8870" />
            <path d="M135.486 151.233L136.448 148.029C136.448 148.029 150.441 148.204 163.273 153.34C176.607 158.675 196.038 177.28 185.448 198.452C182.593 204.161 173.657 215.101 153.605 207.293C143.27 203.262 131.217 189.754 129.881 172.326C129.881 172.326 130.914 168.24 133.308 158.516C133.308 158.516 137.513 194.763 161.779 195.757C171.995 196.17 176.885 185.85 173.76 176.111C169.904 164.082 160.228 156.377 135.486 151.241" fill="#0C8870" />
            <path d="M122.288 72.744C117.208 71.941 110.736 65.6918 113.288 57.7889C115.57 50.7288 121.358 39.5899 124.84 40.0034C130.072 40.6315 138.579 56.2703 137.124 63.5451C135.518 71.5673 129.611 73.8968 122.288 72.736" fill="#0C8870" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
          style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 52, lineHeight: 1.18, color: '#F0FAF8', marginBottom: 22 }}
        >
          Rebuilding Innova
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.24 }}
          style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 21, color: '#A8C7C2', lineHeight: '32px' }}
        >
          One modern foundation for the website. Faster, safer, cheaper, and ready to reuse on every site we run.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.36 }}
        style={{ position: 'absolute', bottom: 40, left: 0, right: 0, textAlign: 'center', fontFamily: 'Poppins' }}
      >
        <span style={{ fontWeight: 500, fontSize: 13, color: '#F0FAF8' }}>Daniel Saul</span>
        <span style={{ fontSize: 13, color: '#A8C7C2', margin: '0 8px' }}>|</span>
        <span style={{ fontWeight: 400, fontSize: 13, color: '#A8C7C2' }}>DevOps Engineer, Innova</span>
      </motion.div>
    </div>
  )
}
