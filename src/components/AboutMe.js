import React from 'react';
import { Box, Typography, Paper, Grid, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiCsharp, SiPhp, SiLaravel, SiReact, SiMongodb, SiMysql, SiOracle, SiGit, SiPython } from 'react-icons/si';

const AboutPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F0F0F0',
        minHeight: '100vh',
        padding: '3rem',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper elevation={3} sx={{ padding: '2rem', backgroundColor: '#1c1c1c', color: '#fff' }}>
              <Typography variant="h4" gutterBottom sx={{fontWeight:'bold',color:'#F4C430',fontFamily:'monospace'}}>
                About Me
              </Typography>
              <Typography variant="body1" sx={{fontSize:'17px',fontWeight:'bold',fontFamily:'monospace' }}>
              Je m'appelle Othman El Idrissi et je suis un ingénieur logiciel dévoué,
               passionné par l'utilisation de la technologie pour résoudre des problèmes
                complexes et stimuler l'innovation. Tout au long de mon parcours dans le 
                domaine du génie logiciel, j'ai acquis une solide base en programmation, 
                en méthodologies de développement logiciel et en conception de systèmes.
                 Je recherche constamment des opportunités pour élargir mes compétences 
                 et rester à jour avec les dernières tendances et technologies de l'industrie.
              </Typography>
              <Typography variant="body1" sx={{fontSize:'17px',marginTop:'10px',fontWeight:'bold',fontFamily:'monospace'}}>
              Je m'épanouis dans des environnements collaboratifs où des perspectives diverses
               se réunissent pour créer des solutions impactantes. Je crois en la puissance du
                travail d'équipe, de la communication efficace et de l'apprentissage continu.
                 Au-delà de mes compétences techniques, je suis motivé par le désir de faire
                  une différence positive dans la vie des gens grâce à la technologie. 
                  Je suis enthousiaste à l'idée des possibilités infinies offertes par 
                  le génie logiciel et j'ai hâte de contribuer mes compétences, 
                  ma créativité et ma passion pour façonner l'avenir de l'industrie.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper elevation={3} sx={{ padding: '2rem', backgroundColor: '#1c1c1c', color: '#fff' }}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Arial', fontSize: '2rem', marginBottom: '1rem',fontWeight:'bold',color:'#F4C430',fontFamily:'monospace' }}>
                Tech Stack
              </Typography>
              <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiHtml5 size={24} color="#e34c26"  />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="HTML" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiCss3 size={24} color="#2965f1" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="CSS" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiJavascript size={24} color="#f7df1e" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="JavaScript" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiCsharp size={24} color="#007396" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="C Sharp" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiPhp size={24} color="#777bb3" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="PHP" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiLaravel size={24} color="#ff2d20" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="Laravel" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiReact size={24} color="#61dafb" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="React.js" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiMongodb size={24} color="#47a248" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="MongoDB" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiMysql size={24} color="#4479a1" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="MySQL" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiOracle size={24} color="#f80000" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace'} }} primary="Oracle" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiGit size={24} style={{ color: 'blue' }} />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="Git" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiPython size={24} color="#3776ab" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem' ,fontWeight:'bold',fontFamily:'monospace'} }} primary="Python" />
                </ListItem>
              </List>
            </Paper>



          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;










