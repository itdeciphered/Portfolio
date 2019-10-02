import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Private() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div class="private">
      <h2 class="page-section-heading text-center text-uppercase mb-0">
        Private Projects
      </h2>

      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-20"
            src="https://images.pexels.com/photos/798094/pexels-photo-798094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>RoboTech</h3>
            <p>
              VB.NET - A Swiss army knife of sorts. Packages together every tool
              or program needed to troubleshoot and resolve an IT issue. Enabled
              Computer Technicains to quickly resolve issues from any computer
              since it is network hosted. Also can manage remote computers and
              deploy common hotfixes. Secured by active directory groups
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-20"
            src="https://www.gamasutra.com/db_area/images/news/2018/Jun/320213/supermario64thumb1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>RoboDeploy</h3>
            <p>
              C# - An application for easyly deploying updates, hotfixes, etc to
              a large group of computers. Roughly 5000 in less than a minute.
              Full reportable features based on results. Also utilized PS Exec.
              Secured by active directory groups{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-20"
            src="https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Millions of non GUI Apps</h3>
            <p>
              Millions of other non GUI C#, VB.net niche applications that
              served short and long term organization needs that individually
              may sound mundance and pointless...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Private;
