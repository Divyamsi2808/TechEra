import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-fount-content-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
        style={{width: '40%'}}
      />
      <h1 style={{color: '#475569', fontSize: '40px', fontWeight: '700'}}>
        Page Not Found
      </h1>
      <p style={{color: '#64748b', fontSize: '24px', fontWeight: '600'}}>
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </div>
)

export default NotFound
