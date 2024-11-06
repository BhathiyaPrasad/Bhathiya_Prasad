import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row, Col } from 'react-bootstrap';

const GithubActivityAndSponsor = () => {
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
        <div className="mt-5 text-center">
          <h2 className="sponsor-heading text-white">Support My Work</h2>
          <iframe
            src="https://github.com/sponsors/BhathiyaPrasad/card"
            title="Sponsor BhathiyaPrasad"
            height="225"
            width="100%"
            style={{
              border: 0,
              maxWidth: '600px',
              width: '100%'
            }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default GithubActivityAndSponsor;