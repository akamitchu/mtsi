import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Mahajan Technology Solutions is your trusted partner in end to end technology implementaion services. Benefit from our extensive experience across business domains and bring your IT strategy to life.
          </p>
          <p>
            Turning your ideas into reality is just an email away. With expert guidance and project delivery by our experts, your organization can confidently take strides in leveraging the latest technology to gain an edge. Delight your users and customers with thoughtfully designed products that are intuitive, reliable & secure. MTSI has a consistent track record of on time delivery & adaptability to complexities without running over budget. The transformation you envisioned for your business is just around the corner with MTSI as your technology partner. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Automation</p><p>
            Analytics</p><p>
            CRM Implementation</p><p>
            Blockchain</p><p>
            IOT</p><p>
            Artificial Intelligence</p><p>
            CI/CD</p><p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Incorporated in 2019, Mahajan Technology Solutions Inc. (MTSI) is based out of Vancouver, British Columbia, Canada. 
            </p>
            <p>
            MTSI started out with a mission to provide best-in-class software products and enable organizations to run their businesses and operations more effectively. We acheive that by delivering effective IT solutions and quality services to enhance the competitive advantages of our clients.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="POST" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc1Sr6rVy8qx32caxvw_IAu7U500E5DnCdNUNXPAmWqz_rtFw/formResponse">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" id="1339838666" name="entry.1339838666" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input id="1328659957" type="text" name="entry.1328659957" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="941259398" name="entry.941259398" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="mailto:support@mtsi.ca"
                className="icon far fa-envelope"
              >
                <span className="label">Email us</span>
              </a>
            </li><span className="label">Email us</span>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
