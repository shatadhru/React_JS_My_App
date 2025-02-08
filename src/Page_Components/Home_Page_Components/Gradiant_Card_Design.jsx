import  { useState, useEffect } from 'react';
import '../Page_Component_Css/Gradiant_Card_Design.css'; // CSS ফাইল অন্তর্ভুক্ত করুন

const GradientCard = () => {
  const [gradient, setGradient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient(prev => (prev + 1) % 360);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card" style={{ border: `5px solid hsl(${gradient}, 100%, 50%)` }}>
      <h2>Card Title</h2>
      <p>This is a card with a gradient border that changes color.</p>
    </div>
  );
}

export default GradientCard;
