import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Details } from '../types/app.type'

interface IncidentProps {
  ticket: Details;
}

const Incident = (props: IncidentProps) => {
  const { ticket } = props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6"> Incident: {ticket.ticketName}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="caption">
                    Description: {ticket.description}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption">
                    Name: {ticket.firstName} {ticket.lastName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="caption">
                    Assignee: {ticket.assignee}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption">
                    Status: {ticket.status}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
};

export default Incident;

