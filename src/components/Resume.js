import React from 'react';
import { motion } from 'framer-motion';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab';
import Typography from '@mui/material/Typography';

const scale = 1.01;

const Resume = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' ,backgroundColor:'#F0F0F0'}}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: 'black', width: '3rem', height: '3rem' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', height: '100%', background: 'black' }}
                whileHover={{ scale: scale }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '2rem', textAlign: 'left' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: scale }}
            >
              <Typography variant="h4" sx={{ color: 'black', fontFamily: 'monospace', mb: '1rem' }}>
                2020
              </Typography>
              <Typography variant="body1" sx={{ color: 'black', fontFamily: 'monospace' , textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)'}}>
              j'ai obtenu mon baccalauréat marocain en Sciences Physiques,
               une étape clé dans mon parcours éducatif. Par la suite, 
               j'ai eu la chance d'intégrer l'École Nationale des Sciences
                Appliquées d'El Jadida, une institution renommée offrant un
                enseignement de qualité dans le domaine des sciences appliquées.
                 Cette opportunité a ouvert de nouvelles perspectives et m'a permis
                  de commencer mon cursus universitaire.
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: 'black', width: '3rem', height: '3rem' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', height: '100%', background: 'black' }}
                whileHover={{ scale: scale }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '2rem', textAlign: 'left' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: scale }}
            >
              <Typography variant="h4" sx={{ color: 'black', fontFamily: 'monospace', mb: '1rem' }}>
                2021/2022
              </Typography>
              <Typography variant="body1" sx={{ color: 'black', fontFamily: 'monospace' , textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)'}}>
              j'ai poursuivi mes études à l'École Nationale des Sciences Appliquées d'El Jadida.
               J'ai suivi avec enthousiasme un cycle préparatoire de deux ans, au cours duquel 
               j'ai approfondi mes connaissances dans divers domaines liés aux sciences appliquées.
                Cette période de préparation m'a permis de consolider mes bases académiques 
                et de me préparer efficacement à la suite de mon cursus.
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: 'black', width: '3rem', height: '3rem' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', height: '100%', background: 'black' }}
                whileHover={{ scale: scale }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '2rem', textAlign: 'left' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: scale }}
            >
              <Typography variant="h4" sx={{ color: 'black', fontFamily: 'monospace', mb: '1rem' }}>
                2023
              </Typography>
              <Typography variant="body1" sx={{ color: 'black', fontFamily: 'monospace', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
              j'ai fait le choix de m'orienter vers la filière 2ITE  à l'ENSA
              . Cette spécialisation en ingénierie informatique a été motivée par
              ma passion pour la technologie et mon désir de contribuer au monde
              de l'informatique. J'ai intégré cette filière avec enthousiasme, 
              prêt à relever les défis et à développer mes compétences dans ce 
              domaine en constante évolution.
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: 'black', width: '3rem', height: '3rem' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', height: '100%', background: 'black' }}
                whileHover={{ scale: scale }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '2rem', textAlign: 'left' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: scale }}
            >
              <Typography variant="h4" sx={{ color: 'black', fontFamily: 'monospace', mb: '1rem' }}>
                Currently
              </Typography>
              <Typography variant="body1" sx={{ color: 'black', fontFamily: 'monospace', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Je suis actuellement en cours de poursuite de ma formation en tant qu'étudiant
               en ingénierie informatique dans la filière 2ITE à l'ENSA. Je me passionne pour
                les avancées technologiques et je suis constamment à l'affût des nouvelles 
                tendances et innovations dans le domaine de l'informatique. Je travaille 
                également sur des projets pratiques pour acquérir une expérience pratique 
                et mettre en pratique mes connaissances théoriques. Je suis déterminé à 
                continuer mon parcours académique et à contribuer de manière significative 
                au domaine de l'ingénierie informatique.
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Resume;











