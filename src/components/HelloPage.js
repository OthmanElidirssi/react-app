import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HelloPage = () => {
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.8 },
    },
  };



  return(
    <div
      style={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#F0F0F0',
        color: '#333',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ padding: '2rem' }}
        >
          <motion.h1
            variants={titleVariants}
            style={{ fontSize: '3rem', marginBottom: '1rem',fontFamily:'monospace' }}
          >
            Hi there<span style={{ fontSize: '6rem'}}>&#x1F44B;</span>, I'm
            <br />
            <span
              style={{
                fontSize: '3rem',
                fontStyle: 'oblique',
                fontWeight: 'bold',
                fontFamily:'monospace'
              }}
            >
              Othman El idrissi
            </span>
          </motion.h1>

          <motion.p
            variants={buttonVariants}
            style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'sans-serif', wordSpacing: '2px', lineHeight: '35px',fontWeight:'200',fontFamily:'monospace' }}
          >
            Join me as I take my first steps in the world of design and development, showcasing my early projects and learning experiences.
            <br />
            <br />
          </motion.p>

          <motion.button
            variants={buttonVariants}
            style={{
              backgroundColor:  '#333',
              color: '#fff',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontFamily:'monospace',
              fontWeight:'bold'
            }}
          >
            <Link to="/portfolio" style={{
              textDecoration: 'none',
              color: "white"
            }}>
              Portfolio
            </Link>
          </motion.button>
          <motion.button
            variants={buttonVariants}
            style={{
              backgroundColor: '#333',
              color:'#fff',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: "5px",
              fontFamily:'monospace',
              fontWeight:'bold'
            }}
          >
            <Link to="/contact" style={{
              textDecoration: 'none',
              color: "white"
            }}>
              Contact Me
            </Link>
          </motion.button>
        </motion.div>
      </div>
      <motion.div
      variants={containerVariants}
        style={{
          flex: 1,
          backgroundImage: 'url("/images/peakpx3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></motion.div>
    </div>
  );
};

export default HelloPage;


