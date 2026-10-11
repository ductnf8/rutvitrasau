import React from 'react';
import { motion } from 'motion/react';
import { Users, Clock, ShieldCheck, Zap } from 'lucide-react';
import { STATS } from '../data/siteData';

export default function StatsBar() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Users': return <Users size={22} color="#ffffff" />;
      case 'Clock': return <Clock size={22} color="#ffffff" />;
      case 'ShieldCheck': return <ShieldCheck size={22} color="#ffffff" />;
      case 'Zap': return <Zap size={22} color="#ffffff" />;
      default: return null;
    }
  };

  return (
    <section className="stats-bar" aria-label="Thống kê uy tín">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="stat-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.09 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="stat-icon-wrapper">
                {getIcon(stat.icon)}
              </div>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
