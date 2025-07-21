
import React from 'react';
import './HostPanel.scss';

const HostPanel = ({ onKick, onPause, onToggleSpectator, onAddSlot }) => {
  return (
    <div className="host-panel">
      <button className="host-btn" onClick={onPause}>⏸ Пауза</button>
      <button className="host-btn" onClick={onAddSlot}>➕ Слот</button>
      <button className="host-btn" onClick={onToggleSpectator}>👁 Зритель</button>
      <button className="host-btn" onClick={onKick}>❌ Кик</button>
    </div>
  );
};

export default HostPanel;
