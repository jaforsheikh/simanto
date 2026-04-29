import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaDiscord,
  FaTiktok,
} from "react-icons/fa6";
import { FiArrowRight, FiHeart, FiAward } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="simanto-footer">
      <style>{`
        .simanto-footer {
          position: relative;
          overflow: hidden;
          background: #070821;
          color: #fff;
          padding: 90px 24px 36px;
        }

        .footer-shape-left {
          position: absolute;
          width: 260px;
          height: 260px;
          left: -80px;
          top: -80px;
          border-radius: 42%;
          background: #11164b;
        }

        .footer-shape-left::after {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 42%;
          border: 7px solid #38bdf8;
          transform: rotate(12deg);
        }

        .footer-shape-right {
          position: absolute;
          width: 300px;
          height: 300px;
          right: -120px;
          top: 260px;
          border-radius: 42%;
          background: #11164b;
        }

        .footer-shape-right::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 7px solid #7c3aed;
          left: -30px;
          top: -50px;
        }

        .footer-container {
          position: relative;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-cta {
          text-align: center;
          padding-bottom: 78px;
        }

        .footer-cta h2 {
          font-size: clamp(42px, 5vw, 72px);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .footer-cta p {
          margin: 22px auto 0;
          max-width: 640px;
          color: rgba(255,255,255,0.65);
          font-size: 18px;
          line-height: 1.8;
        }

        .footer-btn-wrap {
          margin-top: 36px;
          display: inline-flex;
          align-items: center;
          position: relative;
        }

        .footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 42px;
          background: #5145cd;
          border-radius: 14px;
          color: #fff;
          font-weight: 900;
          font-size: 18px;
          text-decoration: none;
          box-shadow: 0 24px 60px rgba(81,69,205,.35);
          transition: .25s ease;
        }

        .footer-btn:hover {
          transform: translateY(-4px);
          background: #0b4dba;
        }

        .line {
          height: 1px;
          width: 100%;
          background: rgba(255,255,255,.12);
        }

        .footer-main {
          padding: 60px 0 54px;
          display: grid;
          grid-template-columns: 1.35fr .75fr .75fr 1fr;
          gap: 70px;
          align-items: start;
        }

        .footer-logo {
          display: inline-block;
          font-size: 48px;
          font-weight: 900;
          letter-spacing: -2px;
          color: white;
          text-decoration: none;
        }

        .footer-logo span {
          color: #4da3ff;
        }

        .footer-desc {
          margin-top: 28px;
          display: flex;
          gap: 10px;
          max-width: 380px;
          color: rgba(255,255,255,.62);
          font-size: 17px;
          line-height: 1.8;
        }

        .badge {
          margin-top: 24px;
          width: fit-content;
          display: flex;
          gap: 12px;
          align-items: center;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.04);
          border-radius: 14px;
          padding: 15px 20px;
        }

        .badge small {
          display: block;
          color: rgba(255,255,255,.45);
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        .badge strong {
          font-size: 18px;
        }

        .status {
          margin-top: 22px;
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 14px;
          background: rgba(255,255,255,.1);
          padding: 16px 20px;
          font-weight: 800;
        }

        .status-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #34d399;
        }

        .social-row {
          margin-top: 28px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-row a {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,.09);
          color: white;
          transition: .25s ease;
        }

        .social-row a:hover {
          background: #5145cd;
          transform: translateY(-4px);
        }

        .footer-col h3 {
          font-size: 14px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .8px;
          margin-bottom: 22px;
        }

        .footer-col a {
          display: block;
          color: rgba(255,255,255,.58);
          text-decoration: none;
          font-size: 17px;
          line-height: 2;
          transition: .2s ease;
        }

        .footer-col a:hover {
          color: white;
          transform: translateX(5px);
        }

        .partner-text {
          color: rgba(255,255,255,.62);
          font-size: 17px;
          line-height: 1.8;
          max-width: 280px;
        }

        .partner-link {
          margin-top: 18px;
          display: inline-flex !important;
          align-items: center;
          gap: 8px;
          color: #fbbf24 !important;
          font-weight: 900;
        }

        .footer-bottom {
          padding-top: 28px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: rgba(255,255,255,.45);
          font-size: 14px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }

        .footer-bottom a {
          color: rgba(255,255,255,.55);
          text-decoration: none;
        }

        .footer-bottom a:hover {
          color: white;
        }

        @media (max-width: 980px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 44px;
          }
        }

        @media (max-width: 640px) {
          .simanto-footer {
            padding: 70px 18px 30px;
          }

          .footer-main {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
          }

          .footer-btn {
            padding: 17px 28px;
          }
        }
      `}</style>

      <div className="footer-shape-left" />
      <div className="footer-shape-right" />

      <div className="footer-container">
        <div className="footer-cta">
          <h2>Start Growing Your Business!</h2>
          <p>
            Build a modern, fast, and conversion-focused marketing system with
            Simanto.
          </p>

          <div className="footer-btn-wrap">
            <Link href="/contact" className="footer-btn">
              Get Strategy Now <FiArrowRight />
            </Link>
          </div>
        </div>

        <div className="line" />

        <div className="footer-main">
          <div>
            <Link href="/" className="footer-logo">
              Si<span>manto</span>
            </Link>

            <p className="footer-desc">
              <FiHeart style={{ color: "#f87171", marginTop: 6 }} />
              This website is built with strategy, creativity, and
              conversion-focused marketing systems.
            </p>

            <div className="badge">
              <FiAward size={30} color="#fbbf24" />
              <div>
                <small>Growth Badge</small>
                <strong>#1 Marketing Partner</strong>
              </div>
            </div>

            <div className="status">
              <span className="status-dot" />
              All systems operational
            </div>

            <div className="social-row">
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaDiscord /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTiktok /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>General</h3>
            <Link href="/about">About Simanto</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pricing">Pricing</Link>

            <h3 style={{ marginTop: 36 }}>Resources</h3>
            <Link href="/blog">Blog</Link>
            <Link href="/services">SEO Marketing</Link>
            <Link href="/services">Web Development</Link>
            <Link href="/portfolio">Case Studies</Link>
          </div>

          <div className="footer-col">
            <h3>Follow Us</h3>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">Discord</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>

          <div className="footer-col">
            <h3>Partner Program</h3>
            <p className="partner-text">
              Earn up to 40% recurring commission by referring clients to
              Simanto.
            </p>

            <Link href="/contact" className="partner-link">
              Become a Partner <FiArrowRight />
            </Link>
          </div>
        </div>

        <div className="line" />

        <div className="footer-bottom">
          <p>© 2026 Simanto. All rights reserved.</p>

          <div className="footer-bottom-links">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}