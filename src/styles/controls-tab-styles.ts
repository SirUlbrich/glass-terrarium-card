import { css } from 'lit';

export const controlsTabStyles = css`
  
  .controls-layout {
    display: flex;
    gap: 12px;
    align-items: stretch;
  }

  .btn-stack {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .btn-stack-2 {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 auto;
    max-width: 50%;
  }

  .btn {
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 6px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .badge {
    padding: 2px 8px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 0.75rem;
    background: rgba(0, 0, 0, 0.3);
    color: #ccc;
  }

  .badge.on {
    background: #e2f7ed;
    color: #1b5e20;
  }

  .mode-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 8px;
  }

  .mode-title {
    font-size: 1.0rem;
    opacity: 0.85;
    margin-bottom: 6px;
    text-align: center;
  }

  .mode-dropdown {
    width: 100%;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    padding: 8px 12px;
    font-size: 0.9rem;
    outline: none;
    cursor: pointer;
    text-transform: capitalize;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 32px;
  }

  .mode-dropdown option {
    background-color: #1e1e1e;
    color: #ffffff;
  }

  .date-picker-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 10px;
  }

  .date-label {
    font-size: 0.8rem;
    opacity: 0.85;
    text-align: center;
  }

  .date-input {
    width: 100%;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    padding: 8px 12px;
    font-size: 0.9rem;
    outline: none;
    cursor: pointer;
    color: #ffffff;
  }

  .date-input::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }

  .date-input:focus {
    border-color: #ffb74d;
    box-shadow: 0 0 10px rgba(255, 183, 77, 0.4);
  }

`;