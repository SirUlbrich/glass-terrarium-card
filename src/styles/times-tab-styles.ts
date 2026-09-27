import { css } from 'lit';

export const timesTabStyles = css`
  .times-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 12px;
    align-items: start;
    margin: 0 auto;
    width: fit-content;
    max-width: 80%;
    box-sizing: border-box;
  }

  .time-item {
  display: flex;
  align-items: center;
  gap: 0.4ch; 
  justify-content: flex-end;
  text-align: right;
  }

  .time-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    gap: 0.5ch;
    width: 100%;
  }

  .time-label {
    opacity: 0.85;
    text-align: left;
    white-space: nowrap;
  }

  .time-val {
    font-weight: 600;
  }
`;