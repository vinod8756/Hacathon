import {
  Box,
  Container,
  Grid,
  Hidden,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import github from '../Assests/github.svg'
import twitter from '../Assests/twitter.svg'
import googlePlay from '../Assests/google_play.svg'
import appStore from '../Assests/appleStore.svg'
import linkdin from '../Assests/linkedIn.svg'
import youtube from '../Assests/youtube_icon.svg'
import { useTranslation } from "react-i18next";

function Copyright() {
  return (
    <Typography variant="body1" align="center">
      Copyright &#169; {new Date().getFullYear()} Nova Next
    </Typography>
  );
}

const iconList = [
 github,
  twitter,
  linkdin,
  youtube
];

function NewFooterSection() {
  const classes = useStyles();
  const {t} = useTranslation()



  return (
    <Box className={classes.root}>
      <Container className={classes.footerContainer}>
        
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} lg={4} md={6}>
            <Box>
              <Typography variant="h4">{t('Nova Next')}</Typography>
              <Typography variant="body1" className={classes.description}>
                {t('Our mission is to provide innovative solutions and exceptional service, empowering our clients to succeed in a rapidly changing world.')}
              </Typography>
              <Box className={classes.iconContainer}>
                {iconList.map((icon, index) => (
                  <IconButton key={index} className={classes.socialButton}>
                    <img src={icon} alt="Social Icon" />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography variant="h5">{t('Quick Links')}</Typography>
              <Box mt={3} className={classes.links}>
                <Typography variant="body1">{t('About Us')}</Typography>
                <Typography variant="body1">{t('Services')}</Typography>
                <Typography variant="body1">{t('Contact')}</Typography>
                <Typography variant="body1">{t('Blog')}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography variant="h5">{t('Resources')}</Typography>
              <Box mt={3} className={classes.links}>
                <Typography variant="body1">{t('Help Center')}</Typography>
                <Typography variant="body1">{t('Privacy Policy')}</Typography>
                <Typography variant="body1">{t('Terms of Service')}</Typography>
                <Typography variant="body1">{t("FAQs")}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography variant="h5">{t('Communication')}</Typography>
              <Box mt={3} className={classes.links}>
                <Typography variant="body1">{t('Refer a friend')}</Typography>
                <Typography variant="body1">{t('Scholarship')}</Typography>
              </Box>
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={2}>
              <Box>
                <Typography variant="h5">{t('Download App')}</Typography>
                <Box mt={3} display="flex" gap={2} flexDirection='column'>
                  <img src={googlePlay} alt="Google Play" className={classes.appIcon} />
                  <img src={appStore} alt="Apple Store" className={classes.appIcon} />
                </Box>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 400,
    background: "#f5f5f5",
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  footerContainer: {
    maxWidth: "85%",
  },
  description: {
    marginTop: theme.spacing(3),
    lineHeight: "1.8",
  },
  iconContainer: {
    display: "flex",
    gap: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  socialButton: {
    background: "#62BDEA",
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.25)",
    "&:hover": {
      background: '#62BDEA',
    },
  },
  darkModeSwitcher: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(4),
  },
  darkModeIcon: {
    maxHeight: 30,
    maxWidth: 30,
    marginLeft: theme.spacing(1),
  },
  links: {
    "& > *": {
      display: "block",
      marginBottom: theme.spacing(1),
    },
  },
  appIcon: {
    cursor: "pointer",
    height: 40,
  },
}));

export default NewFooterSection;
