import React, { Component } from "react";
import { Button} from 'react-bootstrap';

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return  <div className="event">
              <h2 className="summary">{event.summary}</h2>
              <p className="start-date">
              {event.start.dateTime} ({event.start.timeZone})
              </p>
              <p className="location">
                {event.location}
              </p>
              <Button variant="primary" className="show-more" onClick={this.handleClick}>
                    Toggle details
              </Button>
                <div className={`more-info ${collapsed ? `hidden` : `show`}`}>
                  <h3>About the event:</h3>
                  <a href={event.htmlLink} rel="noreferrer" target="_blank">
                    See details on Google Calendar
                  </a>
                  <p className="event-description">{event.description}</p>
                </div>
            </div>
  }
}
export default Event;