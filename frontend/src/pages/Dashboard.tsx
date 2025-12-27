import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Dashboard</h1>
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        </div>

        <div style={styles.userInfo}>
          <h2 style={styles.welcome}>Welcome back, {user?.name}! 👋</h2>
          
          <div style={styles.infoSection}>
            <div style={styles.infoItem}>
              <span style={styles.label}>Name:</span>
              <span style={styles.value}>{user?.name}</span>
            </div>
            
            <div style={styles.infoItem}>
              <span style={styles.label}>Email:</span>
              <span style={styles.value}>{user?.email}</span>
            </div>
            
            <div style={styles.infoItem}>
              <span style={styles.label}>User ID:</span>
              <span style={styles.value}>{user?.id}</span>
            </div>
          </div>

          <div style={styles.successBox}>
            <p>You are successfully authenticated!</p>
            <p style={styles.note}>
              This is a protected route. Only authenticated users can access this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Dashboard;


//----------------------------------------------------------------------------------------------------------

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  },
  card: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    padding: '40px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '2px solid #eee'
  },
  title: {
    margin: 0,
    color: '#333'
  },
  logoutBtn: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '25px'
  },
  welcome: {
    color: '#555',
    fontSize: '24px',
    fontWeight: '400'
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '6px'
  },
  infoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0'
  },
  label: {
    fontWeight: '600',
    color: '#666'
  },
  value: {
    color: '#333',
    fontSize: '15px'
  },
  successBox: {
    backgroundColor: '#d4edda',
    border: '1px solid #c3e6cb',
    color: '#155724',
    padding: '20px',
    borderRadius: '6px',
    marginTop: '10px'
  },
  note: {
    margin: '10px 0 0 0',
    fontSize: '14px',
    opacity: 0.9
  }
};

