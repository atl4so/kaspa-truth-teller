import React from 'react';

interface FalseClaimProps {
  claim: string;
}

const FalseClaim: React.FC<FalseClaimProps> = ({ claim }) => {
  return (
    <div className="false-claim-container">
      <div className="false-claim-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="false-claim-content">
        <div className="false-claim-label">The False Claim:</div>
        <p className="false-claim-text">{claim}</p>
      </div>
    </div>
  );
};

export default FalseClaim;
