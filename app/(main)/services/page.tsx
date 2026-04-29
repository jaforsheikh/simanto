import {
  FiSearch,
  FiTrendingUp,
  FiGlobe,
  FiEdit3,
  FiTarget,
  FiStar,
} from "react-icons/fi";

export default function ServicesPage() {
  const services = [
    {
      icon: <FiSearch />,
      title: "SEO Marketing",
      desc: "Rank higher on Google and get consistent organic traffic that converts into real customers.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Paid Ads Management",
      desc: "Run profitable ad campaigns on Facebook & Google with maximum ROI and growth.",
    },
    {
      icon: <FiGlobe />,
      title: "Website Development",
      desc: "Modern, fast, and conversion-focused websites built with latest technologies.",
    },
    {
      icon: <FiStar />,
      title: "Reputation Management",
      desc: "Build trust, manage reviews, and grow your brand authority online.",
    },
    {
      icon: <FiEdit3 />,
      title: "Content Strategy",
      desc: "Strategic content planning for social media, blogs, and brand storytelling.",
    },
    {
      icon: <FiTarget />,
      title: "Social Media Marketing",
      desc: "Grow your audience, engagement, and turn attention into real business.",
    },
  ];

  return (
    <main className="services-page">
      <style>{`
        .services-page {
          background: #f4f8ff;
          padding: 100px 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .heading h1 {
          font-size: 44px;
          font-weight: 900;
          color: #020817;
        }

        .heading p {
          margin-top: 16px;
          color: #64748b;
          line-height: 1.8;
        }

        .grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(14px);
          border-radius: 22px;
          padding: 28px;
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 10px 30px rgba(2,8,23,0.08);
          transition: all 0.35s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(2,8,23,0.12);
        }

        .icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: rgba(37, 99, 235, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #2563eb;
        }

        .card h3 {
          margin-top: 18px;
          font-size: 20px;
          font-weight: 900;
          color: #020817;
        }

        .card p {
          margin-top: 10px;
          color: #64748b;
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .heading h1 {
            font-size: 32px;
          }
        }
      `}</style>

      <div className="container">
        <div className="heading">
          <h1>Services that drive real growth</h1>
          <p>
            We provide powerful marketing solutions designed to increase traffic,
            leads, and long-term business success.
          </p>
        </div>

        <div className="grid">
          {services.map((service, i) => (
            <div className="card" key={i}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}