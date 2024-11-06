/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row, Col } from 'react-bootstrap';

const Github = () => {
  return (
    <Row className="justify-content-center pb-4">
      <Col xs={12} md={8}>
        <h1 className="project-heading pb-4">
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="BhathiyaPrasad"
          blockSize={15}
          blockMargin={5}
          color="purple"
          fontSize={16}
        />
      </Col>
      <Col xs={12} md={4}>
        <div className="mt-5 text-center" style={{ position: 'relative' }}>
          <h2 className="sponsor-heading text-white pb-4">Support My Work</h2>
          
          <iframe
            src="https://github.com/sponsors/BhathiyaPrasad/card"
            title="Sponsor BhathiyaPrasad"
            height="225"
            width="100%"
            style={{
              border: 0,
              maxWidth: '600px',
              width: '100%',
            }}
          />
          
          {/* Clickable Overlay */}
          <a 
            href="https://github.com/sponsors/BhathiyaPrasad"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              display: 'block',
            }}
          ></a>
        </div>
      </Col>
    </Row>
  );
};

export default Github;
