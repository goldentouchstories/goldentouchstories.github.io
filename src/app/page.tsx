'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container, Grid, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {
  BG_COLOR,
  MAIN_COLOR,
  NAVBAR_APPBAR_TYPOGRAPHY,
  NAVBAR_CONTAINER_DISPLAY,
  NAVBAR_ICON_BUTTON_DISPLAY,
  WHITE_COLOR,
} from '../../public/theme/theme';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Young_Serif } from 'next/font/google';

const youngSerif = Young_Serif({ subsets: ['latin'], weight: '400' });

const drawerWidth = 240;

export const metadata = {
  title: 'Goldentouch Stories',
  description: 'Seyedali Peyghambari & Analy Goldentouch',
  keywords: ['Goldentouch Stories'],
  authors: [{ name: 'Seyedali Peyghambari' }, { name: 'Analy Goldentouch' }],
  applicationName: 'Goldentouch Stories',
  creator: 'Sobhan Esfandyari',
};

const navigation = [
  { name: 'HOME', href: '/', current: true },
  { name: 'FILM & TV', href: '/film-and-tv', current: false },
  { name: "CHILDREN'S BOOK", href: '/children-book', current: false },
  { name: 'LYRICS', href: '/lyrics', current: false },
  { name: 'GALLERY', href: '/gallery', current: false },
  { name: 'HONOR', href: '/honor', current: false },
  { name: 'ABOUT US', href: '/about-us', current: false },
  { name: 'CONTACT', href: '/contact-us', current: false },
];

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar =
  styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  }) <
  AppBarProps >
  (({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Navbar(): JSX.Element {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar position="fixed" open={open} sx={{ backgroundColor: BG_COLOR }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                mr: 2,
                display: NAVBAR_ICON_BUTTON_DISPLAY,
              }}
            >
              <MenuIcon
                sx={{
                  display: NAVBAR_ICON_BUTTON_DISPLAY,
                }}
              />
            </IconButton>
            <Container
              sx={{
                display: NAVBAR_CONTAINER_DISPLAY,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              maxWidth="xl"
            >
              <Grid container display="flex" justifyContent="center">
                <Grid
                  item
                  xl={2}
                  lg={2}
                  md={2}
                  sm={2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image src={logo} alt="golden touchstories logo" />
                </Grid>

                <Grid
                  item
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  xl={10}
                  lg={10}
                  md={10}
                  sm={10}
                >
                  <Typography
                    display="flex"
                    textAlign="center"
                    mt={'3%'}
                    className={youngSerif.className}
                    fontWeight="bold"
                    fontSize="2.5rem"
                  >
                    Goldentouch Stories
                  </Typography>
                  <Grid
                    item
                    container
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    // textAlign="flex-end"
                    xl={10}
                    lg={10}
                    md={10}
                    sm={10}
                    pb={'2%'}
                  >
                    {navigation.map((title) => (
                      <Link
                        href={title.href}
                        key={title.name}
                        style={{
                          ...NAVBAR_APPBAR_TYPOGRAPHY,
                          color: WHITE_COLOR,
                          textDecoration: 'none',
                          margin: '0 11px', // Adjust margin as needed
                        }}
                        // className="times"
                        className="font-serif"
                      >
                        {title.name}
                      </Link>
                    ))}
                    <Link href="https://www.instagram.com/goldentouchstories/?utm_source=ig_web_button_share_sheet&igshid=ODE2OTA4Y2Y1MQ==">
                      <InstagramIcon sx={{ color: 'white' }} />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            backgroundColor: MAIN_COLOR,
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
            display: NAVBAR_ICON_BUTTON_DISPLAY,
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader sx={{ backgroundColor: MAIN_COLOR }}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon sx={{ color: 'white' }} />
              ) : (
                <ChevronRightIcon sx={{ color: 'white' }} />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider />

          <List
            sx={{
              backgroundColor: MAIN_COLOR,
              height: '100%',
              pl: 1,
              pt: 3,
            }}
          >
            {navigation.map((title) => (
              <Link
                href={title.href}
                key={title.name}
                style={{
                  ...NAVBAR_APPBAR_TYPOGRAPHY,
                  color: WHITE_COLOR,
                  textDecoration: 'none',
                  paddingBottom: '3%',
                  overflow: 'visible',
                }}
                className="font-serif"
              >
                {title.name}
              </Link>
            ))}
          </List>
          <Divider />
        </Drawer>
      </Box>
      <Container
        sx={{
          pt: '15%',
        }}
      >
        <Box>
          <Grid container>
            <Grid
              item
              maxWidth="lg"
              lg={8}
              md={8}
              sm={10}
              xs={10}
              className="mx-auto"
            >
              <Typography
                className="font-serif"
                fontSize="1.4rem"
                fontWeight={700}
                textAlign={'center'}
              >
                ANALY GOLDENTOUCH & SEYEDALI PEYGHAMBARI
              </Typography>
            </Grid>
            <Grid
              item
              maxWidth="lg"
              lg={8}
              md={8}
              xs={10}
              sm={10}
              className="mx-auto"
            >
              <Typography
                className="calibri"
                gutterBottom
                fontSize="1.3rem"
                mb={5}
                textAlign="center"
              >
                Screenwriter | Children&lsquo;s Literature Author | Lyricist |
                Psychologist
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              maxWidth="lg"
              lg={8}
              md={8}
              sm={10}
              xs={10}
              className="mx-auto"
            >
              <Typography className="calibri" gutterBottom fontSize="1.15rem">
                Analy and Ali, a couple deeply passionate about storytelling,
                find joy in the art of creation. They&lsquo;ve discovered their
                talent in crafting captivating screenplays, weaving enchanting
                tales for young readers, and crafting lyrics that touch the
                heart. Together, they&lsquo;ve nurtured a harmonious creative
                partnership, bound by their dedication to the craft of breathing
                life into stories using the power of words, scripts, and
                melodies. Their journey in the realm of storytelling is a
                reflection of their deep love for the art, a journey they
                continue to hold dear.
              </Typography>
            </Grid>
            <Grid
              item
              maxWidth="lg"
              lg={8}
              md={8}
              sm={10}
              xs={10}
              className="mx-auto"
            >
              <Typography className="calibri" gutterBottom fontSize="1.15rem">
                Prior to their journey as storytellers, Analy and Ali also held
                careers as psychologists, where they gained insights into the
                human psyche. However, their shared passion for the creative
                arts eventually led them to shift their focus. They made the
                courageous decision to follow their hearts and devote themselves
                to the world of storytelling, a journey they continue to hold
                dear.
              </Typography>
            </Grid>
            <Grid
              item
              maxWidth="lg"
              lg={8}
              md={8}
              sm={10}
              xs={10}
              className="mx-auto"
            >
              <Typography className="calibri" gutterBottom fontSize="1.15rem">
                Their experiences as psychologists have enriched their
                storytelling, infusing depth and understanding into their
                characters and narratives. Their love for the art is a guiding
                force, and their journey is an evolving tale of dedication to
                the craft and the pursuit of creative excellence.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
