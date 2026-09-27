import { css } from 'lit';

export const overviewTabStyles = css`
  .grid-sun {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;
  }

  .sun-box {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    padding: 14px;
    text-align: center;
  }

  .sun-title {
    font-size: 0.9rem;
    opacity: 0.9;
    margin-bottom: 4px;
  }

  .sun-value {
    font-size: 2.2rem;
    font-weight: 600;
    text-shadow: 0 0 12px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.5);
  }

  .zones-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
    margin-bottom: 16px;
  }

  .zone-row {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    padding: 8px 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.9rem;
  }

  .zone-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .zone-label {
    opacity: 0.9;
  }

  .zone-value {
    font-weight: 600;
    text-shadow: 0 0 12px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.5);
  }

  .combined-box {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 12px;
    padding: 12px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    text-align: center;
  }

  .item-box {
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 6px;
  }

  .box-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }
    
  .item-label {
    opacity: 0.9;
  }

  .box-divider {
    width: 1px;
    height: 70%;
    background: rgba(255, 255, 255, 0.3);
  }

  .sub-title {
    font-size: 0.8rem;
    opacity: 0.85;
    margin-bottom: 4px;
  }

  .sub-value {
    font-size: 1.0rem;
    font-weight: 600;
    text-shadow: 0 0 12px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.5);
  }

  .sub-value.orange {
    color: #ffb74d;
    text-shadow: 0 0 10px rgba(255, 183, 77, 0.6);
  }
`;