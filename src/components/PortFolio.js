import React from 'react';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
    {
        name: "Project 1",
        description: `J'ai développé une application dans le cadre de mon projet de 
        fin d'études qui vise à optimiser et gérer efficacement les emplois du temps.
         L'objectif principal de l'application est d'automatiser la planification des 
         ours, des réunions et des autres activités académiques, tout en tenant compte 
         des contraintes et des préférences des utilisateurs.`,
         technologies:["Laravel,MySQL,Python,BootStrap"]
    },
    {
        name: "Project 2",
        description: `J'ai développé une application de gestion de bibliothèque avancée
         qui simplifie et améliore considérablement la gestion des livres, des utilisateurs 
         et des opérations de prêt. L'application offre une gamme de fonctionnalités robustes
          pour optimiser l'efficacité et offrir une expérience fluide aux utilisateurs.`,
          technologies:["Java"]
    },
    {
        name: "Project 3",
        description: `J'ai développé une application dédiée à l'affichage et à l'exploration 
        des différents Pokémon existants. Cette application permet aux utilisateurs de découvrir
         et de rechercher des informations détaillées sur les Pokémon, notamment leurs noms, types,
          capacités, statistiques, évolutions et bien plus encore.`,
          technologies:["React Native"]
    },
    {
        name: "Project 4",
        description: `J'ai développé un projet qui est une application web
         permettant aux utilisateurs de trouver et localiser facilement les pharmacies dans leur région.
          L'application offre une interface conviviale où les utilisateurs peuvent effectuer une recherche 
          en appliquant des filtres personnalisés`,
    technologies:["React.js","Node.js","Express.js"]
    },
    {
        name: "Project 5",
        description: `J'ai développé une application de gestion des salles et des machines qui offre aux
         utilisateurs la possibilité de gérer efficacement l'utilisation et la disponibilité des différentes
          salles et machines dans un environnement spécifique, tel qu'une entreprise, une université ou un centre de recherche.`,
    technologies:["Laravel","Chart.js","BootStrap"]
    },
    {
        name: "Project 6",
        description: `J'ai développé une application web captivante de Tic Tac Toe qui offre une expérience de jeu immersive
         et propose un défi de taille grâce à son bot infaillible. Cette application vous permet de plonger dans le célèbre 
         jeu Tic Tac Toe, où vous pouvez défier un adversaire virtuel d'une intelligence redoutable`,
    technologies:["HTML","CSS","JavaScript"]
    },
];

const Portfolio = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Box sx={{ backgroundColor: '#F0F0F0', minHeight: '100vh', padding: '3rem' }}>
  <Grid container justifyContent="center" spacing={3}>
    {/* Projects */}
    {projects.map((project, i) => (
      <Grid item xs={12} sm={6} md={4} key={i}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Card sx={{ height: '100%', backgroundColor: '#1c1c1c', color: '#F4C430' }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontFamily: 'monospace' }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ color: 'whitesmoke', fontFamily: 'monospace', fontSize: '18px' }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ color: 'whitesmoke', fontFamily: 'monospace', fontSize: '18px', marginTop: '20px' }}>
                  <span style={{color:'#F4C430'}}>Technologies:</span> {project.technologies.join(', ')}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href='https://github.com/OthmanElidirssi' style={{textDecoration:'none',color:'#3B71CA'}}>Visit My GitHub Page</a>
              </Button>
            </CardActions>
          </Card>
        </motion.div>
      </Grid>
    ))}
  </Grid>
</Box>


    );
};

export default Portfolio;




