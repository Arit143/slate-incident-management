import React, { Component } from 'react';

interface IncidentProps {
    title: string;
    assignee: string;
    status: string;
}

export class Incident extends Component<IncidentProps> {
  render () {
    return (
      <div style={{border: '1px solid black'}}>
        <p>{ this.props.title }</p>
        <p>Assignee: { this.props.assignee }</p>
        <p>Status: { this.props.status }</p>
      </div>
    )
  }
}