import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import './css/Poem.css'; // Make sure to create this CSS file for styling
import bg from '../assest/alexander-grey-62vi3TG5EDg-unsplash.jpg'

const PoemComponents = {
  1: lazy(() => import('../Poem/Poem1')),
  2: lazy(() => import('../Poem/Poem2')),
  3: lazy(() => import('../Poem/Poem3')),
  4: lazy(() => import('../Poem/Poem4')),
};

const PoemSection = () => {
  const { id } = useParams();
  const PoemComponent = PoemComponents[id] || null;
  

  return (
    <div className="poem-section">
      <div className="poem-background">
        <Suspense fallback={<div>Loading...</div>}>
          {PoemComponent ? <PoemComponent /> : <div>Poem not found</div>}
        </Suspense>
      </div>
    </div>
  );
};

export default PoemSection;
