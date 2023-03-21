import React, { Component } from 'react';
import { Card, CardContent } from '@mui/material';
import { readMessages } from "./Message.js";
import "./Feed.css";

class Feed extends Component {
    render() {
        const messages = readMessages() || [];
        return (
            <div className="Feed">
                <div className="Feed-header">
                    <h2>My Thoughts Today</h2>
                </div>
                <div>
                    {messages.map((data) => {
                        return (
                            <Card>
                                <CardContent className="Feed_ChirpCard">
                                    <p className="Feed_Date">
                                        {data.date}
                                    </p>
                                    <p className="Feed_User">
                                        {data.user}
                                    </p>
                                    <p className="Feed_Message">
                                        {data.chirpMessage}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Feed;