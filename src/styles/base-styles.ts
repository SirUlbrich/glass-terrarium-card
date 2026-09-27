import { css } from 'lit';

export const baseStyles = css`
  :host {
    display: block;
    max-width: 480px;
    margin: 0 auto;
    --glass-blur: 1px;
  }

  ha-card {
    background-color: rgba(255, 255, 255, 0.22);
    background-repeat: no-repeat;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    color: #ffffff;
    padding: 20px;
    font-family: system-ui, -apple-system, Roboto, sans-serif;
  }

  .header {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* Bottom Navigation Bar */
  .tab-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    gap: 8px;
  }

  .tab-btn {
    flex: 1;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    cursor: pointer;
    padding: 6px 4px;
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  .tab-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  .tab-btn:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }

  .tab-btn.active {
    color: #ffb74d;
    font-weight: bold;
    background: rgba(255, 183, 77, 0.15);
  }
`;