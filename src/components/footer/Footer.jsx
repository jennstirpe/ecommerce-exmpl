import { StyledFooter } from "./styled/Footer.styled"

export default function Footer() {
  return (
    <StyledFooter>
        <section className="company-details">
          <h3 className="company-title">Best Buds</h3>
          <p className="company-mission">Best Buds is dedicated to helping beginners find the best plants for their spaces and provide the knowledge needed to keep them thriving.</p>

          <ul className="company-links">
            <li aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></li>
            <li aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></li>
            <li aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></li>
          </ul>
        </section>

        <section className="actions">
          <ul className="actions-links">
            <li className="actions-link">Search</li>
            <li className="actions-link">Return/Exchange Policy</li>
            <li className="actions-link">Shipping Information</li>
            <li className="actions-link">Terms of Service</li>
          </ul>
        </section>

        <section className="newsletter">
          <form className="signup">
            <label htmlFor="email-input" className="email-label">
              Sign up to be notified of new arrivals, exlusive discounts, and more!
            </label>
            <div>
                <input id="email-input" type="text" placeholder="Your Email"/>
                <button type="submit">OK</button>
            </div>
            
          </form>
        </section>
    </StyledFooter>
  )
}
