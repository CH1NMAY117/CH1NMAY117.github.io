import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, designmediadata } from "../../content_option";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export const DesignMedia = () => {
  const ricMediaArray = (designmediadata.ricMedia || []).filter((m) => m.type === "image");
  const jbmshstMediaArray = (designmediadata.jbmshstMedia || []).filter((m) => m.type === "image");
  const rcpMediaArray = (designmediadata.rotaractParidrishyaMedia || []).filter((m) => m.type === "image");
  const singhMediaArray = (designmediadata.singhPharmacyMedia || []).filter((m) => m.type === "image");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const AUTOSCROLL_MS = 5000;

  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    clearInterval(progressRef.current);
    setProgress(0);
    // progress bar updates every 50ms
    let elapsed = 0;
    progressRef.current = setInterval(() => {
      elapsed += 50;
      const pct = Math.min(100, (elapsed / AUTOSCROLL_MS) * 100);
      setProgress(pct);
      if (elapsed >= AUTOSCROLL_MS) {
        clearInterval(progressRef.current);
      }
    }, 50);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ricMediaArray.length);
      setProgress(0);
      // restart progress bar
      clearInterval(progressRef.current);
      let e = 0;
      progressRef.current = setInterval(() => {
        e += 50;
        const pct = Math.min(100, (e / AUTOSCROLL_MS) * 100);
        setProgress(pct);
        if (e >= AUTOSCROLL_MS) clearInterval(progressRef.current);
      }, 50);
    }, AUTOSCROLL_MS);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, [ricMediaArray.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ricMediaArray.length);
    startAutoScroll();
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ricMediaArray.length) % ricMediaArray.length);
    startAutoScroll();
  };
  return (
    <HelmetProvider>
      <Container className="designmedia-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Design & Media | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Hero Section */}
        <Row className="mb-4 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-5 mb-3 text-center hero-title">
              {designmediadata.heroTitle}
            </h1>
          </Col>
        </Row>
        {/* Extra break rows after hero title */}
        <Row className="mb-2"><Col>&nbsp;</Col></Row>
        <Row className="mb-2"><Col>&nbsp;</Col></Row>

        {/* RIC Section */}
        <Row className="mb-2">
          <Col lg="12">
            <h2 className="section-heading">{designmediadata.sections[0].heading}</h2>
            <div className="section-break" aria-hidden="true" />
            {/* Requested extra break row after SOME VISUALS heading */}
            <Row className="mb-2"><Col>&nbsp;</Col></Row>
            <h3 className="section-subheading text-center">
              {designmediadata.sections[0].subheading}
            </h3>
          </Col>
        </Row>

        {/* Arrow Navigation Carousel */}
        <div className="nav-carousel">
          <button className="nav-arrow left" onClick={handlePrev} aria-label="Previous">
            <FaChevronLeft />
          </button>

          <div className="nav-viewport">
            <div
              className="nav-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {ricMediaArray.map((media, index) => (
                <div key={index} className="nav-item">
                    <img
                      src={media.src}
                      alt={`RIC ${index + 1}`}
                      className="nav-image"
                      loading="lazy"
                      decoding="async"
                      onError={() => console.log(`Image ${index + 1} failed to load:`, media.src)}
                    />
                </div>
              ))}
            </div>
          </div>

          <button className="nav-arrow right" onClick={handleNext} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>

        {/* Loading Bar */}
        <div className="nav-progress">
          <div className="nav-progress__bar" style={{ width: `${progress}%` }} />
        </div>

        {/* Break Row after first carousel */}
        <Row className="mb-4"><Col>&nbsp;</Col></Row>

        {/* JBMSHST Section */}
        <Row className="mb-2">
          <Col lg="12">
            <h3 className="section-subheading text-center">JBMSHST, IIT Guwahati</h3>
          </Col>
        </Row>

        {/* JBMSHST Carousel - same style */}
        <JBMSHSTCarousel items={jbmshstMediaArray} />

        {/* Break Row */}
        <Row className="mb-4"><Col>&nbsp;</Col></Row>

        {/* Rotaract & Paridrishya Section */}
        <Row className="mb-2">
          <Col lg="12">
            <h3 className="section-subheading text-center">Rotaract Club of DPSRU & Paridrishya DPSRU</h3>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col lg="12">
            <p className="text-center">
              Paridrishya Portfolio {
                <a
                  className="inline-link"
                  href={designmediadata.paridrishyaPortfolioLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!designmediadata.paridrishyaPortfolioLink) e.preventDefault();
                  }}
                >
                  here
                </a>
              }
            </p>
          </Col>
        </Row>
        <AutoCarousel items={rcpMediaArray} />

        {/* Break Row */}
        <Row className="mb-4"><Col>&nbsp;</Col></Row>

        {/* Singh Pharmacy Section */}
        <Row className="mb-2">
          <Col lg="12">
            <h3 className="section-subheading text-center">Singh Pharmacy, Nottingham UK</h3>
          </Col>
        </Row>
        <AutoCarousel items={singhMediaArray} />

        {/* Divider before Pages Managed */}
        <hr className="section-divider" />

        {/* Pages Managed Section */}
        <Row className="mb-4 mt-4 pt-4">
          <Col lg="12">
            <h2 className="section-heading">PAGES MANAGED</h2>
          </Col>
        </Row>
        <Row className="logo-grid mb-4">
          {designmediadata.pagesManaged.map((page, i) => (
            <Col xs={6} sm={4} md={3} lg={2} className="logo-item" key={i}>
              {page.link ? (
                <a href={page.link} target="_blank" rel="noopener noreferrer" className="logo-placeholder" aria-label={page.name}>
                  {page.logo ? (
                    <img src={page.logo} alt={page.name} loading="lazy" decoding="async" />
                  ) : (
                    <p>{page.name}</p>
                  )}
                </a>
              ) : (
                <div className="logo-placeholder">
                  {page.logo ? (
                    <img src={page.logo} alt={page.name} loading="lazy" decoding="async" />
                  ) : (
                    <p>{page.name}</p>
                  )}
                </div>
              )}
            </Col>
          ))}
        </Row>

        {/* Tools Section */}
        <Row className="mb-4 mt-4 pt-4">
          <Col lg="12">
            <h2 className="section-heading text-center tools-heading">TOOLS</h2>
          </Col>
        </Row>
        <Row className="logo-grid tools-grid mb-4 pb-4">
          {designmediadata.tools.map((tool, i) => (
            <Col xs={6} sm={4} md={3} lg={3} xl={2} className="logo-item" key={i}>
              <div className="logo-placeholder">
                {tool.logo ? (
                  <img src={tool.logo} alt={tool.name} loading="lazy" decoding="async" />
                ) : (
                  <p>{tool.name}</p>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};

// Generic auto-scrolling carousel reused across sections
const AutoCarousel = ({ items, altPrefix = "Media" }) => {
  const [index, setIndex] = useState(0);
  const [pct, setPct] = useState(0);
  const intRef = useRef(null);
  const progRef = useRef(null);
  const AUTOSCROLL_MS = 5000;

  const start = () => {
    clearInterval(intRef.current);
    clearInterval(progRef.current);
    setPct(0);
    let elapsed = 0;
    progRef.current = setInterval(() => {
      elapsed += 50;
      const p = Math.min(100, (elapsed / AUTOSCROLL_MS) * 100);
      setPct(p);
      if (elapsed >= AUTOSCROLL_MS) clearInterval(progRef.current);
    }, 50);
    intRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % (items.length || 1));
      // restart progress on each auto-advance
      clearInterval(progRef.current);
      setPct(0);
      elapsed = 0;
      progRef.current = setInterval(() => {
        elapsed += 50;
        const p = Math.min(100, (elapsed / AUTOSCROLL_MS) * 100);
        setPct(p);
        if (elapsed >= AUTOSCROLL_MS) clearInterval(progRef.current);
      }, 50);
    }, AUTOSCROLL_MS);
  };

  useEffect(() => {
    start();
    return () => {
      clearInterval(intRef.current);
      clearInterval(progRef.current);
    };
  }, [items.length]);

  const next = () => { setIndex((prev) => (prev + 1) % items.length); start(); };
  const prev = () => { setIndex((prev) => (prev - 1 + items.length) % items.length); start(); };

  if (!items || items.length === 0) return null;

  return (
    <>
      <div className="nav-carousel">
        <button className="nav-arrow left" onClick={prev} aria-label="Previous">
          <FaChevronLeft />
        </button>
        <div className="nav-viewport">
          <div className="nav-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {items.map((media, i) => (
              <div key={i} className="nav-item">
                <img
                  src={media.src}
                  alt={`${altPrefix} ${i + 1}`}
                  className="nav-image"
                  loading="lazy"
                  decoding="async"
                  onError={() => console.log(`Image ${i + 1} failed to load:`, media.src)}
                />
              </div>
            ))}
          </div>
        </div>
        <button className="nav-arrow right" onClick={next} aria-label="Next">
          <FaChevronRight />
        </button>
      </div>
      <div className="nav-progress">
        <div className="nav-progress__bar" style={{ width: `${pct}%` }} />
      </div>
    </>
  );
};

// Backwards-compatible alias for existing usage
const JBMSHSTCarousel = (props) => <AutoCarousel altPrefix="JBMSHST" {...props} />;
