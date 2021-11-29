import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import FlightIcon from '@mui/icons-material/Flight';
import TrainIcon from '@mui/icons-material/Train';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

import './Trips.css'

const IconTrip = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

const IconFlight = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
      theme.palette.primary.dark,
      0.24
    )} 100%)`
  }));

  const IconTrain = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.secondary.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.secondary.dark, 0)} 0%, ${alpha(
      theme.palette.secondary.dark,
      0.24
    )} 100%)`
  }));

  const IconCab = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.success.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.success.dark, 0)} 0%, ${alpha(
      theme.palette.success.dark,
      0.24
    )} 100%)`
  }));
// ----------------------------------------------------------------------

export default function Trips() {
  return (
      <>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <div className="tripBoxStyle">
              <IconTrip>
                <CardTravelIcon />
              </IconTrip>
              <Typography variant="h3">100</Typography>
              <Typography variant="subtitle2">
                Trips Completed
              </Typography>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <div className="flightBoxStyle">
              <IconFlight>
                <FlightIcon />
              </IconFlight>
              <Typography variant="h3">50</Typography>
              <Typography variant="subtitle2">
                Trips by Flight
              </Typography>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <div className="trainBoxStyle">
              <IconTrain>
                <TrainIcon />
              </IconTrain>
              <Typography variant="h3">25</Typography>
              <Typography variant="subtitle2">
                Trips by Train
              </Typography>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <div className="cabBoxStyle">
              <IconCab>
                <LocalTaxiIcon />
              </IconCab>
              <Typography variant="h3">25</Typography>
              <Typography variant="subtitle2">
                Trips by Cab
              </Typography>
            </div>
            </Grid>
    <Grid item xs={12} sm={12} md={12}>
        <div className="tripInfo">
            <h2 className="tripID">Trip ID=whatever</h2>
            <div className="tripInfoBar">
                <div className="tripInfoItems">
                    <p>Departure:</p>
                </div>
                <div className="tripInfoItems">
                    <p>Destination:</p>
                </div>
                <div className="tripInfoItems">
                    <p>Date:</p>
                </div>
                <div className="tripInfoItems">
                    <p>Time:</p>
                </div>
            </div>
        </div>
    </Grid>
    <Grid item xs={12} sm={12} md={12}>
        <div className="tripInfo">
            <h2 className="tripID">Trip ID=whatever</h2>
            <div className="tripInfoBar">
                <div className="tripInfoItems">
                    <p>Departure:</p>
                </div>
                <div className="tripInfoItems">
                    <p>Destination:</p>
                </div>
                <div className="tripInfoItems">
                    <p>Date:</p>
                </div>
                <div className="tripInfoItems">
                    <p>Time:</p>
                </div>
            </div>
        </div>
    </Grid>
    <Grid item xs={12} sm={12} md={12}>
        <div className="tripInfo">
            <h2 className="tripID">Trip ID=whatever</h2>
            <div className="tripInfoBar">
                <div className="tripInfoItems">
                    <p>Departure:</p>
                </div>
                <div className="tripInfoItems">
                    <p>Destination:</p>
                </div>
                <div className="tripInfoItems">
                    <p>Date:</p>
                </div>
                <div className="tripInfoItems">
                    <p>Time:</p>
                </div>
            </div>
        </div>
    </Grid>
    </Grid>
    </>
  );
}
